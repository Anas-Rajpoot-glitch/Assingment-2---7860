import jwt from "jsonwebtoken";
export default function auth(req,res,next){
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({error:"No token"});
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data; // {id, email}
    next();
  }catch(e){ res.status(401).json({error:"Invalid token"}); }
}
