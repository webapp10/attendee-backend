const axios = require("axios");
const { BASE_PATH } = require("../exports/basepath");
exports.AttendanceInfo = (req, res) => {
  const registerationid = req.body.registerationid;
  const options = {
    method: "POST",
    url: `${BASE_PATH}/CampusPortalSOA/attendanceinfo`,
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

/*
- last checked: 22-05-2023
- looks fine
- checked by Subhranshu Choudhury
 */
