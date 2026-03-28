const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
    user_id: String,
    amount: Number,
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model("Loan", loanSchema);