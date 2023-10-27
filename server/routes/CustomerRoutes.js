const express = require('express');
const { verifyToken } = require('../auth/Authentication');
const { addToCart, placeOrder, createNewLocation } = require('../controllers/CustomerController');

const router = express.Router();

router.post('/add-to-cart', verifyToken, addToCart);
router.post('/place-order', verifyToken, placeOrder);
router.post('/create-new-location', verifyToken, createNewLocation);

module.exports = router;