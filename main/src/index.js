const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("../config/db/setup");
const adminRoutes = require("./routes/admin/admin");
const vendorRoutes = require("./routes/vendor/vendor");
const {PORT} = require("../config/app-config")

const app = express()
const port = PORT;

app.use(express.json());
app.use(helmet())
app.use(cors());
app.use(adminRoutes);
app.use(vendorRoutes);

app.listen(port, () => console.log(`server is running at http://127.0.0.1:${port}`))
