const HttpResponse = require("../httpResponse/all-http-response");

const expressGlobalErrorHandling = (error, req, res, next) => {
    if (error instanceof HttpResponse) {
        res.status(error.status).json(error);
        return;
    }

    res.status(error.status || 500).send("Internal server error!");
}

module.exports = expressGlobalErrorHandling;