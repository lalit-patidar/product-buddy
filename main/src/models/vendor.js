const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_VENDOR} = require("../../config/app-config")

const vendorSchema = new mongoose.Schema({
    vendorName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    },
    //here adding role for security reason;
    role: {
        type: String,
        maxlength: 13,
        validate(value) {
            if(value !== 'vendor') throw new Error("Role is invalid!")
        }
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    createdBy: {
        type: String,
    }
}, {timestamps: true});

vendorSchema.methods.toJSON = function () {
    const admin = this;
    const userObject = admin.toObject();
    delete userObject.tokens;
    delete userObject.password;

    return userObject;
};

vendorSchema.methods.generateAuthToken = async function () {
      const admin = this;
      const token = jwt.sign({_id: admin._id.toString()}, JWT_VENDOR);
      admin.tokens = admin.tokens.concat({token});
      admin.save()
      return token;
}


vendorSchema.statics.findCreadentials = async (email, password, role) => {
    const admin = await Vendor.findOne({email, role});
    if(!admin) {
        throw new Error("unable to login")
    };

    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch) {
        throw new Error("unable to login")
    }

    return admin
};

vendorSchema.pre("save", async function (next)  {
    const admin = this;

    if(admin.isModified("password")) {
        admin.password = await bcrypt.hash(admin.password, 8)
    };

    next();
})

const Vendor = mongoose.model('vendor', vendorSchema);
module.exports = Vendor;