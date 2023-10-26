// Description: MongoDB connection
const mongoose = require('mongoose');

// Connect to MongoDB.
const connectMongoDB = async (dbUrl) => {
    try {
        // Connect mongoose to MongoDB.
        await mongoose.connect(dbUrl, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.log("MongoDB connection FAIL");
        process.exit(1);
    }
}

module.exports = connectMongoDB;