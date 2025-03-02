// Contains server-side functions for handling user actions, specifically updating user details and checking their onboarding status.

"use server";

// import { marketOutlook } from "@prisma/client";
import { auth } from "@clerk/nextjs/server"; // ✅ Import auth function
import { db } from "../lib/prisma"; // ✅ Ensure db is imported
// import { err } from "inngest/types";

export async function updateUser(data) {
  console.log("Hello:");
  const { userId } = await auth();
  console.log("User ID:", userId);
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });
  console.log(db.user.id);

//   const user = await db?.user?.findUnique({
//   where: { clerkUserId: userId },
// });

  if (!user) throw new Error("User not found");

  try {
    // Perform 3 API calls
    const result = await db.$transaction(
      // Ensures atomicity, meaning either all operations succeed or none
      async (tx) => {
        // 1. Find if the industry exists
        let industryInsights = await tx.industryInsights.findUnique({
          where: {
            industry: data.industry,
          },
        });
        // 2. If industry doesn't exists, create it with default values - will replace it with AI later
        if (!industryInsights) {
          industryInsights = await tx.industryInsights.create({
            data: {
              industry: data.industry,
              salaryRanges: [],
              growthRates: 0,
              demandLevel: "Medium",
              topSkills: [],
              marketOutlook: "Neutral",
              keyTrends: [],
              recommenededSkills: [],
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
            experience: data.experience,
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
    console.error("Error checking onboarding status ", error.message);
    throw new Error("Failed to check onboarding status");
  }
}
// export async function getUserOnboardingStatus() {
//   const { userId } = await auth();
//   if (!userId) throw new Error("Unauthorized");

//   const user = await db.user.findUnique({
//     where: {
//       clerkUserId: userId,
//     },
//     select: {
//       industry: true,
//     },
//   });

//   if (!user) throw new Error("User not found");

//   return {
//     isOnboarded: Boolean(user.industry), // Fix the logic
//   };
// }


