const JsBarcode = require('jsbarcode');
const { createCanvas } = require("canvas");

const createBarcode = (data) => {
    const canvas = createCanvas();
    let barCode = JsBarcode(canvas, data);
    
    console.log(barCode)
    return barCode
}

module.exports = createBarcode;