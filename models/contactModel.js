const mongoose  = require("mongoose");

const contactSchema = mongoose.Schema({
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
    name:{
        type: String,
        requried: [true,"Please add the Contact Name"],
    },
    email:{
        type: String,
        requried: [true,"Please add the Contact email"],
    },
    phone:{
        type: String,
        requried: [true,"Please add the Phone Number"],
    }
},{
    timestamps:true,
}
);


module.exports = mongoose.model("Contact",contactSchema);