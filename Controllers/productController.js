
const mongoose = require('mongoose');
const Product = require('../models/Product');

const addProduct = async (req, res) => {
    try {
      // Extract product data from req.body
      const {
        productName,
        price,
        quantity,
        type,
        size1,
        size2,
        size3,
        description,
      } = req.body;
  
      // Extract uploaded image files from req.files
      const images = [];
      for (let i = 0; i < 4; i++) {
        if (req.files[`image${i + 1}`]) {
          images.push(req.files[`image${i + 1}`].path);
        }
      }
  
      // Handle saving product data and image file paths to your database
      // Perform any necessary validation and database operations here
  
      // Respond with a success message or product details
      res.status(201).json({
        message: 'Product added successfully',
        product: {
          productName,
          price,
          quantity,
          type,
          size1,
          size2,
          size3,
          description,
          mainimage: images[0],
          image1: images[1] || null,
          image2: images[2] || null,
          image3: images[3] || null,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  module.exports = { addProduct };
  