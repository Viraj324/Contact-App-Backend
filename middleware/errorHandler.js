const {constants} = require("F:/Projects/mycontacts-backend/constants.js");
const errorHandler = (err, req, res, next ) =>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title : "Validation Error",message : err.message,stackTrace : err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title : "Not Error",message : err.message,stackTrace : err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title : "Unauthorized  Error",message : err.message,stackTrace : err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title : "Forbidden Error",message : err.message,stackTrace : err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title : "Server Error",message : err.message,stackTrace : err.stack});
            break;
        default :  
            console.log("No Error, All good..!!!");
    }


}

module.exports = errorHandler;
