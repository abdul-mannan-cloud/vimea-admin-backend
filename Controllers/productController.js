
const mongoose = require('mongoose');
const Product = require('../models/Product');

const addProduct = async (req, res) => {
  try {
    const filenames = req.files.map(file => file.filename);
    const { productName, price, quantity, type, size1, size2, size3, description } = req.body;

    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: productName,
      description: description,
      price: price,
      mainImage: filenames[0],
      addonImages: filenames.slice(1),
      quantity: quantity,
      size: [size1, size2, size3],
      type: type,
    });

    product.save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Product Created Successfully",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
  };
  module.exports = { addProduct };
  