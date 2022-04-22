const express = require("express");
const adminAuth = require("../../middlewares/admin/admin-auth")
const {signupAdminController, loginAdminController} = require("../../controllers/admin/admin-creadentials")
const {createVendorProfileController, viewAllVendoreProfileController} = require("../../controllers/admin/admin-vendor-controllers");

const adminRouter = express.Router();

adminRouter.post("/signup-admin/:id/secure", signupAdminController);
adminRouter.post("/login-admin/:id/secure", loginAdminController);

adminRouter.post("/cr-vendor/admin/secure", adminAuth, createVendorProfileController);
adminRouter.get("/view-vendors/admin/secure", adminAuth, viewAllVendoreProfileController);

module.exports = adminRouter;


