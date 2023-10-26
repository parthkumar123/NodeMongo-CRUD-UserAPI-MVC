const express = require("express");
const app = express();

const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: path.join(__dirname, `/env/${process.env.NODE_ENV}.env`)
});

const port = process.env.PORT;
app.use(express.urlencoded({ extended: false }));

const userRouter = require("./routes/user");

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});