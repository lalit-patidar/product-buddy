const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    productImage: {
        type: Buffer,
    },
    modelNo: {
        type: String,
        required: true,
        maxlength: 500,
        trim: true
    },
    SKU: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Vendor'
    }
}, { timestamps: true });

productsSchema.methods.toJSON = function () {
    const product = this;
    const productObject = product.toObject();
    delete productObject.QRCode;

    return productObject;
}

const Product = mongoose.model('products', productsSchema);
module.exports = Product;