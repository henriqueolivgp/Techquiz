const Sequelize = require("sequelize");
const database = require("../context/databasa");

const userModel = database.define("anotadores", {
  id_utilizador: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = userModel;


