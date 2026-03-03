const express = require("express");

const app = express();

app.set("view engine", "ejs");

const PORT = 5001;
function checkWorkingHours(req, res, next) {
  const currentTime = new Date();
  const currentDay = currentTime.getDay();
  const currentHour = currentTime.getHours();

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next();
  } else {
    res
      .status(403)
      .send(
        "Sorry, the site is only available during working hours (Mon-Fri, 9 AM to 5 PM).",
      );
  }
}

app.use(checkWorkingHours);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
});
