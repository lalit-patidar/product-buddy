const AdminModel = require("../../models/admin");
const bodyValidation = require("../../utils/validations/index");
const {ADMIN_ACCESS_KEY} = require("../../../config/app-config")

const signupAdminController = async (req, res, next) => {
   try {
      if (req.params.id !== ADMIN_ACCESS_KEY) throw new Error("Invalid admin access key!")

      const { body } = req;
      const validatedBody = await bodyValidation("adminSignup", body);

      const admin = new AdminModel(validatedBody);
      await admin.save();
      res.json(admin)

   } catch (err) {
      res.status(400).send("bad request!")
   }
};

const loginAdminController = async (req, res, next) => {
   try {
      if (req.params.id !== ADMIN_ACCESS_KEY) throw new Error("Invalid admin access key!")
      
      const { body } = req;
      const validatedBody = await bodyValidation("adminLogin", body);
      const admin = await AdminModel.findCreadentials(validatedBody.email, validatedBody.password);
      if(!admin) throw new Error("user not found..")
      const token = await admin.generateAuthToken();
      res.json({authToken: token, admin})

   } catch (err) {
      res.status(404).send(err.message)
   }
};

module.exports = {
   signupAdminController,
   loginAdminController
}