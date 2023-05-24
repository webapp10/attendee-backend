const controller = require("../controllers/login.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Cookie, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/CampusPortalSOA/login", controller.LoginAndChangePassword);
};
