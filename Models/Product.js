const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  nameENG: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  descriptionENG: {
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
    type: Number,
  },
  type: {
    type: String,
    required: false
  },
  typeENG: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('Product', ProductSchema);