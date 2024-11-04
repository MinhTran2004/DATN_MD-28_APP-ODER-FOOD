const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    idAccount: { type: Schema.Types.ObjectId, ref: 'Account', required: true }, // Reference to User model
    products: [
        {
            productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true }, // Reference to Product model
            quantity: { type: Number, required: true }, // Quantity of the product
        }
    ]
});

const Cart = mongoose.model('Carts', CartSchema);

module.exports = Cart;