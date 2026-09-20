const express = require("express");

const {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

const router = express.Router();

// GET all employees
router.get("/", getEmployees);

// POST a new employee
router.post("/", createEmployee);

// PUT update employee
router.put("/:id", updateEmployee);

// DELETE employee
router.delete("/:id", deleteEmployee);

module.exports = router;