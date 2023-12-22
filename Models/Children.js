const mongoose = require('mongoose');

const childrenSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    birthPlace: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    allergies: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
    birthTime: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    height: {
        type: String,
    },
    healthProblems: {
        type: String,
    },
    length: {
        type: Number,
    },
    companyAge: {
        type: Number,
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    image: {
        type: String,
    },
    appointmentsLength: {
        type: Number,
    },
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const Child = mongoose.model('Children', childrenSchema);
module.exports = Child;