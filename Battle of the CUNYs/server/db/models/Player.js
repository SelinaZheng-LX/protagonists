const db = require("db");
const { STRING, INTEGER } = require("sequelize");

const Player = db.define("Player", {
  email: {
    type: STRING,
    allowEmpty: false,
    allowNull: false,
    validate: {
      verifyEmail(email) {
        if (!email.includes("@") || !email.includes("cuny.edu")) {
          throw Error("invalid email address");
        }
      }
    }
  },
  firstName: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  school: {
    type: STRING,
    allowEmpty: false,
    allowNull: false
  },
  fedAmount: {
    type: INTEGER,
    allowEmpty: false,
    allowNull: false,
    defaultValue: 0
  },
  foodAmount: {
    type: INTEGER,
    allowEmpty: false,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = Player;