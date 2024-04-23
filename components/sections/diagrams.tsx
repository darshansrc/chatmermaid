"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeaderSection } from "../shared/header-section";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="flex flex-col gap-8 pt-8 lg:pt-0">
      <HeaderSection
        label="Features"
        title="Discover all Diagrams."
        subtitle=""
      />
      <div className="flex flex-col items-center justify-center w-full">
        <Carousel
          className="w-9/12  "
          // plugins={[
          //   Autoplay({
          //     delay: 4000,
          //   }),
          // ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {content.map((item, index) => (
              <CarouselItem key={index}>
                <div className="py-1">
                  <div>
                    <div className="flex flex-col gap-8 lg:flex-row   lg:items-center lg:justify-center py-6">
                      <div className="lg:my-20">
                        <h2 className="text-2xl font-bold  text-gradient_indigo-purple ">
                          {item.title}
                        </h2>
                        <p className="text-kg dark:text-slate-300 mt-2  lg:max-w-4xl  lg:mt-10">
                          {item.description}
                        </p>
                      </div>
                      <div
                        className={cn(
                          "  w-full flex items-center justify-center aspect-video   bg-transparent bg-neutral-50 rounded-xl overflow-hidden"
                        )}
                      >
                        {item.content ?? null}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* <motion.div
        className="h-[26rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold  text-gradient_indigo-purple "
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg dark:text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          className={cn(
            "hidden lg:block h-80 w-[600px] animate-in   bg-transparent bg-neutral-50 rounded-xl  sticky top-0 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </motion.div> */}
    </div>
  );
};
