import "server-only";

import Stripe from "stripe";

// console.log("this is the api key: ", process.env.STRIPE_SECRET_KEY);

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
