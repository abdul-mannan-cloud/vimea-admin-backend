
const mongoose = require('mongoose');
const Product = require('../Models/Product');

const addProduct = async (req, res) => {
  try {
    const { productName, price, quantity, type, size1, size2, size3, description, imagenames } = req.body;

    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: productName,
      description: description,
      price: price,
      mainImage: imagenames[0],
      addonImages: imagenames.slice(1),
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


  const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find(); 
  
      res.status(200).json({
        message: "Products retrieved successfully",
        products: products,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const editProduct = async (req, res) => {
    try {
      const { id, productName, price, quantity, type, size1, size2, size3, description, imagenames } = req.body;
      const product = await Product.findById(id);  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      product.name = productName || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.mainImage = imagenames ? imagenames[0] : product.mainImage;
      product.addonImages = imagenames ? imagenames.slice(1) : product.addonImages;
      product.quantity = quantity || product.quantity;
      product.size = [size1, size2, size3] || product.size;
      product.type = type || product.type;
  
      const updatedProduct = await product.save();
  
      res.status(200).json({
        message: 'Product updated successfully',
        updatedProduct: updatedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  


  
const deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product deleted successfully',
      deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


  module.exports = { addProduct, getAllProducts, editProduct, deleteProduct };
  