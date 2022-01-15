const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.static('views'));


app.get("/", (req, res) => {
  res.render("RGB");
});

app.get("/how-to-play", (req, res) => {
    res.render("ins");
});

app.listen(process.env.PORT, () => {
  console.log("server started on port 3000");
});