const mongoose = require('mongoose');
const Blog = require('../Models/Blog');

const addBlog = async (req, res) => {
  try {
    const { blogTitle,imagenames,description } = req.body;
    console.log(req.body);

    const blog = new Blog({
      blogTitle,
      images: imagenames,
      description,
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


const editBlog = async (req, res) => {
    try {
      const { blogTitle, phoneNumber, imagenames, description ,blogId } = req.body;
      // const mainImage = req.files[0].filename;
      // const addonImages = req.files.slice(1).map(file => file.filename);
      console.log(req.body)

      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,{
            blogTitle,
            images: imagenames,
            description,
        },
        { new: true } 
      );

      res.status(200).json({
        message: 'Blog post updated successfully',
        blog: updatedBlog,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
  
      res.status(200).json({
        message: 'All blog posts retrieved successfully',
        blogs,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  const deleteBlog = async (req, res) => {
    try {
      const { blogId } = req.params;
      await Blog.findByIdAndRemove(blogId);
  
      res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = {
    addBlog,
    editBlog,
    getAllBlogs,
    deleteBlog,
  };