const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    experience: {
        type: Number,
    },
    suggestion: {
        type: String,
    },
    benefits: {
        type: Number,
    },
    date: {
        type: Date,
    },
    improvement: {
        type: String,
    },
    prices: {
        type: Number,
    },
    appointments: {
        type: Number,
    },
    recommendation: {
        type: Number,
    },
    approved: {
        type: Boolean,
        default: false,
    },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
