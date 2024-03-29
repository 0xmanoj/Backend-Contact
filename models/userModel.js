const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
    },
    email: {
        type: String,
        required: [true, "Please enter a email address"],
        unique: [true, "Email is already exists"],
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User",userSchema);
///
