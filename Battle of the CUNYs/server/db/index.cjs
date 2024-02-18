'use strict';

const db = require('./db.cjs');
const Player = require('./models/Player.cjs');
const Mascot = require('./models/Mascot.cjs');

Mascot.hasMany(Player);
Player.belongsTo(Mascot);

module.exports = {
  db, Player, Mascot
}