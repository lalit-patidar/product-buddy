const {AdminVendorServicesInstance} = require("../../services/admin/admin-vendor-services");
const HttpResponse = require("../../utils/httpResponse/all-http-response")


const createVendorProfileController = async (req, res, next) => {
   try {
      const vendor = AdminVendorServicesInstance.createVendorProfile(req.validatedBody, req.admin);
      const responseBody = HttpResponse.created(vendor);
      res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};


const viewVendorProfileController = async (req, res, next) => {
   try {
       const vendorProfile = await AdminVendorServicesInstance.viewVendorProfile(req.params.id);
       const responseBody = await  HttpResponse.OK(vendorProfile);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const viewAllVendorProfileController = async (req, res, next) => {
   try {
       const allVendorProfile = await AdminVendorServicesInstance.viewAllVendorsProfile(req.admin)
       const responseBody = await  HttpResponse.OK(allVendorProfile);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const updateVendorProfiles = async (req, res, next) => {
   try {
       const updatedBody = await AdminVendorServicesInstance.updateVendorProfiles(req.validatedBody)
       const responseBody = await  HttpResponse.OK(updatedBody);
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const deleteVendorProfiles = async (req, res, next) => {
   try {
     await AdminVendorServicesInstance.deleteVendorProfiles(req.admin)
       const responseBody = await  HttpResponse.OK({message: "Account has been deleted"});
       res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

module.exports = {
   createVendorProfileController,
   viewAllVendorProfileController,
   viewVendorProfileController,
   updateVendorProfiles,
   deleteVendorProfiles
};