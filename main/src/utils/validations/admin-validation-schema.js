const joi = require("joi");


class AdminValidation {
    constructor() {
        this.adminSignupValidationSchema = joi.object({
            userName: joi.string().required().min(5).max(100),
            email: joi.string().email().lowercase().required(),
            password: joi.string().required(),
            role: joi.string().max(13).required()
        });

        this.adminLoginValidationSchema = joi.object({
            email: joi.string().email().lowercase().required(),
            password: joi.string().min(8).required(),
            role: joi.string().max(13).required()
        });
    };
};

const adminValidationObject = new AdminValidation()


module.exports = adminValidationObject;