const db = require('../database/Connection');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const validator = require('validator');
require('dotenv').config();
const { sanitizeAndValidate, sanitizeAndValidateArray } = require('../validator and sanitizer/ValidatorAndSanitizer');

const createToken = (id, fullname, username) => {
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({id, fullname, username}, secretKey, {expiresIn: '1d'});
    return token;
};

// verify token
const protected = async (req, res) => {

};

// register user
const registerUser = async (req, res) => {
    const {registerUser} = req.body;

    
};

// login users
const loginUser = async (req, res) => {

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

};

module.exports = {registerUser, loginUser, fetchCustomerUsers, fetchSellerUsers, protected, changePassword, changeProfileInfo};