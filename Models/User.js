const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
    },
    birthPlace: {
        type: String,
    },
    healthInsurance: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    company: {
        type: String,
    },
    appointments: {
        type: Array,
        default: [],
    },
    orders: {
        type: Array,
        default: [],
    },
    cart: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    children: [],
});

const User = mongoose.model('Users', userSchema);
module.exports = User;
