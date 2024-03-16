const express = require("express");

const app = express();

app.use(express.json());

// Create Routes
app.use("/user/signup", (req, res) => {
  res.status(200).json({
    status: "Signup User Route",
  });
});

app.use("/user", (req, res) => {
  res.status(200).json({
    status: " User Route",
  });
});

// Handle wrong routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
  });
});

module.exports = app;
