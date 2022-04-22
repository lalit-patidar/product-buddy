const VendorModel = require("../../models/vendor");
const bodyValidation = require("../../utils/validations/index");

const createVendorProfileController = async (req, res, next) => {
   try {
      const { body } = req;
      const createdBy = req.admin.userName
      const validatedBody = await bodyValidation("vendorSignup", body);

      const vendor = new VendorModel({...validatedBody, createdBy});
      await vendor.save();
      res.json(vendor)

   } catch (err) {
      res.status(400).send("bad request!")
   }
};

const viewAllVendoreProfileController = async (req, res, next) => {
   try {
       const allVendorProfile = await VendorModel.find();
       if (!allVendorProfile) throw new Error("Vendors not found!");

       res.json({vendorsProfile: allVendorProfile})
   } catch (err) {
      res.status(404).send("not found")
   }
};

module.exports = {
   createVendorProfileController,
   viewAllVendoreProfileController
}