const { BASE_PATH } = require("./app/exports/basepath");
require("dotenv").config();
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET",
  });
  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendStatus(200);
});

// routes
require("./app/routes/login.routes")(app);
require("./app/routes/password.routes")(app);
require("./app/routes/attendance.routes")(app);
require("./app/routes/result.routes")(app);
require("./app/routes/profile.routes")(app);
require("./app/routes/test.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🌍 Server is running on port ${PORT}.`);
});
