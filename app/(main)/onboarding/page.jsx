import React from "react";
import OnboardingForm from "./_components/OnboardingForm";
import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  // Check if user has already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    // Redirect if already onboarded
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;
