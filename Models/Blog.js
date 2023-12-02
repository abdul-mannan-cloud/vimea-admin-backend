const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true
  },
  images: [String],
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