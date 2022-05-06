const {appConstants} = require("../../../config/app-constants/constants")

const {httpCode: {OK, created, badRequest, notFound, forbidden, unproccessed, internalServer}} = appConstants

class HttpResponse {
    constructor(status, message, body, errors) {
        this.status = status;
        this.message = message;
        if (body) {
            this.body = body;
        }
        this.errors = errors || [];
     };

    static created(body, err) {
        return new HttpResponse(created[0], created[1], body, err)
    };

    static OK(body, err) {
        return new HttpResponse(OK[0], OK[1], body, err);
    };

    // Http error responses
    static badRequest(error) {
        return new HttpResponse(badRequest[0], badRequest[1], null,  error)
    };

    static notFound(error) {
        return new HttpResponse(notFound[0], notFound[1], null, error)
    };

    static internalServer(error) {
        return new HttpResponse(internalServer[0], internalServer[1], null,  error)
    };

    // 403 forbidden - indicates that the server understands the request but refuses to authorize it
    static forbidden(error) {
        return new HttpResponse(forbidden[0], forbidden[1], null,  error);
    };

    static unProcessd(error) {
        return new HttpResponse(unproccessed[0], unproccessed[1], null,  error);
    };


};

module.exports = HttpResponse;