const axios = require("axios");
const { BASE_PATH } = require("../exports/basepath");
exports.ForgotPassword = async (req, res) => {
  const EnrollmentNo = req.body.EnrollmentNo;
  const MobileNo = req.body.MobileNo;
  const enrollmentNo = req.body.enrollmentNo;
  const forgetFor = req.body.forgetFor;
  const BASE_URL = `${BASE_PATH}/CampusPortalSOA/forgetPassword`;

  console.log(`👤 requested user: ${enrollmentNo || EnrollmentNo}`);

  const options = {
    method: "POST",
    url: BASE_URL,
    data: {
      EnrollmentNo: `${EnrollmentNo}`,
      MobileNo: `${MobileNo}`,
      forgetFor: `${forgetFor}`, // S
    },
  };

  const options_2 = {
    method: "POST",
    url: BASE_URL,
    data: {
      enrollmentNo: `${enrollmentNo}`,
      forgetFor: `${forgetFor}`,
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

/*
- last checked: 22-05-2023
- looks fine
- checked by Subhranshu Choudhury
 */
