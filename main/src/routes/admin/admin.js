const express = require("express");
const adminAuth = require("../../middlewares/admin/admin-auth")
const adminReqBodyAuth = require("../../middlewares/admin/admin-body-validation")
const {signupAdminController, loginAdminController, updateAdminProfileController, deleteAdminProfileController} = require("../../controllers/admin/admin-creadentials")
const {createVendorProfileController, viewAllVendorProfileController} = require("../../controllers/admin/admin-vendor-controllers");

const adminRouter = express.Router();

adminRouter.post("/signup-admin/:id/secure", adminReqBodyAuth, signupAdminController);
adminRouter.post("/login-admin/:id/secure", adminReqBodyAuth, loginAdminController);
adminRouter.patch("/update-admin/:id/secure", adminReqBodyAuth, adminAuth, updateAdminProfileController);
adminRouter.delete("/remove-admin/:id/secure", adminReqBodyAuth, adminAuth, deleteAdminProfileController);

adminRouter.post("/cr-vendor/admin/secure", adminAuth, createVendorProfileController);
adminRouter.get("/view-vendors/admin/secure", adminAuth, viewAllVendorProfileController);

module.exports = adminRouter;


