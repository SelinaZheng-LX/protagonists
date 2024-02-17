const db = require("db");
const { STRING, INTEGER } = require("sequelize");

const Mascot = db.define("Mascot", {
  name: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  school: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  exp: {
    type: INTEGER,
    allowEmpty: false,
    allowNull: false,
    defaultValue: 0
  },
  image: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  }
})

module.exports = Mascot;