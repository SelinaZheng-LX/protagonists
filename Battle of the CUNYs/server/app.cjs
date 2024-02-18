const express = require('express');
const path = require('path');
const cors = require('cors');
const volleyball = require('volleyball');
const app = express();
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Player, Mascot } = require('./db/index.cjs');

const SALT = 5;

app.use(express.static(path.join(__dirname, "..")));

app.use(cors());
app.use(volleyball);

app.use(express.json());
router.post('/Authenticate', async (req, res) => {
  try {
    const existingPlayer = await Player.findOne({ where: { email: req.body.email } });
    if (existingPlayer) {
      const match = await bcrypt.compare(req.body.password, existingPlayer.password);
      if (match) {
        res.send(existingPlayer);
      }
      else {
        res.send('Invalid password')
      }
    }
    else {
      res.send('Account does not exist')
    }
  }
  catch (err) {
    res.send(err);
  }
})

router.post('/Signup', async (req, res) => {
  try {
    const existingPlayer = await Player.findOne({ where: { email: req.body.email } });
    if (!existingPlayer) {
      bcrypt.hash(req.body.password, SALT, function (err, hash) {
        req.body.password = hash;
      })
      const player = await Player.create(req.body);
      res.send(player);
    }
    else {
      res.send('Email is already in use')
    }
  }
  catch (err) {
    res.send(err);
  }
})

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = app;