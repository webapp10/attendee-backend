const axios = require("axios");

exports.AttendanceInfo = (req, res) => {
  const registerationid = req.body.registerationid;
  const options = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/attendanceinfo",
    data: {
      registerationid: `${registerationid}`,
    },
    headers: {
      Cookie: req.headers["cookie"],
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.status(500).send({
        error: true,
        message: error,
      });
    });
};
