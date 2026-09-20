const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const leaveRoutes = require("./routes/leaveRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Employee routes
app.use("/employees", employeeRoutes);

// Leave application routes
app.use("/leaveApplications", leaveRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Employee Leave Management Backend is Running!");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});