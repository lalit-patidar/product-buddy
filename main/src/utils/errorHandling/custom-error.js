const mongoose = require("mongoose");
const HttpResponse = require("../../utils/httpResponse/all-http-response");
const { appConstants } = require("../../../config/app-constants/constants");
const { object } = require("joi");

const { errors: { dbErrors, errorName, errorMessage } } = appConstants;

/// need to handle error properly...

const traceAndThrowError = (error) => {
    let errors;
    let dbValidationFailedError = error.message.includes(dbErrors.accountNotFound) ? "email" : error.message.includes(dbErrors.invalidPassword) ? "password" : null;
    if (error instanceof Error) console.log("error is found ....", error.name)
    if (error instanceof mongoose.Error.ValidationError) {
        errors = Object.keys(error.errors).map(errorKey => {
            return {
                label: errorKey,
                message: error.errors[errorKey].properties.message
            }
        });


        return HttpResponse.badRequest(errors);
    } else if (error.code === dbErrors.mongodbDuplicateErrCode && error.name === errorName.mongoServerError) {
        errors = [{ label: "Account", message: "Account is already exists!" }];
        return HttpResponse.badRequest(errors);

    } else if (dbValidationFailedError) {
        //  Throw error when findCreadentials unable to find user with the give information
        errors = [{ label: dbValidationFailedError, message: error.message }]
        return HttpResponse.notFound(errors);

    } else if (error.details) {
        // Throw error when joi validation gets failed.
        console.log("is this is working")
        errors = error.details.map(errorKey => {
            const errorMessageKey = errorKey.message.match(/"(.*?)"/)[1];
            return {
                label: errorMessageKey,
                message: errorKey.message
            }
        });
        return HttpResponse.badRequest(errors)

    } else if (error.message.includes(errorMessage.ApiAccessDenied)) {
        errors = [{ label: "Access", message: error.message }]
        return HttpResponse.forbidden(errors);

    } else if (error.message.includes(errorMessage.UnproccessedBody)) {
        errors = [{ label: "Body", message: error.message }];
        return HttpResponse.unProcessd(errors);

    } else if(error.message.includes(errorMessage.AuthenticationFailed)) {
        errors = [{ label: "Authentication", message: error.message }];
        return HttpResponse.forbidden(errors);
    } else if(error.message.includes(dbErrors.accountNotFound)) {
        errors = [{ label: "Account", message: error.message }];
        return HttpResponse.forbidden(errors);
    }
    else {
        errors = [{ label: "Internal", message: "Something went wrong" }];
        return HttpResponse.internalServer(errors);
    }
};

module.exports = traceAndThrowError;
