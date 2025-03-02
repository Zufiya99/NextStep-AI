"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement?.classList.add("scrolled");
      } else {
        imageElement?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-36 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background"></div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="space-y-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 hover:bg-primary/20 transition-colors duration-300 mx-auto">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>AI-Powered Career Advancement</span>
          </div>

          {/* Main Title */}
          <div className="space-y-6 mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight gradient-title leading-tight">
              Elevate Your Career with
              <span className="block mt-2">AI-Driven Excellence</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Transform your professional journey with personalized AI guidance,
              expert interview preparation, and data-driven insights for
              unparalleled career success.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="h-12 px-8 text-lg font-medium group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/zufiyaidrisi9797/">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-lg font-medium hover:bg-primary/5 group"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>50+ Industries Covered</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>24/7 AI Support</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image-wrapper mt-12 md:mt-16 relative">
            <div className="absolute inset-0  z-10 pointer-events-none h-[20%] bottom-0"></div>
            <div className="hero-image" ref={imageRef}>
              <Image
                src="https://media.licdn.com/dms/image/v2/D4E12AQGebOI-W18PTw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1715359539691?e=2147483647&v=beta&t=J68u152eJd-7kgp02Msx_Q-wcWzzXJzq5ESddoYqmVo"
                width={1280}
                height={720}
                alt="NextStep AI Platform Interface"
                className="rounded-xl shadow-2xl border-2 border-primary/10 mx-auto hover:border-primary/20 transition-colors duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
