const express = require('express');
const {verifyToken} = require('../auth/Authentication');

const { addCategory, fetchCategory, deleteCategory, editCategory, fetchUsers, editUser, deleteUser } = require('../controllers/AdminController');

const router = express.Router();

router.post('/add-category', verifyToken, addCategory);
router.get('/fetch-category', verifyToken, fetchCategory);
router.post('/delete-category', verifyToken, deleteCategory);
router.post('/edit-category', verifyToken, editCategory);
router.get('/fetch-users', verifyToken, fetchUsers);
router.post('/edit-user', verifyToken, editUser);
router.post('/delete-user', verifyToken, deleteUser);

module.exports = router;

