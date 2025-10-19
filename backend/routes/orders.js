import { Router } from "express";
import CartItem from "../models/CartItem.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import auth from "./_authMiddleware.js";
const router = Router();

router.post("/checkout", auth, async (req,res)=>{
  const cart = await CartItem.find({user_id:req.user.id}).populate("product_id");
  if(cart.length === 0) return res.status(400).json({error:"Cart empty"});
  const items = cart.map(c=>({
    product_id: c.product_id._id,
    quantity: c.quantity,
    price: c.product_id.price
  }));
  const total = items.reduce((s,i)=>s + i.price*i.quantity, 0);
  const order = await Order.create({user_id:req.user.id, items, total_amount: total});
  await CartItem.deleteMany({user_id:req.user.id});
  res.json({orderId:order._id, total});
});

router.get("/", auth, async (req,res)=>{
  const orders = await Order.find({user_id:req.user.id}).sort({createdAt:-1});
  res.json(orders);
});

export default router;
