const {VendorCreadentialServicesInstance} = require("../../services/vendor/vendor-creadentials-services");
const HttpResponse = require("../../utils/httpResponse/all-http-response");
const traceAndThrowError = require("../../utils/errorHandling/custom-error");

const createVendorController = async (req, res, next) => {
   try {
     const vendor = VendorCreadentialServicesInstance.createVendor(req.validatedBody);
     await vendor.save();

     const responseBody = HttpResponse.created(vendor);
     res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
}

const loginVendoreProfileController = async (req, res, next) => {
    try {
       const serviceResponse = await VendorCreadentialServicesInstance.loginVendor(req.validatedBody);
       const responseBody = HttpResponse.OK(serviceResponse);
       res.send(responseBody);
    } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
    }
 };

 const updateVendorProfileController = async (req, res, next) => {
   try {
       const serviceResponse = await VendorCreadentialServicesInstance.updateVendor(req.validatedBody, req.vendor)
       const responseBody = HttpResponse.OK(serviceResponse);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const deleteVendorProfileController = async (req, res, next) => {
   try {
      const serviceResponse = await VendorCreadentialServicesInstance.deleteVendor(req.admin)
       const responseBody = HttpResponse.OK(serviceResponse);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const logoutVendorProfileController = async (req, res, next) => {
   try {
     const serviceResponse = await VendorCreadentialServicesInstance.deleteVendor(req.vendor, req.token)
       const responseBody = HttpResponse.OK(serviceResponse);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

 module.exports = {
   createVendorController,
    loginVendoreProfileController,
    updateVendorProfileController,
    deleteVendorProfileController,
    logoutVendorProfileController
   };
 
