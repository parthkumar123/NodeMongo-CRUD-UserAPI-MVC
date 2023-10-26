const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First Name is required"]
    },
    lastname: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    jobtitle: {
        type: String,
        required: [true, "Job Title is required"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required"]
    }
}, { timestamps: true }, { collection: "user" });

module.exports = mongoose.model("user", userSchema);