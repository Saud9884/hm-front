import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require('stripe')(process.env.STRIP_SK);

export default async function handler(req, res) {
if (req.method !== 'POST') {
    res.json("Shoudl be a Post request");
    return;
}

const {name,email,city,postalCode,streetAddress,country,phoneNumber,products} = req.body;

await mongooseConnect();
const productIds = products;
const uniqueIds = [...new Set(productIds)];
const productsInfos = await Product.find({_id:uniqueIds});

console.log('uniqueIds:', uniqueIds);
console.log('productsInfos:', productsInfos);


let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(p => p._id.toString() === productId);
    const quantity = productIds.filter(id => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: {name:productInfo.title},
          unit_amount: quantity * productInfo.price,
        },
      });
    }
  }

  res.json({line_items});
  if (line_items.length === 0) {
    res.json({ error: "No line items found." });
    return;
  }

// const orderDoc =  await Order.create({
//   line_items,name,email,city,postalCode,
//     streetAddress,country,phoneNumber,paid:false,
// });

// const session = await stripe.checkout.sessions.create({
//   line_items,
//   mode: 'payment',
//   customer_email: email,
//   success_url: process.env.PUBLIC_URL + '/cart?success=1',
//   cancel_url : process.env.PUBLIC_URL + '/cart?canceled=1',
//   metadata: {orderId: orderDoc._id.toString()},

// });

// res.json({
//   url:session.url,
// })

}

