const vendorModel = require("../../models/vendor");
const bodyValidation = require("../../utils/validations/index");
const {VENDOR_ACCESS_KEY} = require("../../../config/app-config")

const loginVendoreProfileController = async (req, res, next) => {
    try {
       if (req.params.id !== VENDOR_ACCESS_KEY) throw new Error("Invalid admin access key!")
       
       const { body } = req;
       const validatedBody = await bodyValidation("vendorLogin", body);
       const vendor = await vendorModel.findCreadentials(validatedBody.email, validatedBody.password, validatedBody.role);
       if(!vendor) throw new Error("user not found..")
       const token = await vendor.generateAuthToken();
       res.json({authToken: token, vendor})
    } catch (err) {
       res.status(404).send("bad request!")
    }
 };

 module.exports = {
    loginVendoreProfileController,
    
   };
 
