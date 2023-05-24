const controller = require("../controllers/attendance.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Cookie, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/CampusPortalSOA/attendanceinfo", controller.AttendanceInfo);
};
