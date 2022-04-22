const joi = require("joi");


class VendorValidation {
    constructor() {
        this.vendoreSignupValidationSchema = joi.object({
            vendorName: joi.string().required().min(5).max(100),
            email: joi.string().email().lowercase().required(),
            password: joi.string().required(),
            role: joi.string().max(13).required()
        });

        this.vendoreLoginValidationSchema = joi.object({
            email: joi.string().email().lowercase().required(),
            password: joi.string().min(8).required(),
            role: joi.string().max(13).required()
        });
    };
};

const adminValidationObject = new VendorValidation()


module.exports = adminValidationObject;