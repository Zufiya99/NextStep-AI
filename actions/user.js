// Contains server-side functions for handling user actions, specifically updating user details and checking their onboarding status.

"use server";

// import { marketOutlook } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";  
import { db } from "../lib/prisma"; 
// import { err } from "inngest/types";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  if (!user) throw new Error("User not found");

  try {
    // Perform 3 API calls
    const result = await db.$transaction(
      // Ensures atomicity, meaning either all operations succeed or none
      async (tx) => {
        // 1. Find if the industry exists
        let industryInsights = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        // 2. If industry doesn't exists, create it with default values - will replace it with AI later
        if (!industryInsights) {
          industryInsights = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [],
              growthRate: 0,
              demandLevel: "Medium",
              topSkills: [],
              marketOutlook: "Neutral",
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }
        // 3. Update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: parseInt(data.experience),
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updatedUser, industryInsights };
      },
      {
        timeout: 10000,
      }
    );
    return { success: true, ...result };
  } catch (error) {
    console.error("Error updating user and industry: ", error.message);
    throw new Error("Failed to update profile " + error.message);
  }
}

export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");
  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });
    return {
      // isOnboarded: Boolean(user?.industry),
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error.message);
    throw new Error(`Failed to check onboarding status: ${error.message}`);
  }
}
