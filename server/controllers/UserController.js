const db = require('../database/Connection');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validator = require('validator');
const fs = require('fs');
const mime = require('mime-types');
require('dotenv').config();
const { sanitizeAndValidate, sanitizeAndValidateArray } = require('../validator and sanitizer/ValidatorAndSanitizer');

const createToken = (id, username, userType) => {
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({ id, username, userType }, secretKey, { expiresIn: '1d' });
    return token;
};

// verify token
const protected = async (req, res) => {
    const { user } = req;

    res.status(200).json({ message: 'Success', user: user });
};

// register user
const registerUser = async (req, res) => {
    const { firstName, middleName, lastName, username, password, confirmPassword } = req.body;

    if (firstName, lastName, username, password, confirmPassword) {
        try {
            const findUsername = `SELECT * FROM users WHERE username = ?`;
            db.query(findUsername, [username], (error, results) => {
                if (error) {
                    res.status(401).json({ message: "Server side error!" });
                } else {
                    if (results.length > 0) {
                        res.status(401).json({ message: "Username already exist!" });
                    } else {
                        if (!firstName || !lastName || !password || !confirmPassword) {
                            res.status(401).json({ message: "All fields is required!" });
                        } else {
                            // if (!validator.isEmail(email)) {
                            //     res.status(401).json({message: "Invalid Email!"});
                            // }else{
                            // check pass and conpass
                            if (password === confirmPassword) {
                                if (password.length > 7) {
                                    // register user
                                    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
                                    const registerUser = `INSERT INTO users (first_name, middle_name, last_name, username, password, user_type) VALUES (?, ?, ?, ?, ?, ?)`;
                                    db.query(registerUser, [firstName, middleName, lastName, username, hashedPassword, "Customer"], (error, results) => {
                                        if (error) {
                                            res.status(401).json({ message: "Server side error!" });
                                        } else {
                                            // user register response
                                            // create token
                                            const userId = results.insertId;

                                            const token = createToken(userId, username, "Customer");
                                            res.status(200).json({ message: `${firstName} ${middleName} ${lastName} has been successfully registered!`, token: token, id: userId });
                                        }
                                    });
                                } else {
                                    res.status(401).json({ message: "Password must have at least 7 characters!" });
                                }
                            } else {
                                res.status(401).json({ message: "Password and Confirm password is not equal!" });
                            }
                            // }
                        }
                    }
                }
            });
        } catch (error) {
            console.log(error);
            res.status(401).json({ message: error });
        }
    } else {
        res.status(401).json({ message: "Invalid Input!" });
    }
};

// login users
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        if (!username || !password) {
            res.status(401).json({ message: "Invalid Input!" });
        } else {
            // select username
            const getUsername = `SELECT * FROM users WHERE username = ?`;
            db.query(getUsername, [username], (error, results) => {
                if (error) {
                    res.status(401).json({ message: "Server side error!" });
                } else {
                    if (results.length > 0) {
                        // get password
                        const dbPassword = results[0].password;
                        // hash user input password
                        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

                        // check if password is valid
                        if (dbPassword === hashedPassword) {
                            // success login
                            // create token
                            // get user id
                            const userId = results[0].id;
                            const userType = results[0].user_type;
                            const token = createToken(userId, username, userType);

                            // send to client
                            res.status(200).json({ message: "Login success!", token: token, id: userId });
                        } else {
                            res.status(401).json({ message: "Invalid Password!" });
                        }
                    } else {
                        res.status(401).json({ message: "Invalid Username!" });
                    }
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error });
    }
};

// fetch user credentials
const fetchUserCredentials = async (req, res) => {
    const { id } = req.body;

    if (id) {
        const selectData = `SELECT * FROM users WHERE id = ?`;
        db.query(selectData, [id], (error, results) => {
            if (error) {
                res.status(401).json({ message: "Server side error!" });
            } else {
                res.status(200).json({ message: results });
            }
        });
    } else {
        res.status(401).json({ message: "Something went wrong!" });
    }
}

