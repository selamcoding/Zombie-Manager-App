const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./db");
const router = require("./route/router");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectDB();

app.use(router);

app.use("*", function (req, res, next) {
  throw new Error("not found");
});

app.use(function (error, req, res, next) {
  res.status(404);
  res.json({ message: error.message });
});

app.listen(3200, () => console.log("listening to port 3200"));
