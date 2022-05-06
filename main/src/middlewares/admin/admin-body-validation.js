const {ADMIN_ACCESS_KEY} = require("../../../config/app-config");
const bodyValidation = require("../../utils/validations/index");
const traceAndThrowError = require("../../utils/errorHandling/custom-error");
const {appConstants} = require("../../../config/app-constants/constants");

const {errors: {errorMessage}} = appConstants;

const adminReqBodyValidation = async (req, res, next) => {
    try {
        if (req.params.id !==  ADMIN_ACCESS_KEY) throw new Error(errorMessage.ApiAccessDenied);
        if (!req.body.adminSignup && !req.body.adminLogin && !req.body.adminUpdate  && !req.body.adminRemove) throw new Error(errorMessage.UnproccessedBody)
        const bodyName = Object.keys(req.body)[0];
        const validatedBody = await bodyValidation(bodyName, req.body[bodyName]);
        console.log(validatedBody)
        req.validatedBody = validatedBody;
        next()
    } catch (error) {
        const mappedError = traceAndThrowError(error);
        next(mappedError); 
    }
};

module.exports = adminReqBodyValidation;