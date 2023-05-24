const axios = require("axios");
const { BASE_PATH } = require("../exports/basepath");
exports.LoginAndChangePassword = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newpassword = req.body.newpassword;
  const confirmpassword = req.body.confirmpassword;
  const MemberType = req.body.MemberType; // s
  const BASE_URL = `${BASE_PATH}/CampusPortalSOA/login`;

  const options = {
    method: "POST",
    url: BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    data: `{"username":"${username}" ,"password":"${password}","MemberType":"${MemberType}"}`,
  };

  const options_2 = {
    method: "POST",
    url: BASE_URL,
    data: {
      newpassword: `${newpassword}`,
      confirmpassword: `${confirmpassword}`,
    },
    headers: {
      Cookie: req.headers["cookie"],
    },
  };

  axios
    .request(confirmpassword && newpassword ? options_2 : options)
    .then(function (response) {
      const cookie = response?.headers["set-cookie"] || null;
      console.log(`👤 requested user: ${username} - ${response?.data?.name}`);
      res.set({
        "set-cookie": response.headers["set-cookie"],
      });
      if (response?.data?.status === "success") {
        res.status(200).json({
          name: response.data.name,
          status: "success",
          cookie: cookie,
          message: response.data.message,
        });
      } else {
        res.status(400).json({
          name: "",
          status: "error",
          message: response.data.message,
        });
      }
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
