const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: {
        type: Array,
        default: []
    }
})

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

module.exports = Cart;

