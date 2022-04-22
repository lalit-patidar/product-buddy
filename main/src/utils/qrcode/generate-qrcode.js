const QRCode = require("qrcode");

const generateQRCode = async (data) => {
    try {
        const qrCode = await QRCode.toBuffer(data)

        return qrCode;
    } catch (err) {
       return err;
    }
}

module.exports = generateQRCode;