const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "user" }],
  product: [{ type: Schema.Types.ObjectId, ref: "products" }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
