const jwt =  require("jsonwebtoken");
const Admin = require('../../models/admin');
const {JWT_ADMIN} = require("../../../config/app-config")

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, JWT_ADMIN);
        const admin = await Admin.findOne({
            _id: decoded._id,
            "tokens.token": token
        });

        if(!admin) throw new Error();

        req.admin = admin;
        next()
    } catch (err) {
       next(err)
    }
};

module.exports = auth;