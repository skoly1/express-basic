const signup = async (req, res) => {
  console.log("from signup user route");
  res.status(200).json({
    status: "Signup User Route",
  });
};

const userController = async (req, res) => {
  res.status(200).json({
    status: " User Route",
  });
};

module.exports = {
  signup,
  userController,
};


// Client > Api > Middlewares | Backend Controllers
