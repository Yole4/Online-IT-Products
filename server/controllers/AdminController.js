const db = require('../database/Connection');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validator = require('validator');
const fs = require('fs');
const multer = require('multer');
const mime = require('mime-types');
require('dotenv').config();
const { sanitizeAndValidate, sanitizeAndValidateArray } = require('../validator and sanitizer/ValidatorAndSanitizer');

// add category
const addCategory = async (req, res) => {
    const { categoryName, userId } = req.body;

    const validationRules = [
        { validator: validator.isLength, options: { min: 1, max: 255 } },
    ];

    const sanitizeUserId = sanitizeAndValidate(userId.toString(), validationRules);
    const sanitizeCategoryName = sanitizeAndValidate(categoryName.toString(), validationRules);

    if (!sanitizeUserId || !sanitizeCategoryName) {
        return res.status(401).json({ message: "Invalid Input!" });
    }
    else {
        const checkCategory = `SELECT * FROM categories WHERE category_name = ?`;
        db.query(checkCategory, [sanitizeCategoryName], (error, results) => {
            if (error) {
                res.status(401).json({ message: "Server side error!" });
            } else {
                if (results.length > 0) {
                    res.status(401).json({ message: `${sanitizeCategoryName} has already exist!` });
                } else {
                    const addCategory = `INSERT INTO categories (category_name) VALUES (?)`;
                    db.query(addCategory, [sanitizeCategoryName], (error, results) => {
                        if (error) {
                            res.status(401).json({ message: "Server side error!" });
                        } else {
                            res.status(200).json({ message: `${sanitizeCategoryName} has been successfully added!` });
                        }
                    });
                }
            }
        });
    }
};

// fetch categories
const fetchCategory = async (req, res) => {
    const getCategories = `SELECT * FROM categories WHERE isDelete = ?`;
    db.query(getCategories, ["not"], (error, results) => {
        if (error) {
            res.status(401).json({ message: "Server side error!" });
        } else {
            if (results.length > 0) {
                res.status(200).json({ message: results });
            } else {
                res.status(401).json({ message: "No Category Found!" });
            }
        }
    })
}

// delete category
const deleteCategory = async (req, res) => {
    const { categoryId, categoryName, userId } = req.body;

    if (categoryId && categoryName, userId) {
        // delete category
        const deleteCategory = `UPDATE categories SET isDelete = ? WHERE id = ?`;
        db.query(deleteCategory, ["Deleted", categoryId], (error, results) => {
            if (error) {
                res.status(401).json({ message: "Server side error!" });
            } else {
                // insert notification
                const insertNot = `INSERT INTO notifications (user_id, notification_type, content) VALUES (?, ?, ?)`;
                db.query(insertNot, [userId, "Category", `You've deleted the ${categoryName} on category list`], (error, results) => {
                    if (error) {
                        res.status(401).json({ message: "Server side error!" });
                    } else {
                        res.status(200).json({ message: `${categoryName} has been successfully deleted!` });
                    }
                });
            }
        });
    } else {
        res.status(401).json({ message: "Something went wrong!" });
    }
}

// edit category
const editCategory = async (req, res) => {
    const { categoryId, categoryName, userId } = req.body;

    if (categoryId && categoryName && userId) {
        const select = `SELECT * FROM categories WHERE category_name = ? AND id != ? AND isDelete = ?`;
        db.query(select, [categoryName, categoryId, "not"], (error, results) => {
            if (error) {
                res.status(401).json({ message: "Server side error!" });
            } else {
                if (results.length > 0) {
                    res.status(401).json({ message: `${categoryName} already exist!` });
                } else {
                    // edit
                    const editCategory = `UPDATE categories SET category_name = ? WHERE id = ?`;
                    db.query(editCategory, [categoryName, categoryId], (error, results) => {
                        if (error) {
                            res.status(401).json({ message: "Server side error!" });
                        } else {
                            // insert notification
                            const insertNot = `INSERT INTO notifications (user_id, notification_type, content) VALUES (?, ? ,?)`;
                            db.query(insertNot, [userId, "Category", `You've successfully updated ${categoryName}`], (error, results) => {
                                if (error) {
                                    res.status(401).json({ message: "Server side error!" });
                                } else {
                                    res.status(200).json({ message: `${categoryName} has been successfully updated!` });
                                }
                            });
                        }
                    });
                }
            }
        });
    } else {
        res.status(401).json({ message: "Something went wrong!" });
    }
}

