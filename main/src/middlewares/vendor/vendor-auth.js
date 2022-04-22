const jwt =  require("jsonwebtoken");
const Vendor = require('../../models/vendor');
const {JWT_VENDOR} = require("../../../config/app-config")

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, JWT_VENDOR);
        const vendor = await Vendor.findOne({
            _id: decoded._id,
            "tokens.token": token
        });

        if(!vendor) throw new Error();

        req.vendor = vendor;
        next()
    } catch (err) {
       next(err)
    }
};

module.exports = auth;