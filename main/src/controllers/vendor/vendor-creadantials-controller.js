const {VendorCreadentialServicesInstance} = require("../../services/vendor/vendor-creadentials-services");
const bodyValidation = require("../../utils/validations/index");
const {VENDOR_ACCESS_KEY} = require("../../../config/app-config")

const loginVendoreProfileController = async (req, res, next) => {
    try {
       const serviceResponse = await VendorCreadentialServicesInstance.loginVendor(validatedBody.email, validatedBody.password, validatedBody.role);
       const responseBody = await  HttpResponse.OK(serviceResponse);
       res.send(responseBody);
    } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
    }
 };

 const updateVendorProfileController = async (req, res, next) => {
   try {
       const serviceResponse = await VendorCreadentialServicesInstance.updateVendor(req.validatedBody, req.vendor)
       const responseBody = await  HttpResponse.OK(serviceResponse);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const deleteVendorProfileController = async (req, res, next) => {
   try {
      const serviceResponse = await VendorCreadentialServicesInstance.deleteVendor(req.admin)
       const responseBody = await  HttpResponse.OK(serviceResponse);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const logoutVendorProfileController = async (req, res, next) => {
   try {
     const serviceResponse = await VendorCreadentialServicesInstance.deleteVendor(req.admin)
       const responseBody = await  HttpResponse.OK(serviceResponse);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

 module.exports = {
    loginVendoreProfileController,
    
   };
 
