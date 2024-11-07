const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Account", required: true }, // Reference to User model
  productId: { type: Schema.Types.ObjectId, ref: "Products", required: true }, // Reference to Product model
  quantity: { type: Number, required: true },
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;
