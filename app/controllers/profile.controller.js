const axios = require("axios");

exports.UserInfo = (req, res) => {
  const Cookie = req.headers["cookie"];
  const options = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/studentinfo",
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
