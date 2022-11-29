const Sequelize = require("sequelize");
const database = require("../context/databasa");

const registModel = database.define("anotadores", {
  email_U: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nome_U: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  pass: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = registModel;


