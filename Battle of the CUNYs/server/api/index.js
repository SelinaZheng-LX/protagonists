'use strict';
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Player, Mascot } = require('../db');

const SALT = 5;

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

module.exports = router;