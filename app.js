const express = require("express");
const path = require("path");
const data = require("./MOCK_DATA.json");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set(express.static("public"));

app.use("/random-name", (req, res) => {
  const { first_name } = data[Math.round(Math.random() * data.length)];
  const { last_name } = data[Math.round(Math.random() * data.length)];
  return res.json({ first_name, last_name });
});

app.listen(3344, () => console.log("App listenin.."));
