const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();

app.use(express.static(path.join(__dirname, "..")));

app.use(cors());
app.use(volleyball);

app.use(express.json());
app.use("/api", require("./api"));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = app;