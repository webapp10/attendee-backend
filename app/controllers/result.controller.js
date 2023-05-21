const axios = require("axios");
const { BASE_PATH } = require("../exports/basepath");
exports.Result = (req, res) => {
  const options = {
    method: "POST",
    url: `${BASE_PATH}/CampusPortalSOA/stdrst`,
    headers: {
      Cookie: req.headers["cookie"],
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response?.data?.info[0]?.name) {
        console.log(
          `👤 requested user: ${response?.data?.info[0]?.name} - ${response?.data?.info[0]?.enrollmentno}`
        );
      }
      res.send(response.data);
    })
    .catch(function (error) {
      res.send({
        error: true,
        message: error,
      });
    });
};

exports.DetailedResult = (req, res) => {
  const styno = req.body.styno;
  const Cookie = req.headers["cookie"];
  const options = {
    method: "POST",
    url: `${BASE_PATH}/CampusPortalSOA/rstdtl`,
    data: {
      styno: `${styno}`,
    },
    headers: {
      Cookie: `${Cookie}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      res.send({
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
