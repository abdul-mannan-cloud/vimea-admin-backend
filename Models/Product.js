const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true
  },
  mainImage: {
    type: String,
    required: true
  },
  addonImages: [String],
  quantity: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Product', ProductSchema);