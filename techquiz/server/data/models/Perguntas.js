const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/database");

const PerguntasModel = database.define(
  "Perguntas" /*isto é o nome da tabela da base de dados*/,
  {
    id_perguntas: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      required: true,
      primaryKey: true,
    },

    perguntas: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    resposta1: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    resposta2: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    resposta3: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    resposta4: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    resposta5: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },
    
  }
  
);

module.exports = PerguntasModel;