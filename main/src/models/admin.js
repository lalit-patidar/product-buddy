const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_ADMIN} = require("../../config/app-config")

const adminSchema = new mongoose.Schema({
    userName: {
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
            if(value !== 'admin-hiteshi' && value !== "admin") throw new Error("Role is invalid!")
        }
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
    delete admin.password;

    return userObject;
};

adminSchema.methods.generateAuthToken = async function () {
      const admin = this;
      const token = jwt.sign({_id: admin._id.toString()}, JWT_ADMIN);
      console.log(token, 'generated from ...generate token')
      admin.tokens = admin.tokens.concat({token});
      admin.save()
      return token;
}


adminSchema.statics.findCreadentials = async (email, password) => {
    const admin = await Admin.findOne({email});
    if(!admin) {
        throw new Error("unable to login")
    };

    const isMatch = await bcrypt.compare(password, admin.password);

    if(!isMatch) {
        throw new Error("unable to login")
    }

    return admin
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