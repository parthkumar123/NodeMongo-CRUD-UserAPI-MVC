// Description: This file is the entry point of the application.
// Require the necessary modules.
const express = require("express");
const app = express();

// Dynamic port binding.
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
    path: path.join(__dirname, `/env/${process.env.NODE_ENV}.env`)
});
const port = process.env.PORT;

// Middleware configuration.
app.use(express.urlencoded({ extended: false }));

// Routes.
const userRouter = require("./routes/user");

app.use("/user", userRouter);

// Start the server.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});