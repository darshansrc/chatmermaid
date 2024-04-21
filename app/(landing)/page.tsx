import { NavBar } from "@/components/layout/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Features } from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import { PreviewLanding } from "@/components/sections/preview-landing";
import { Testimonials } from "@/components/sections/testimonials";
import { marketingConfig } from "@/config/marketing";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar items={marketingConfig.mainNav} scroll={true} />
      <HeroLanding />
      <PreviewLanding />
      <Features />
      <Testimonials />
    </div>
  );
};

export default page;
