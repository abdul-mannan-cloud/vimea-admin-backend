const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts } = require('../Controllers/productController');
const upload = require('../middleware/multerMiddleware');


router.post('/addproduct', upload.array('images'), addProduct);
router.get('/getallproducts', getAllProducts);

module.exports = router;
