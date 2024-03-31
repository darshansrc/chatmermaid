import { ModeToggle } from "@/components/mode-toggle";
import { Features } from "@/components/sections/features";
import { HeroLanding } from "@/components/sections/hero-landing";
import { PreviewLanding } from "@/components/sections/preview-landing";
import { Testimonials } from "@/components/sections/testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroLanding />
      <PreviewLanding />
      <Features />
      <Testimonials />
    </div>
  );
};

export default page;
