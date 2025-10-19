import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../models/Product.js";
dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
await Product.deleteMany({});
await Product.insertMany([
  {name:"Classic Tee", description:"Soft cotton tee", price:19.99, image_url:"https://picsum.photos/seed/tee/600", category:"Apparel", stock:50},
  {name:"Running Shoes", description:"Lightweight runners", price:79.99, image_url:"https://picsum.photos/seed/shoes/600", category:"Shoes", stock:20},
  {name:"Wireless Headphones", description:"Noise cancelling", price:129.99, image_url:"https://picsum.photos/seed/headphones/600", category:"Electronics", stock:15}
]);
console.log("Seeded products.");
process.exit(0);
