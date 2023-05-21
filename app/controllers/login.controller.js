const axios = require("axios");

exports.LoginAndChangePassword = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newpassword = req.body.newpassword;
  const confirmpassword = req.body.confirmpassword;
  const MemberType = req.body.MemberType; // s

  console.log(`👤 requested user: ${req.body?.username}`);

  const options = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/login",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    data: `{"username":"${username}" ,"password":"${password}","MemberType":"${MemberType}"}`,
  };

  const options_2 = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/login",
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
      res.set({
        "set-cookie": response.headers["set-cookie"],
      });
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.status(500).send({
        error: true,
        message: error,
      });
    });
};
