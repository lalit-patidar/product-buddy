const joi = require("joi");


class AdminValidation {
    constructor() {
        this.adminSignupValidationSchema = joi.object({
            userName: joi.string().required().min(5).max(20),
            email: joi.string().email().lowercase().required(),
            password: joi.string().min(8).max(16).required(),
            role: joi.string().max(13).required()
       });

        this.adminLoginValidationSchema = joi.object({
            email: joi.string().email().lowercase().required(),
            password: joi.string().min(8).max(16).required(),
        });

        this.adminUpdateValidationSchema = joi.object({
            userName: joi.string().optional().min(5).max(16),
            email: joi.string().email().lowercase().optional(),
            password: joi.string().min(8).optional(),
            role: joi.string().max(13).optional().valid("admin")
        });

        this.adminDeleteProfileValidationSchema = joi.object({
            agree: joi.boolean().required().valid(true)
        })
    };
};

const adminValidationObject = new AdminValidation();


module.exports = adminValidationObject;