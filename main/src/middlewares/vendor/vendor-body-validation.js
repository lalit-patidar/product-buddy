const {VENDOR_ACCESS_KEY} = require("../../../config/app-config");
const bodyValidation = require("../../utils/validations/index");
const traceAndThrowError = require("../../utils/errorHandling/custom-error");
const {appConstants} = require("../../../config/app-constants/constants");

const {errors: {errorMessage}} = appConstants;


const vendorReqBodyValidation = async (req, res, next) => {
    try {
        if (req.params.id !==  VENDOR_ACCESS_KEY) throw new Error(errorMessage.ApiAccessDenied);
        const bodyName = Object.keys(req.body)[0];
        if (!req.body.vendorSignup && !req.body.vendorLogin && !req.body.vendorUpdate && !req.body.vendorRemove) throw new Error("Unrecognised body!")
        const validatedBody = await bodyValidation(bodyName, req.body[bodyName]);
        req.validatedBody = validatedBody;
        next()
    } catch (error) {
        const mappedError = traceAndThrowError(error);
        next(mappedError);
    }
};

module.exports = vendorReqBodyValidation;