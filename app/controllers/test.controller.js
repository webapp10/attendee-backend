const axios = require("axios");
const { BASE_PATH } = require("../exports/basepath");

exports.TestServer = async (req, res) => {
  const username = "DEMO";
  const password = "DEMO";
  const MemberType = "s";
  const BASE_URL = `${BASE_PATH}/CampusPortalSOA/login`;
  const options = {
    method: "POST",
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    data: `{"username":"${username}" ,"password":"${password}","MemberType":"${MemberType}"}`,
  };

  axios
    .request(options)
    .then(function (response) {
      if (response?.data) {
        res.status(200).json({
          error: false,
          message: "college server working properly",
        });
      } else {
        res.status(500).json({
          error: true,
          message: "college servers are down",
        });
      }
    })
    .catch(function (error) {
      res.status(500).json({
        error: true,
        message: "college servers are down",
      });
    });
};

/*
- last checked: 22-05-2023
- looks fine
- checked by Subhranshu Choudhury
 */
