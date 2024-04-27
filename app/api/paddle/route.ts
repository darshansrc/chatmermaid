import { NextRequest, NextResponse } from "next/server";
import { validateSignature } from "@/utils/paddle";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  console.log("req:", req);
  const body = await req.text();
  console.log("body", body);
  console.log("bodyParsed", JSON.parse(body));
  const signature = req.headers.get("Paddle-Signature")!;
  // mentioned later in the blog
  const supabase = createClient();
  const isValid = await validateSignature(
    signature,
    body,
    process.env.PADDLE_WEBHOOK_SECRET!
  );

  if (!isValid)
    return NextResponse.json(
      {
        message: "Invalid webhook signature!",
      },
      {
        status: 401,
      }
    );
  const parsedBody = JSON.parse(body);
  console.log("webhook", parsedBody);

  switch (parsedBody.event_type) {
    case "subscription.created":
      await supabase.from("user_payment_data").upsert({
        user_id: parsedBody.custom_data.user_id,
        user_email: parsedBody.custom_data.user_email,
        subscription_id: parsedBody.data.id,
        subscription_status: parsedBody.data.status,
        subscription_plan_id: parsedBody.data.billing_cycle.interval,
        subscription_end_date: parsedBody.data.next_billed_at,
      });
      break;
    case "subscription.updated":
      await supabase.from("user_payment_data").update({
        subscriptionStatus: parsedBody.status,
        subscriptionPlanId: parsedBody.subscription_plan_id,
        subscriptionEndDate: parsedBody.next_bill_date,
        subscriptionUpdateUrl: parsedBody.update_url,
        subscriptionCancelUrl: parsedBody.cancel_url,
      });
      break;
    case "subscription.cancelled":
      await supabase.from("user_payment_data").update({
        subscriptionStatus: parsedBody.status,
        subscriptionEndDate: parsedBody.cancellation_effective_date,
      });
      //   .match({ userId: passthrough.userId });
      break;
    case "transaction.completed":
      // handle transaction succeeded event
      break;
    default:
      break;
  }

  return NextResponse.json(
    {
      message: "done",
    },
    {
      status: 200,
    }
  );
}
