const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName : {
        type: String,
        required : [true, "Please Add the user Name.."],
    },
    email : {
        type : String,
         required : [true, "Please Add the user Email Address.."],
         unique : [true, "Email Address Already Taken..."]
    },
    password : {
        type: String,
        required : [true, "Please Add the user Password.."],
    },
},{
    timestamps : true,
});

module.exports = mongoose.model("User",userSchema);