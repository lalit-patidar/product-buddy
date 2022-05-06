exports.appConstants = {
    errors: {
      dbErrors: {
          mongodbDuplicateErrCode: 11000,
          mongodbDuplicateUserMessage:  "Account is already exists",
          accountNotFound: "Account not found!",
          invalidPassword: "Password is Invalid",
       },  
       errorName: {
           validationError: "ValidationError",
           mongoServerError: "MongoServerError",

       },
       errorMessage: {
           ApiAccessDenied: "Api Access Denied",
           UnproccessedBody: "Invalid Request Body",
           invalidEmail: "Email is invalid",
           AuthenticationFailed: "User Authentication failed"
       },
    },
    httpCode: {
        OK: [200, "OK Success"],
        created: [201, "Created Successfuly"],
        badRequest: [400, "Bad request"],
        notFound: [404, "Not found"],
        forbidden: [403, "Not Authenticate"],
        unproccessed: [422, "Unprocessed"],
        internalServer: [500, "Internal server error"],
    },
}

