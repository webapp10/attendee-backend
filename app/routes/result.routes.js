const controller = require("../controllers/result.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Cookie, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/CampusPortalSOA/stdrst", controller.Result);
  app.post("/CampusPortalSOA/rstdtl", controller.DetailedResult);
};
