const express = require('express');
const {verifyToken} = require('../auth/Authentication');
const multer = require('multer');

const router = express.Router();

const {protected, loginUser, registerUser, changePassword, changeProfileInfo, fetchUserCredentials, profileUpload, addCart, fetchCart} = require('../controllers/UserController');

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
router.post('/profile-upload', verifyToken, profileUpload);
router.post('/add-cart', verifyToken, addCart);
router.get('/fetch-cart', verifyToken, fetchCart);

module.exports = router;

