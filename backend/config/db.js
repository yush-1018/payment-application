const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test"); // simple local DB
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;   // 🔥 THIS LINE IS VERY IMPORTANT