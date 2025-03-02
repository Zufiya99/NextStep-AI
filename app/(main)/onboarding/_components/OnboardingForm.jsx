"use client";

import React, { useEffect, useState } from "react";
import { industries } from "@/data/industries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { onBoardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFetch from "@/hooks/user-fetch";
import { toast } from "sonner";
import {
  Loader2,
  Briefcase,
  Clock,
  Code,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { updateUser } from "@/actions/user.js";
import { motion } from "framer-motion";

const OnboardingForm = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onBoardingSchema),
  });

  const watchIndustry = watch("industry");

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateData,
  } = useFetch(updateUser);

  const onSubmit = async (values) => {
    try {
      const formattedIndustry = `${values.industry} ${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry: formattedIndustry,
      });
    } catch (error) {
      console.error("Onboarding error: ", error.message);
    }
  };

  useEffect(() => {
    if (updateData && !updateLoading) {
      toast.success("Profile updated successfully!");
      router.push("/dashboard");
      router.refresh();
    }
  }, [updateData, updateLoading, router]);

  return (
    <div className="flex items-center justify-center bg-background min-h-screen py-10">
      <div className="w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-2xl border-2 border-primary/10 backdrop-blur-sm">
            <CardHeader className="space-y-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Complete Your Profile
                </CardTitle>
                <CardDescription className="text-lg mt-2 max-w-2xl mx-auto">
                  Let's personalize your experience to provide tailored career
                  insights and recommendations.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Industry Selection */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="industry"
                      className="flex items-center text-base font-medium"
                    >
                      <Briefcase className="w-4 h-4 mr-2 text-primary" />
                      Industry
                    </Label>
                    <Select
                      onValueChange={(value) => {
                        setValue("industry", value);
                        const selected = industries.find(
                          (ind) => ind.id === value
                        );
                        setSelectedIndustry(selected || null);
                        setValue("subIndustry", "");
                      }}
                    >
                      <SelectTrigger id="industry" className="h-12">
                        <SelectValue placeholder="Choose your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((ind) => (
                          <SelectItem value={ind.id} key={ind.id}>
                            {ind.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.industry && (
                      <p className="text-red-500 text-sm flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        {errors.industry.message}
                      </p>
                    )}
                  </div>

                  {/* Sub-industry Selection */}
                  {watchIndustry &&
                    selectedIndustry?.subIndustries?.length > 0 && (
                      <div className="space-y-2">
                        <Label
                          htmlFor="subIndustry"
                          className="flex items-center text-base font-medium"
                        >
                          <Briefcase className="w-4 h-4 mr-2 text-primary" />
                          Specialization
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            setValue("subIndustry", value)
                          }
                        >
                          <SelectTrigger id="subIndustry" className="h-12">
                            <SelectValue placeholder="Select your specialization" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedIndustry.subIndustries.map((subInd) => (
                              <SelectItem value={subInd} key={subInd}>
                                {subInd}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.subIndustry && (
                          <p className="text-red-500 text-sm flex items-center">
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            {errors.subIndustry.message}
                          </p>
                        )}
                      </div>
                    )}

                  {/* Experience Input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="experience"
                      className="flex items-center text-base font-medium"
                    >
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      Years of Experience
                    </Label>
                    <Input
                      id="experience"
                      type="number"
                      min="0"
                      max="50"
                      placeholder="Enter your experience"
                      className="h-12"
                      {...register("experience")}
                    />
                    {errors.experience && (
                      <p className="text-red-500 text-sm flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        {errors.experience.message}
                      </p>
                    )}
                  </div>

                  {/* Skills Input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="skills"
                      className="flex items-center text-base font-medium"
                    >
                      <Code className="w-4 h-4 mr-2 text-primary" />
                      Key Skills
                    </Label>
                    <Input
                      id="skills"
                      placeholder="e.g., Python, JavaScript, Project Management"
                      className="h-12"
                      {...register("skills")}
                    />
                    <p className="text-sm text-muted-foreground">
                      Separate multiple skills with commas
                    </p>
                    {errors.skills && (
                      <p className="text-red-500 text-sm flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        {errors.skills.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bio Textarea */}
                <div className="space-y-2">
                  <Label
                    htmlFor="bio"
                    className="flex items-center text-base font-medium"
                  >
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    Professional Summary
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Share your professional background, achievements, and career goals..."
                    className="h-32 resize-none"
                    {...register("bio")}
                  />
                  {errors.bio && (
                    <p className="text-red-500 text-sm flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      {errors.bio.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-medium transition-all duration-200 hover:scale-[1.02]"
                  disabled={updateLoading}
                >
                  {updateLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Updating Profile...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Complete Profile
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center border-t">
              <p className="text-sm text-muted-foreground mx-auto">
                By continuing, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingForm;
