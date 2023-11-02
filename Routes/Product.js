const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, editProduct, deleteProduct } = require('../Controllers/productController');

router.post('/addproduct', addProduct);
router.post('/editproduct', editProduct);
router.get('/getallproducts', getAllProducts);
router.delete('/deleteproduct/:productId', deleteProduct);

module.exports = router;
