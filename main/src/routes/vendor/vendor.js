const express = require("express");
const {loginVendoreProfileController} = require("../../controllers/vendor/vendor-creadantials-controller");
const {createProductController, getProductController} = require("../../controllers/vendor/vendor-product-contollers");
const authVendor = require("../../middlewares/vendor/vendor-auth");

const vendorRouter = express.Router();

// vendorRouter.post("/signup-admin/:id/secure", signupAdminController);
vendorRouter.post("/login-vendor/:id/secure", loginVendoreProfileController);
vendorRouter.post("/cr-product/vendor/secure", authVendor,  createProductController);
vendorRouter.get("/get-product/:sku/vendor/secure", authVendor,  getProductController);

module.exports = vendorRouter;


