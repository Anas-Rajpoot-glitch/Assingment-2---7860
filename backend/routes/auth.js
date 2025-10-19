import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const router = Router();

router.post("/signup", async (req,res)=>{
  const {name,email,password} = req.body;
  const hash = await bcrypt.hash(password, 10);
  const u = await User.create({name,email,password:hash});
  res.json({id:u._id});
});

router.post("/login", async (req,res)=>{
  const {email,password} = req.body;
  const u = await User.findOne({email});
  if(!u) return res.status(401).json({error:"Bad creds"});
  const ok = await bcrypt.compare(password, u.password);
  if(!ok) return res.status(401).json({error:"Bad creds"});
  const token = jwt.sign({id:u._id, email:u.email}, process.env.JWT_SECRET, {expiresIn:"7d"});
  res.json({token, user:{id:u._id, name:u.name, email:u.email}});
});

export default router;
