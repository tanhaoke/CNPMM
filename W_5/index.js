require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const { engine } = require("express-handlebars");
const hbs = require("hbs");
const router = require("./router/router.js");

const app = express();
const port = 5000;

// config
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("views/template"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.use("/", router);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
