const express = require('express');
const {verifyToken} = require('../auth/Authentication');

const router = express.Router();

const {protected, loginUser, registerUser, changePassword, changeProfileInfo, fetchUserCredentials, profileUpload} = require('../controllers/UserController');

router.get('/protected', verifyToken, protected);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/change-password', verifyToken, changePassword);
router.post('/change-profile-info', verifyToken, changeProfileInfo);
router.post('/fetch-user-credentials', verifyToken, fetchUserCredentials);
router.post('/profile-upload', verifyToken, profileUpload);

module.exports = router;

