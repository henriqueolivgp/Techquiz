const Sequelize = require("sequelize");
const database = require("../context/database");

const userModel = database.define("utilizador", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = userModel;


