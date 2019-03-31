const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: { type: String, required: "Product name cannot be left blank." },
  image: { type: String },
  description: {
    type: String,
    required: "Product description cannot be left blank."
  },
  category: {
    type: String,
    required: "Product category cannot be left blank."
  },
  price: { type: Number, required: true },
  units: { type: Number, required: true },
  manufacturer: { type: String }
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
