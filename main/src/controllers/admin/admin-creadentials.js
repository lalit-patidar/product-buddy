const { AdminCreadentialServicesInstance } = require("../../services/admin/admin-credentials-services");
const HttpResponse = require("../../utils/httpResponse/all-http-response");
const traceAndThrowError = require("../../utils/errorHandling/custom-error");

const signupAdminController = async (req, res, next) => {
   try {
      const admin = await AdminCreadentialServicesInstance.createAdmin(req.validatedBody);
      const responseBody = HttpResponse.created(admin);
      res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const loginAdminController = async (req, res, next) => {
   try {
      const { admin, token } = await AdminCreadentialServicesInstance.loginAdmin(req.validatedBody);
      const responseBody = HttpResponse.OK({ admin, token });
      res.send(responseBody)
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

const updateAdminProfileController = async (req, res, next) => {
   try {
     const admin = await AdminCreadentialServicesInstance.updateAdmin(req.validatedBody, req.admin);
     const responseBody = HttpResponse.OK();
     res.send(responseBody)
   } catch (error) {
      console.log(error)
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};


const deleteAdminProfileController = async (req, res, next) => {
   try {
      if (!req.validatedBody.agree === true)  throw new Error("unConfirmed operation")
       await AdminCreadentialServicesInstance.deleteAdmin(req.admin);
      const responseBody = HttpResponse.OK({message: "Acount has beem removed successfully"});
      res.send(responseBody)
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};


const logoutAdminProfileController = async (req, res, next) => {
   try {
       await AdminCreadentialServicesInstance.logoutAdmin(req.admin, req.token);
      const responseBody = HttpResponse.OK({message: "You are now logout"});
      res.send(responseBody);
   } catch (error) {
      const mappedError = traceAndThrowError(error);
      next(mappedError);
   }
};

module.exports = {
   signupAdminController,
   loginAdminController,
   updateAdminProfileController,
   deleteAdminProfileController,
   logoutAdminProfileController
}