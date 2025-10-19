import { Router } from "express";
import CartItem from "../models/CartItem.js";
import Product from "../models/Product.js";
import auth from "./_authMiddleware.js";
const router = Router();

// list
router.get("/", auth, async (req,res)=>{
  const items = await CartItem.find({user_id:req.user.id}).populate("product_id");
  res.json(items);
});

// add/update (idempotent)
router.post("/", auth, async (req,res)=>{
  const {product_id, quantity} = req.body;
  const p = await Product.findById(product_id);
  if(!p) return res.status(404).json({error:"Product not found"});
  const item = await CartItem.findOneAndUpdate(
    {user_id:req.user.id, product_id},
    { $set:{quantity} },
    { new:true, upsert:true }
  );
  res.json(item);
});

// delete
router.delete("/:id", auth, async (req,res)=>{
  await CartItem.deleteOne({_id:req.params.id, user_id:req.user.id});
  res.json({ok:true});
});

export default router;
