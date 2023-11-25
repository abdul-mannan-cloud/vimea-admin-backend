const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    service: {
        type: String,
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
    },
    time: {
        type: String,
    },
    duration: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
    },
    parent:{
        type: Object,
    },
    child:{
        type: Object,
    },
    employee:{
        type: String,
    },
})

module.exports = mongoose.model('Appointment', AppointmentSchema)