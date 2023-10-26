// Description: This file is the entry point of the application.
// Require the necessary modules.
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// Dynamic port binding.
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
    path: path.join(__dirname, `/env/${process.env.NODE_ENV}.env`)
});
const port = process.env.PORT;

// Middleware configuration.
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients).
app.use(bodyParser.json());

// MongoDB connection.
const connectMongoDB = require("./connection");
connectMongoDB(process.env.MONGO_URI);

// Routes.
const userRouter = require("./routes/user");

app.use("/users", userRouter);

// Start the server.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});