const profileUpload = async (req, res) => {
    // const { userId } = req.body;
    // console.log(userId);
    console.log(req.body);

    // const validationRules = [
    //     { validator: validator.isLength, options: { min: 1, max: 50 } },
    // ];

    // const sanitizeUserId = sanitizeAndValidate(userId, validationRules);

    // if (!sanitizeUserId) {
    //     return res.status(401).json({ message: "Invalid Input!" });
    // }

    // Use imageUpload middleware to handle file upload
    // imageUpload.single('image')(req, res, (err) => {
    //     if (err) {
    //         return res.status(401).json({ message: "Error to upload file" });
    //     }

    //     const originalFileName = req.file.originalname;
    //     const uniqueFileName = `${Date.now()}_${originalFileName}`;
    //     const uniqueFilePath = `assets/image upload/${uniqueFileName}`;

    //     const typeMime = mime.lookup(originalFileName);

    //     if (typeMime === 'image/png' || typeMime === 'image/jpeg') {
    //         fs.rename(req.file.path, uniqueFilePath, (renameErr) => {
    //             if (renameErr) {
    //                 return res.status(401).json({ message: "Error to upload file" });
    //             } else {
    //                 const sanitizedFileName = sanitizeHtml(req.file.originalname); // Sanitize HTML content
    //                 if (!validator.isLength(sanitizedFileName, { min: 1, max: 255 })) {
    //                     return res.status(401).json({ message: "Invalid File Name!" });
    //                 } else {
    //                     const updateQuery = `UPDATE users SET image = ? WHERE id = ?`;
    //                     db.query(updateQuery, [uniqueFilePath, sanitizeUserId], (updateErr, results) => {
    //                         if (updateErr) {
    //                             return res.status(401).json({ message: "Server side error!" });
    //                         } else {
    //                             return res.status(200).json({ message: "Profile image changed!" });
    //                         }
    //                     });
    //                 }
    //             }
    //         });
    //     } else {
    //         return res.status(401).json({ message: "Invalid Image Type!" });
    //     }
    // });
}

// fetch all customerUsers
const fetchCustomerUsers = async (req, res) => {

};

// fetch all Sellers users
const fetchSellerUsers = async (req, res) => {

};

// change password
const changePassword = async (req, res) => {

};

// change profile info
const changeProfileInfo = async (req, res) => {
    // change profile info
};

// add to cart
const addCart = async (req, res) => {
    const {productId, quantity} = req.body;

    if (productId && quantity){
        // select if product is already on cart
        const selectCart = `SELECT * FROM my_cart WHERE product_id = ? AND isDelete = ?`;
        db.query(selectCart, [productId, "not"], (error, results) => {
            if (error) {
                res.status(401).json({message: "Server side error!"});
            }else{
                if (results.length > 0){
                    res.status(401).json({message: "Product already on cart!"});
                }else{
                    // insert to cart
                    const inserttocart = `INSERT INTO my_cart (product_id, quantity) VALUES (?, ?)`;
                    db.query(inserttocart, [productId, quantity], (error, results) => {
                        if (error) {
                            res.status(401).json({message: "Server side error!"});
                        }else{
                            res.status(200).json({message: `Product added to cart!`});
                        }
                    });
                }
            }
        });
    }else{
        res.status(401).json({message: "Something went wrong!"});
    }
}

// fetch cart
const fetchCart = async (req, res) => {
    //get the cart
    const getCart = `SELECT * FROM my_cart
    LEFT JOIN products ON my_cart.product_id = products.id
    WHERE my_cart.isDelete = ?`;
    db.query(getCart, ["not"], (error, results) => {
        if (error) {
            res.status(401).json({message: "Server side error!"});
        }else{
            if (results.length > 0){
                res.status(200).json({message: results});
            }else{
                res.status(401).json({message: "No cart found!"});
            }
        }
    })
}

module.exports = { registerUser, loginUser, fetchCustomerUsers, fetchSellerUsers, protected, changePassword, changeProfileInfo, fetchUserCredentials, profileUpload, addCart, fetchCart };