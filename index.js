const express = require("express");
const { signup, userController } = require("./src/controllers/userController");
const { UserAuth } = require("./src/middlewares/userAuth");

const app = express();

app.use(express.json());

const router = express.Router();

router.post("/user/signup", signup);

router.post("/user", UserAuth, userController);


// Handle wrong routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
  });
});

module.exports = app;
