const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  sales: {
    type: Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
