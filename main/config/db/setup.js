const mongoose = require("mongoose");
const {DB_URL} = require("../app-config");
// const 


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
}, (error) => {
   if(error) {
        console.log(error.message)
   }
});
