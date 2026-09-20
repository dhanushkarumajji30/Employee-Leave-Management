const mongoose = require("mongoose");

const leaveApplicationSchema = new mongoose.Schema({
    leaveId: {
        type: String,
        required: true,
        unique: true
    },

    employeeId: {
        type: String,
        required: true
    },

    leaveType: {
        type: String,
        required: true,
        enum: ["CL", "SL", "EL", "OD"]
    },

    fromDate: {
        type: Date,
        required: true
    },

    toDate: {
        type: Date,
        required: true
    },

    reason: {
        type: String,
        required: true
    },

    applicationDate: {
        type: Date,
        default: Date.now
    },

    leaveStatus: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    }
});

module.exports = mongoose.model(
    "LeaveApplication",
    leaveApplicationSchema
);