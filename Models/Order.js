const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required:true
    },
    billingAddress: {
        type: String,
    },
    shippingAddress: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Order', orderSchema);