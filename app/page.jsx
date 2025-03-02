import HeroSection from "@/components/HeroSection";
import { features } from "@/data/features";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import Image from "next/image";
import { faqs } from "@/data/faqs";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="grid-background"></div>
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Transform Your Career Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge tools and insights designed for modern professionals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardContent className="pt-6 text-center flex flex-col items-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "50+",
                label: "Industries Analyzed",
                sublabel: "Deep market insights",
              },
              {
                number: "1000+",
                label: "Curated Questions",
                sublabel: "Interview preparation",
              },
              {
                number: "95%",
                label: "Success Rate",
                sublabel: "Career advancement",
              },
              {
                number: "24/7",
                label: "AI Support",
                sublabel: "Always available",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Your Path to Success
            </h2>
            <p className="text-xl text-muted-foreground">
              A streamlined process backed by cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[100%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from professionals who transformed their careers with
              NextStep AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => {
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
                >
                  <CardContent className="pt-8">
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-14 w-14 flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={56}
                            height={56}
                            className="rounded-full object-cover border-4 border-primary/20"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-primary font-medium">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote className="relative">
                        <span className="absolute -top-2 -left-2 text-4xl text-primary opacity-50">
                          "
                        </span>
                        <p className="text-muted-foreground italic pl-6 leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <span className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-50">
                          "
                        </span>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about accelerating your career growth
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
