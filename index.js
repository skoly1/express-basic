const express = require("express");
const { signup, userController } = require("./src/controllers/userController");
const { UserAuth } = require("./src/middlewares/userAuth");

const app = express();

app.use(express.json());

app.use("/user/signup", signup);

app.use("/user/login", UserAuth, userController);

app.use("/user/details", UserAuth, userController);

// Handle wrong routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
  });
});

module.exports = app;
