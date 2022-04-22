const ProductModel = require("../../models/products");
const bodyValidation = require("../../utils/validations/index");
const qrCode = require("../../utils/qrcode/generate-qrcode");

const createProductController = async (req, res, next) => {
    try {
          const {body} = req;
          const ownerID = req.vendor._id

          const validatedBody = await bodyValidation("createProduct", body);

          const productSKU = Math.floor(Date.now() + Math.random());
          const productAddressForInQr = `${req.protocol}://${req.get('host')}/get-product/${productSKU}/vendor/secure`
          const QRInBuffer = await qrCode(productAddressForInQr);

          const productDocument = {
              ...validatedBody,
              SKU: productSKU,
              QRCode: QRInBuffer,
              owner: ownerID
          }

          const product = await ProductModel(productDocument)
          await product.save();

          res.json({productQRCode: QRInBuffer.toString("base64")})
    } catch (err) {
       console.log(err)
       if (err.code === 11000) return res.status(400).send("Profile is already exists");
       else if (err.code && err.code !== 11000) return res.status(500).send("Internal server error");
       else return res.status(400).send("bad request!")
    }
 };


const getProductController = async (req, res, next) => {
   try {
         const productSKU = req.params.sku

         const product = await ProductModel.findOne({SKU: productSKU})
         
         res.json({product})
   } catch (err) {
      res.status(404).send("not found!")
   }
};

 module.exports = {
    createProductController,
    getProductController
    
   };
 
