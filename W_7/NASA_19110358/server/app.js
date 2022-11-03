const express = require("express");
const cors = require("cors");
const path = require("path");
const planetsRouter = require("./src/routers/planets/planets.router");
const launchesRouter = require("./src/routers/launches/launches.router");
const morgan = require('morgan')

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan('combined'))
app.use(express.json());
app.use(express.static(path.join(__dirname,'..', "public")));

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..","public", "index.html"));
});

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter)

module.exports = app;
