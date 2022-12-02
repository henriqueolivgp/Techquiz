const Sequelize = require("sequelize");
const database = require("../context/databasa");

const registModel = database.define("anotadores", {
  id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = registModel;


