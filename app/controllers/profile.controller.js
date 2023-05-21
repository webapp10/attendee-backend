const axios = require("axios");
const { BASE_PATH } = require("../exports/basepath");
exports.UserInfo = (req, res) => {
  const Cookie = req.headers["cookie"];
  const options = {
    method: "POST",
    url: `${BASE_PATH}/CampusPortalSOA/studentinfo`,
    headers: {
      Cookie: `${Cookie}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response?.data?.detail?.[0]?.name) {
        console.log(
          `👤 requested user: ${response?.data?.detail?.[0]?.name} - ${response?.data?.detail?.[0]?.enrollmentno}`
        );
      }
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
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
