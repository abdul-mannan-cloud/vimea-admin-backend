const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
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
    approved:{
        type: Boolean,
        default: false,
    },
    notShow: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
