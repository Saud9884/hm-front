import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIP_SK);
import {buffer} from 'micro';

const endpointSecret = "whsec_ea3eccd71ffae575dbe3baefbcb19993068fbee23fcbc4f632352136cb5b7e3b";

export default async function handler(req, res) {
    await mongooseConnect();

    const sig = req.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log(paymentIntentSucceeded);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
}

export const config = {
    api: {bodyparser:false,}
};

//revere-uplift-yay-blithe
//acct_1OM5gKSAHn6S95rE