import React from "react";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    // Fix condition (redirect if NOT onboarded)
    redirect("/onboarding");
  }

  return <div>Welcome to the Dashboard</div>;
};

export default IndustryInsightsPage;
