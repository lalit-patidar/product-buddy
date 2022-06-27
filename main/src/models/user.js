const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN} = require("../../config/app-config")
const {appConstants} = require("../../config/app-constants/constants")

const {errors: {dbErrors, errorMessage}} = appConstants

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error(errorMessage.invalidEmail)///need to fix it
            }
        }
    },
    phoneNumber: {
       type: Number,
       required: true,
       maxlength: 10,
       unique: true       
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
}, {timestamps: true});

adminSchema.methods.toJSON = function () {
    const admin = this;
    const userObject = admin.toObject();
    delete userObject.tokens;
    delete userObject.password;
    // delete userObject.role;
    delete userObject.createdAt;
    delete userObject.updatedAt;
    delete userObject.__v
    return userObject;
};

adminSchema.methods.generateAuthToken = async function () {
      const admin = this;
      const token = jwt.sign({_id: admin._id.toString()}, JWT_ADMIN);
      admin.tokens = admin.tokens.concat({token});
      admin.save();
      return token;
}


adminSchema.statics.findCreadentials = async (email, password, role) => {
        const admin = await Admin.findOne({email});
        if(!admin) {
            throw new Error(dbErrors.accountNotFound)
        };
    
        const isMatch = await bcrypt.compare(password, admin.password);
    
        if(!isMatch) {
            throw new Error(dbErrors.invalidPassword)
        }
    
        return admin;
};

adminSchema.pre("save", async function (next)  {
    const admin = this;

    if(admin.isModified("password")) {
        admin.password = await bcrypt.hash(admin.password, 8)
    };

    next()

})

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;