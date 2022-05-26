const VendorModel = require("../../models/vendor");

class VendorCreadentialServices {
    async createVendor(body) {
       try {
            const vendor = new VendorModel(body);
            await vendor.save();
            return vendor;
        } catch (error) {
             throw error
        }
    }; 

    async loginVendor(body) {
        try {
            const {email, password,role} = body
            const vendor = await VendorModel.findCreadentials(email, password, role);
            const token = await vendor.generateAuthToken();
            return {vendor, token};
        } catch (error) {
             return error;
        }
    };

    async updateVendor(body) {
        try {
            const {vendor:{_id}, vendorUpdateBody} = body
            const updatedVendor = await VendorModel.findByIdAndUpdate({ _id: _id }, vendorUpdateBody)
            return updatedVendor;
        } catch (error) {
             throw error;
        }
    };

    //be carefull.
    async deleteVendor(vendorProfile) {
          try {
           await vendorProfile.remove();
           return {message: 'Admin has been deleted'};
          } catch (error) {
              throw error
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
