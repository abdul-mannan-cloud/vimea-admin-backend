const express = require('express');
const router = express.Router();
const { addProduct } = require('../Controllers/productController');
const upload = require('../middleware/multerMiddleware');


router.post('/addproduct', upload.array('images'), addProduct);

module.exports = router;
