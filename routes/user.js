// Purpose: Handle all routes related to user
const express = require("express");
const router = express.Router();

const {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser
} = require("../controllers/user");

router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.get("/:id", handleGetUserById);

module.exports = router;