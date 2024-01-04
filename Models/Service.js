const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: false
    },
    onlyParent: {
        type: Boolean,
        required: false
    },
    displayGroup: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Service', serviceSchema);
