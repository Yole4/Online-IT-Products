const express = require('express');
const {verifyToken} = require('../auth/Authentication');

const router = express.Router();

const {protected, loginUser, registerUser, changePassword, changeProfileInfo} = require('../controllers/UserController');

router.get('/protected', verifyToken, protected);
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/change-password', verifyToken, changePassword);
router.post('/change-profile-info', verifyToken, changeProfileInfo);

module.exports = router;

