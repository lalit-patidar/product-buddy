const VendorModel = require("../../models/admin");
const {appConstants} = require("../../../config/app-constants/constants");

const {errors: {dbErrors}} = appConstants

class AdminVendorServices {
    async createVendorProfile(newVendorData, admin) {
        try {
            const createdBy = admin._id;
            const newVendor = new VendorModel({...newVendorData, createdBy});
            await newVendor.save();
            return newVendor;
        } catch (error) {
            throw error
        }
    };

    async viewVendorProfile(vendorId) {
        try {
            const vendor = await VendorModel.findById({_id: vendorId});
            if(!vendor) throw new Error(dbErrors.accountNotFound);
            return vendor;
        } catch (error) {
            throw error
        }
    };

    async viewAllVendorsProfile(admin) {
        try {
            const allVendorProfile = await VendorModel.find();
            if (!allVendorProfile) throw new Error(dbErrors.accountNotFound);
            return allVendorProfile
        } catch (error) {
            throw error
        }
    }

    
    async updateVendorProfiles(updateBody) {
        try {
            const updatedVendor = await VendorModel.findByIdAndUpdate({ _id: updateBody.vendor_id }, updateBody.vendorUpdateBody)
            return updatedVendor;
        } catch (error) {
            throw error;
        }
    };

    async deleteVendorProfiles(vendorId) {
        try {
            const deletedVendor = await VendorModel.findOneAndDelete({ _id: vendorId })
            return deletedVendor;
        } catch (error) {
            throw error;
        }
    };
}

exports.AdminVendorServicesInstance = new AdminVendorServices();
