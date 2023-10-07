const mongoose = require('mongoose');
const Blog = require('../models/Blog');

const addBlog = async (req, res) => {
  try {
    const { blogTitle, phoneNumber, toSatisfy } = req.body;
    const mainImage = req.files[0].filename;
    const addonImages = req.files.slice(1).map(file => file.filename);

    const blog = new Blog({
      _id: new mongoose.Types.ObjectId(),
      blogTitle,
      phoneNumber,
      mainImage,
      addonImages,
      toSatisfy,
    });

    const savedBlog = await blog.save();

    res.status(201).json({
      message: 'Blog post created successfully',
      blog: savedBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addBlog,
};
