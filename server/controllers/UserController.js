const db = require('../database/Connection');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validator = require('validator');
require('dotenv').config();
const { sanitizeAndValidate, sanitizeAndValidateArray } = require('../validator and sanitizer/ValidatorAndSanitizer');

const createToken = (id, username) => {
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({ id, username }, secretKey, { expiresIn: '1d' });
    return token;
};

// verify token
const protected = async (req, res) => {
    // protected code
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
                        if (!fullname || !password || !confirmPassword) {
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
                                    const registerUser = `INSERT INTO users (first_name, middle_name, last_name, username, password) VALUES (?, ?, ?, ?, ?)`;
                                    db.query(registerUser, [firstName, middleName, lastName, username, hashedPassword], (error, results) => {
                                        if (error) {
                                            res.status(401).json({ message: "Server side error!" });
                                        } else {
                                            // user register response
                                            // create token
                                            const userId = results.insertId;

                                            const token = createToken(userId, username);
                                            res.status(200).json({ message: "New user has been successfully registered!", token: token, id: userId });
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
    }else{
        res.status(401).json({message: "Invalid Input!"});
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
                            const token = createToken(userId, username);

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

module.exports = { registerUser, loginUser, fetchCustomerUsers, fetchSellerUsers, protected, changePassword, changeProfileInfo };