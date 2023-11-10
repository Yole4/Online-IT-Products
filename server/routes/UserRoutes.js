const express = require('express');
const {verifyToken} = require('../auth/Authentication');
const multer = require('multer');

const router = express.Router();

const {protected, loginUser, registerUser, changePassword, changeProfileInfo, fetchUserCredentials, profileUpload, addCart, fetchCart, addAddress, fetchAddress, placeOrder} = require('../controllers/UserController');

// auto image upload
const imageUpload = multer({
    dest: 'assets/image upload/',
});

router.get('/protected', verifyToken, protected);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/change-password', verifyToken, changePassword);
router.post('/change-profile-info', verifyToken, changeProfileInfo);
router.post('/fetch-user-credentials', verifyToken, fetchUserCredentials);
router.post('/profile-upload', imageUpload.single('image'), verifyToken, profileUpload);
router.post('/add-cart', verifyToken, addCart);
router.get('/fetch-cart', verifyToken, fetchCart);
router.post('/add-address', verifyToken, addAddress);
router.post('/fetch-address', verifyToken, fetchAddress);
router.post('/place-order', verifyToken, placeOrder);

module.exports = router;

