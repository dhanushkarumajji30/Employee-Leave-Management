const express = require("express");

const {
    getLeaveApplications,
    createLeaveApplication,
    updateLeaveApplication,
    deleteLeaveApplication
} = require("../controllers/leaveController");

const router = express.Router();

// GET all leave applications
router.get("/", getLeaveApplications);

// POST a new leave application
router.post("/", createLeaveApplication);

// PUT update leave application
router.put("/:id", updateLeaveApplication);

// DELETE leave application
router.delete("/:id", deleteLeaveApplication);

module.exports = router;