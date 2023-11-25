const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  blogTitle: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  mainImage: {
    type: String,
    required: true
  },
  addonImages: [String],
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', BlogSchema);