import mongoose from "mongoose";
const CartItemSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number
}, {timestamps:true});
export default mongoose.model("CartItem", CartItemSchema);
