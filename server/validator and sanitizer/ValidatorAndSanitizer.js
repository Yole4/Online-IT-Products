const sanitizeHtml = require('sanitize-html');
const validator = require('validator');

// Helper function to sanitize and validate input
// this is the validator and sanitizer of the input of the user
const sanitizeAndValidate = (input, validationRules) => {

    // clean multiple spaces
    const cleanedInput = input.replace(/\s+/g, ' ');

    const sanitizedInput = sanitizeHtml(cleanedInput.trim());

    for (const rule of validationRules) {
        if (!rule.validator(sanitizedInput)) {
            return false;
        }
    }

    return sanitizedInput;
};

// in array
const sanitizeAndValidateArray = (inputArray, validationRules) => {
    // Create an empty object to store the sanitized and validated values
    const result = {};

    for (const key in inputArray) {
        if (inputArray.hasOwnProperty(key)) {
            const input = inputArray[key];

            // Clean multiple spaces
            const cleanedInput = input.replace(/\s+/g, ' ');

            const sanitizedInput = sanitizeHtml(cleanedInput.trim());

            for (const rule of validationRules) {
                if (!rule.validator(sanitizedInput)) {
                    return false;
                }
            }

            // If the input passes all validation rules, store it in the result object
            result[key] = sanitizedInput;
        }
    }

    return result;
};

const registerArray = {
    fullname: "jhon doe",
    username: "user123",
    // password: "password123",
    // confirmPassword: "password123"
};

const validationRules = [
    {
        field: "fullname",
        validator: (input) => /^[A-Za-z\s]+$/.test(input), // Full name should only contain letters and spaces.
    },
    {
        field: "username",
        validator: (input) => /^[a-zA-Z0-9_]{4,}$/.test(input), // Username should be at least 4 characters and only contain letters, numbers, and underscores.
    },
    // {
    //     field: "email",
    //     validator: (input) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input), // Basic email format validation.
    // },
    // {
    //     field: "password",
    //     validator: (input) => input.length >= 8, // Password should be at least 8 characters long.
    // },
    // {
    //     field: "confirmPassword",
    //     validator: (input, inputs) => input === inputs.password, // Confirm password should match the password field.
    // },
    // {
    //     field: "id",
    //     validator: (input) => /^\d+$/.test(input), // ID should consist of digits only.
    // },
    // {
    //     field: "age",
    //     validator: (input) => /^[1-9][0-9]{0,2}$/.test(input), // Age should be a positive integer between 1 and 999.
    // }
];

const sanitizedAndValidatedInputs = sanitizeAndValidateArray(registerArray, validationRules);

if (sanitizedAndValidatedInputs) {
    // Inputs are sanitized and validated, and the result object contains the values.
    console.log(sanitizedAndValidatedInputs);
} else {
    // Validation failed for one of the inputs.
    console.error("Input validation failed");
}


module.exports = { sanitizeAndValidate, sanitizeAndValidateArray };