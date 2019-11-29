const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  order: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  name: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    postalCode: Number
  },
  hobbies: [String]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
