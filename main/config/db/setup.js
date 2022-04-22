const mongoose = require("mongoose");
const {DB_URL} = require("../app-config")

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
});

