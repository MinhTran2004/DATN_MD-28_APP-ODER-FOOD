const express = require("express");
const Wishlist = require("../Model/wishlist"); // Replace with actual path to your Wishlist model

const router = express.Router();

// GET /user/:userId - Fetch all products for a specific user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // Find all wishlist entries for the given user ID
    const result = await Wishlist.find({ userId }).populate("productId");

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch wishlist items" });
  }
});

// PATCH /user/:userId/product/:productId - Update or create product in user's wishlist
router.patch("/user/:userId/product/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    // If quantity is zero, remove the item
    if (quantity === 0) {
      await Wishlist.findOneAndDelete({ userId, productId });
      return res.json({ message: "Product removed from wishlist" });
    }

    await Wishlist.findOneAndUpdate(
      { userId, productId },
      { quantity },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json({
      message: "Wishlist item updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update wishlist item" });
  }
});

module.exports = router;
