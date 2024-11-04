const express = require("express");
const Cart = require("../Model/cart");

const router = express.Router();

// GET /cart/user/:userId - Fetch a specific cart by user ID
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ idAccount: userId })
      .populate("idAccount")
      .populate("products.productId");

    if (!cart) {
      res.json({
        userId: userId,
        products: [],
      });
    } else {
      res.json(cart);
    }
  } catch (error) {
    console.error(error);
  }
});

// PATCH /cart/user/:accountId - Update or create a cart for the account
router.patch("/user/:accountId", async (req, res) => {
  try {
    const { accountId } = req.params;
    const { products } = req.body;
    // Find the cart for the user
    let cart = await Cart.findOne({ idAccount: accountId });

    if (cart) {
      cart.products = products.map((productItem) => {
        return {
          productId: productItem.productId._id,
          quantity: productItem.quantity,
        };
      });
      await Cart.updateOne(
        { id: cart._id },
        {
          $set: {
            idAccount: cart.idAccount,
            products: cart.products,
          },
        }
      );
    } else {
      // Create a new cart if not present
      cart = new Cart({
        idAccount: accountId,
        products: products.map((productItem) => {
          return {
            productId: productItem.productId._id,
            quantity: productItem.quantity,
          };
        }),
      });
      // Save the updated or new cart
      await cart.save();
    }

    res.json({ message: "Cart updated successfully", result: cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update or create cart" });
  }
});

module.exports = router;