// fetch all users
const fetchUsers = async (req, res) => {
    const fetchUser = `SELECT * FROM users WHERE isDelete = ? AND user_type = ?`;
    db.query(fetchUser, ["not", "Customer"], (error, results) => {
        if (error) {
            res.status(401).json({message: "Server side error!"});
        }else{
            res.status(200).json({message: results});
        }
    });
}

// edit user
const editUser = async (req, res) => {
    const {editUserData, userId} = req.body;
    
    const validationRules = [
        { validator: validator.isLength, options: { min: 1, max: 255 } },
    ];

    const sanitizeUserId = sanitizeAndValidate(userId.toString(), validationRules);
    const sanitizeFirstName = sanitizeAndValidate(editUserData.firstName.toString(), validationRules);
    const sanitizeLastName = sanitizeAndValidate(editUserData.lastName.toString(), validationRules);
    const sanitizeUsername = sanitizeAndValidate(editUserData.username.toString(), validationRules);
    const sanitizeEditId = sanitizeAndValidate(editUserData.editId.toString(), validationRules);

    if (!sanitizeUserId || !sanitizeFirstName || !sanitizeLastName || !sanitizeEditId || !sanitizeUsername){
        res.status(401).json({message: "Invalid Input!"});
    }else{
        // check username
        const checkUsername = `SELECT * FROM users WHERE username = ? AND id != ?`;
        db.query(checkUsername, [sanitizeUsername, sanitizeEditId], (error, results) => {
            if (error) {
                res.status(401).json({message: "Server side error!"});
            }else{
                if (results.length > 0){
                    res.status(401).json({message: "Username already exist!"});
                }else{
                    // update info
                    const updateUser = `UPDATE users SET first_name = ?, middle_name = ?, last_name = ?, username = ? WHERE id = ?`;
                    db.query(updateUser, [sanitizeFirstName, editUserData.middleName, sanitizeLastName, sanitizeUsername, sanitizeEditId], (error, results) => {
                        if (error) {
                            res.status(401).json({message: "Server side error!"});
                        }else{
                            // insert notification
                            const insertNot = `INSERT INTO notifications (user_id, notification_type, content) VALUES (?, ?, ?)`;
                            db.query(insertNot, [sanitizeUserId, "Users", `You've successfully updated ${sanitizeFirstName} ${editUserData.middleName} ${sanitizeLastName}`], (error, results) => {
                                if (error) {
                                    res.status(401).json({message: "Server side error!"});
                                }else{
                                    res.status(200).json({message: `${sanitizeFirstName} ${editUserData.middleName} ${sanitizeLastName} has been successfully updated!`});
                                }
                            })
                        }
                    });
                }
            }
        })
    }
}

// delete user
const deleteUser = async (req, res) => {
    const {deleteData, userId} = req.body;

    if (deleteData && userId) {
        // delete user
        const deleteUser = `UPDATE users SET isDelete = ? WHERE id = ?`;
        db.query(deleteUser, ["Deleted", deleteData.deleteId], (error, results) => {
            if (error) {
                res.status(401).json({message: "Server side error!"});
            }else{
                // insert notification
                const insertNot = `INSERT INTO notifications (user_id, notification_type, content) VALUES (?, ?, ?)`;
                db.query(insertNot, [userId, "Users", `You have been successfully deleted ${deleteData.firstName} ${deleteData.middleName} ${deleteData.lastName} as Customer account!`], (error, results) => {
                    if (error) {
                        res.status(401).json({message: "Server side error!"});
                    }else{
                        res.status(200).json({message: `${deleteData.firstName} ${deleteData.middleName} ${deleteData.lastName} has been successfully deleted!`});
                    }
                });
            }
        });
    }else{
        res.status(401).json({message: "Something went wrong!"});
    }
}

module.exports = { addCategory, fetchCategory, deleteCategory, editCategory, fetchUsers, editUser, deleteUser };