const Loan = require("../models/loan");

const createLoan = async (data) => {
    const loan = new Loan(data);
    return await loan.save();
};

module.exports = { createLoan };