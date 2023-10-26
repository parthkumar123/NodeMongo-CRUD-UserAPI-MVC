// Purpose: Handle all routes related to user
const express = require("express");
const router = express.Router();

const {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser,
    handleDeleteUserById,
    handleUpdateUserById
} = require("../controllers/user");

router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route("/:id")
    .get(handleGetUserById)
    .delete(handleDeleteUserById)
    .patch(handleUpdateUserById);

module.exports = router;