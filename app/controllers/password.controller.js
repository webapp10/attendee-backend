const axios = require("axios");

exports.ForgotPassword = async (req, res) => {
  const EnrollmentNo = req.body.EnrollmentNo;
  const MobileNo = req.body.MobileNo;
  const enrollmentNo = req.body.enrollmentNo;

  console.log(`👤 requested user: ${enrollmentNo || EnrollmentNo}`);

  const options = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/forgetPassword",
    data: {
      EnrollmentNo: `${EnrollmentNo}`,
      MobileNo: `${MobileNo}`,
      forgetFor: "S",
    },
  };

  const options_2 = {
    method: "POST",
    url: "http://115.240.101.51:8282/CampusPortalSOA/forgetPassword",
    data: {
      enrollmentNo: `${enrollmentNo}`,
      forgetFor: "S",
    },
  };
  axios
    .request(enrollmentNo ? options_2 : options)
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

//  for change password route, check the login controller.
