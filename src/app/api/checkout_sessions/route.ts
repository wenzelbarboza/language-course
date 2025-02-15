import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export const runtime = "edge";

export async function POST() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.redirect(session.url as string, 303);
  } catch (err: unknown) {
    return NextResponse.json(
      // @ts-expect-error: error has message
      { error: err.message },
      // @ts-expect-error: error has status
      { status: err.statusCode || 500 }
    );
  }
}
