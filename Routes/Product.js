const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, editProduct, deleteProduct } = require('../Controllers/productController');
const upload = require('../middleware/multerMiddleware');


router.post('/addproduct', upload.array('images'), addProduct);
router.post('/editproduct', upload.array('images'), editProduct);
router.get('/getallproducts', getAllProducts);
router.delete('/deleteproduct/:productId', deleteProduct);

module.exports = router;
