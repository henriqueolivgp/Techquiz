const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/database");

const TipoUtilizadorModel = database.define(
  "TipoUtilizadore" /*isto é o nome da tabela da base de dados*/,
  {
    id_ipoutilizador: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      required: true,
      primaryKey: true,
    },

    categoria: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    
  }
  
);

module.exports = TipoUtilizadorModel;