const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true
  },
  blogTitleENG: {
    type: String,
    required: true
  },
  images: [String],
  description: {
    type: String,
    required: true
  },
  descriptionENG: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  mobileImages:[String],
});

module.exports = mongoose.model('Blog', BlogSchema);