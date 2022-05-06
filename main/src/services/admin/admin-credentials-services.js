const AdminModel = require("../../models/admin");

class AdminCreadentialServices {
    async createAdmin(newAdminData) {
        try {
            const admin = new AdminModel(newAdminData);
            await admin.save();
            return admin
        } catch (error) {
              throw error;
        }
    };

    async loginAdmin(validatedBody) {
        try {
            const admin = await AdminModel.findCreadentials(validatedBody.email, validatedBody.password);
            if (!admin) throw new Error("user not found..");
            const token = await admin.generateAuthToken();
            return { admin, token };
        } catch (error) {
           throw error
        }
    };

    async updateAdmin(updateBody, admin) {
        try {
            if (!admin) throw new Error("user not found..");

            for (let fileds in updateBody) {
                admin[fileds] = updateBody[fileds];
            };

           const updatedAdmin =  await admin.save();
            return updatedAdmin;
        } catch (error) {
            throw error;
        }
    };

    //be carefull.
    async deleteAdmin(adminData) {
        try {
            await adminData.remove()
            return 
        } catch (err) {
            return err
        }
    };

    async logoutAdmin (admin, existingToken) {
        try {
          admin.tokens = admin.tokens.filter(token => token.token !== existingToken);
          await admin.save();
            return 
        } catch (error) {
            throw error
        }
    };
}

exports.AdminCreadentialServicesInstance = new AdminCreadentialServices();
