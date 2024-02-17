'use strict';

const db = require('db');
const Player = require('./models/Player.js');
const Mascot = require('./models/Mascot.js');

Mascot.hasMany(Player);
Player.belongsTo(Mascot);

module.exports = {
  db, Player, Mascot
}