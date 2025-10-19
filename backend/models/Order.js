import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [{
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    price: Number
  }],
  total_amount: Number,
  status: { type: String, default: "PLACED" },
  order_date: { type: Date, default: Date.now }
}, {timestamps:true});
export default mongoose.model("Order", OrderSchema);
