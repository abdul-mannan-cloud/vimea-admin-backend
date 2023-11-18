const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);

module.exports = router;
