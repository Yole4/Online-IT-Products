const express = require('express');
const {verifyToken} = require('../auth/Authentication');
const multer = require('multer');

const { addCategory, fetchCategory, deleteCategory, editCategory, fetchUsers, editUser, deleteUser, addProduct, fetchProduct, editProduct, deleteProduct } = require('../controllers/AdminController');

const router = express.Router();

// auto image upload
const productImageUpload = multer({
    dest: 'assets/product image/',
});

router.post('/add-category', verifyToken, addCategory);
router.get('/fetch-category', verifyToken, fetchCategory);
router.post('/delete-category', verifyToken, deleteCategory);
router.post('/edit-category', verifyToken, editCategory);
router.get('/fetch-users', verifyToken, fetchUsers);
router.post('/edit-user', verifyToken, editUser);
router.post('/delete-user', verifyToken, deleteUser);
router.get('/fetch-product', verifyToken, fetchProduct);
router.post('/delete-product', verifyToken, deleteProduct);
router.post('/add-product', productImageUpload.single('productImage'), verifyToken, addProduct);
router.post('/edit-product', productImageUpload.single('productImage'), verifyToken, editProduct);

module.exports = router;

