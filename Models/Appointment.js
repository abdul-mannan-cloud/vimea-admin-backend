const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
    },
    category: {
        type: String,
    },
    serviceType: {
        type: String,
    },
    approved: {
        type: Boolean,
        default: false,
    },
    employee: {
        type: String,
    },
    parent: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
    },
    child: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        dateOfBirth: {
            type: String,
        },
    },
    notShow: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
