const VendorModel = require("../../models/vendor");

class VendorCreadentialServices {
    async createVendor(validatedBody) {
       try {
            const vendor = new VendorModel(validatedBody);
            await vendor.save();
            return vendor;
        } catch (error) {
             throw error
        }
    }; 

    async loginVendor(vendorLoginData) {
        try {
            const vendor = await VendorModel.findCreadentials(vendorLoginData.email, vendorLoginData.password, vendorLoginData.role);
            if(!vendor) throw new Error("user not found..");
            const token = await vendor.generateAuthToken();
            return {vendor, token};
        } catch (error) {
             return error;
        }
    };

    async updateVendor(vendorUpdateBody, vendor) {
        try {
            for(let fileds of vendorUpdateBody) {
                vendor[fileds] = vendorUpdateBody[fileds];
            };

            await vendor.save();
            return vendor;
        } catch (err) {
             return err;
        }
    };

    //be carefull.
    async deleteVendor(vendorProfile) {
          try {
           await vendorProfile.remove();
           return {message: 'Admin has been deleted'};
          } catch (err) {
              return err
          }
    };

    async logoutVendor(vendorProfile, existingToken) {
        try {
          vendorProfile.tokens = vendorProfile.tokens.filter(token => token.token !== existingToken);
          vendorProfile.save();
         return {message: 'Account has be logedout'};
        } catch (error) {
            return error
        }
  };
}

exports.VendorCreadentialServicesInstance = new VendorCreadentialServices();
