const adminValidation = require("./admin-validation-schema");
const vendoreValidation = require("./vendor-validation-schema");
const productValidation = require("./product-body-validation")

const validation = (validationType, data) => {
    switch(validationType) {
        case "adminLogin": return adminValidation.adminLoginValidationSchema.validateAsync(data);
        case "adminSignup": return adminValidation.adminSignupValidationSchema.validateAsync(data);
        case "vendorLogin": return vendoreValidation.vendoreLoginValidationSchema.validateAsync(data);
        case "vendorSignup": return vendoreValidation.vendoreSignupValidationSchema.validateAsync(data);
        case "createProduct": return productValidation.newProductValidationSchema.validateAsync(data)
        default: return "case not found!"
    }
};

module.exports = validation;