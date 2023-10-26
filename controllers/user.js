"use strict";
const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    // Find all users.
    const findUsers = await User.find();
    return res.status(200).send(findUsers);
}

async function handleCreateNewUser(req, res) {
    const body = req.body;

    // Check if all fields are provided.
    if (!body || !body.firstname || !body.lastname || !body.email || !body.jobtitle | !body.gender) {
        return res.status(400).send({
            message: "All fields are required."
        });
    }

    // Find all users.
    return await User.create({
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        jobtitle: body.jobtitle,
        gender: body.gender
    }).then(() => {
        // Return success message.
        return res.json({ message: "User created successfully." });
    }).catch((error) => {
        // Handle duplicate email error.
        if (error.code === 11000) {
            return res.status(400).send({
                message: "Email already exists."
            });
        }
        // Return error message.
        return res.status(500).send({
            message: "Internal Server Error."
        });
    });
}

async function handleGetUserById(req, res) {
    const { id: userId } = req.params;
    // Find user by id.
    const findUserById = await User.find({ _id: userId });
    return res.status(200).send(findUserById);
}

async function handleDeleteUserById(req, res) {
    const { id: userId } = req.params;

    // Delete user by id.
    await User.findOneAndDelete({ _id: userId });
    return res.status(200).send({ message: "User deleted successfully." });
}

async function handleUpdateUserById(req, res) {
    const body = req.body;
    const { id: userId } = req.params;

    // Check if all fields are provided.
    if (!body || body.firstname || body.lastname || body.email || body.jobtitle || body.gender) {
        await User.findOneAndUpdate({ _id: userId }, req.body);
    } else {
        return res.status(400).send({
            message: "Provide valid fields to update."
        });
    }

    // Update user by id.
    return res.status(200).send({ message: "User updated successfully." });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser,
    handleDeleteUserById,
    handleUpdateUserById
};
