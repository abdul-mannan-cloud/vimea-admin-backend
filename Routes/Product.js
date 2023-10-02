const express = require('express');
const router = express.Router();
const { addProduct } = require('../Controllers/productController');
const upload = require('../middleware/multerMiddleware'); 

router.post('/addproducts', upload.array('images', 3), addProduct);

module.exports = router;
