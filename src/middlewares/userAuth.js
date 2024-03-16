const UserAuth = (req, res, next) => {
  console.log("from user auth middleware");
  next();
};

module.exports = {
  UserAuth,
};
