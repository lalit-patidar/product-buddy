const adminValidation = require("./admin-validation-schema");
const vendoreValidation = require("./vendor-validation-schema");
const productValidation = require("./product-body-validation")

const validation = (validationType, data) => {
    switch(validationType) {
        case "adminLogin": return adminValidation.adminLoginValidationSchema.validateAsync(data, {abortEarly: false});
        case "adminSignup": return adminValidation.adminSignupValidationSchema.validateAsync(data, {abortEarly: false});
        case "adminUpdate": return adminValidation.adminUpdateValidationSchema.validateAsync(data, {abortEarly: false});
        case "adminRemove": return adminValidation.adminDeleteProfileValidationSchema.validateAsync(data);
        case "vendorLogin": return vendoreValidation.vendoreLoginValidationSchema.validateAsync(data, {abortEarly: false});
        case "vendorSignup": return vendoreValidation.vendoreSignupValidationSchema.validateAsync(data, {abortEarly: false});
        case "createProduct": return productValidation.newProductValidationSchema.validateAsync(data, {abortEarly: false})
        default: return "case not found!"
    }
};

module.exports = validation;