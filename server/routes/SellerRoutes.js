const express = require('express');
const { verifyToken } = require('../auth/Authentication');
const { uploadProduct, editProduct, deleteProduct, fetchOrderedUsers, productStatus } = require('../controllers/SellerController');

const router = express.Router();

router.post('/upload-product', verifyToken, uploadProduct);
router.post('/edit-product', verifyToken, editProduct);
router.post('/delete-product', verifyToken, deleteProduct);
router.get('/fetch-ordered-users', verifyToken, fetchOrderedUsers);
router.post('/product-status', verifyToken, productStatus);

module.exports = router;