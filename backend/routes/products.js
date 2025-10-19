import { Router } from "express";
import Product from "../models/Product.js";
const router = Router();

router.get("/", async (req,res)=>{
  const { q, cat, min, max } = req.query;
  const filter = {};
  if (q) filter.name = {$regex:q, $options:"i"};
  if (cat) filter.category = cat;
  if (min || max) filter.price = {...(min?{$gte:+min}:{}) , ...(max?{$lte:+max}:{})};
  const items = await Product.find(filter).limit(100);
  res.json(items);
});

router.get("/:id", async (req,res)=>{
  const p = await Product.findById(req.params.id);
  if(!p) return res.status(404).json({error:"Not found"});
  res.json(p);
});

export default router;
