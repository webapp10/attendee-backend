const axios = require("axios");

exports.Result = (req, res) => {
  const options = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/stdrst",
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
    url: "http://115.240.101.51:8282/CampusPortalSOA/rstdtl",
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
