import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  slug: String,
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
