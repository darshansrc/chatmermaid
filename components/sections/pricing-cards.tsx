"use client";

import { useState } from "react";
import Link from "next/link";
import { UserSubscriptionPlan } from "@/types";

import { cn } from "@/lib/utils";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button, buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BillingFormButton } from "./billing-form-button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";

const pricingData = [
  {
    title: "Basic",
    free: true,
    prices: {
      monthly: 0,
      yearly: 0,
    },
    benefits: ["Live Editor", "Upto 3 diagrams", "10 AI prompts"],
    limitations: [
      "Collab",
      "Timeline of Diagram",
      "Repair diagram with AI when goes into error",
    ],
  },
  {
    title: "Pro",
    free: false,
    prices: {
      monthly: 6.97,
      yearly: 47.97,
    },
    benefits: [
      "Collab",
      "Unlimited Diagrams",
      "Timeline of Diagram",
      "Unlimited AI Prompts ( Claude Haiku ) ",
      "Repair diagram with AI when goes into error",
      "14 day Refund policy",
    ],
    limitations: [],
  },
  {
    title: "Enterprise",
    free: false,
    prices: {
      monthly: 17.97,
      yearly: 107.97,
    },
    benefits: [
      "Everything included in Pro",
      "Collab more than 5 people",
      "Unlimited AI Prompts",
      "Access to GPT-4, Claude opus, Claude sonnet",
    ],
    limitations: [],
  },
];

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  const isYearlyDefault = true;
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault);
  const signInModal = useSigninModal();

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const PricingCard = ({ offer }) => {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.title.toLocaleLowerCase() === "pro"
            ? "-m-0.5 border-2 border-purple-400"
            : ""
        )}
        key={offer.title}
      >
        <div className="min-h-[150px] items-start space-y-4 bg-muted/50 p-6">
          <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {offer.title}
          </p>

          <div className="flex flex-row">
            <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6">
                {!offer.free ? (
                  isYearly && offer.prices.monthly > 0 ? (
                    <>
                      <span className="mr-2 text-muted-foreground/80 line-through">
                        ${offer.prices.monthly}
                      </span>
                      <span>${(offer.prices.yearly / 12).toFixed(2)}</span>
                    </>
                  ) : (
                    `$${offer.prices.monthly}`
                  )
                ) : (
                  <div>Free</div>
                )}
              </div>
              <div className="-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground">
                {!offer.free && <div>/month</div>}
              </div>
            </div>
          </div>
          {offer.prices.monthly > 0 ? (
            <div className="text-left text-sm text-muted-foreground">
              {isYearly
                ? `$${offer.prices.yearly} will be charged when annual`
                : "when charged monthly"}
            </div>
          ) : null}
        </div>

        <div className="flex h-full flex-col justify-between gap-16 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="size-5 shrink-0 text-purple-500" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          <Button
            className="rounded-full"
            variant={
              offer.title.toLocaleLowerCase() === "pro" ? "default" : "outline"
            }
            onClick={signInModal.onOpen}
          >
            {offer.free ? "Get Started" : "Coming Soon!"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="pricing" />
      <section className="container flex flex-col items-center lg:my-20 mb-6 text-center">
        <HeaderSection label="Pricing" title="Start at full speed !" />

        <div className="mb-4 mt-10 flex items-center gap-5">
          <ToggleGroup
            type="single"
            size="sm"
            defaultValue={isYearly ? "yearly" : "monthly"}
            onValueChange={toggleBilling}
            aria-label="toggle-year"
            className="h-9 overflow-hidden rounded-full border bg-background p-1 *:h-7 *:text-muted-foreground"
          >
            <ToggleGroupItem
              value="yearly"
              className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
              aria-label="Toggle yearly billing"
            >
              Yearly (-20%)
            </ToggleGroupItem>
            <ToggleGroupItem
              value="monthly"
              className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
              aria-label="Toggle monthly billing"
            >
              Monthly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
          {pricingData.map((offer) => (
            <PricingCard offer={offer} key={offer.title} />
          ))}
        </div>
      </section>
    </>
  );
}
