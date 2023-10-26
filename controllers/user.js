"use strict";
const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    // Find all users.
    const findUsers = await User.find();
    return res.status(200).send(findUsers);
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    console.log(body)
    // Check if all fields are provided.
    if (!body || !body.firstname || !body.lastname || !body.email || !body.jobtitle | !body.gender) {
        return res.status(400).send({
            message: "All fields are required."
        });
    }

    // Find all users.
    await User.create({
        firstName: body.firstname,
        lastName: body.lastname,
        email: body.email,
        jobTitle: body.jobtitle,
        gender: body.gender
    }).catch((error) => {
        console.log(error);
        // Handle duplicate email error.
        if (error.code === 11000) {
            return res.status(400).send({
                message: "Email already exists."
            });
        }
        return res.status(500).send({
            message: "Internal Server Error."
        });
    });

    // Return success message.
    return res.json({ message: "User created successfully." });
}

async function handleGetUserById(req, res) {
    const { id: userId } = req.params;
    // Find user by id.
    const findUserById = await User.find({ _id: userId });
    return res.status(200).send(findUserById);
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser
};
