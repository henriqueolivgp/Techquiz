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

    pergunta1: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    pergunta2: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    pergunta3: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    pergunta4: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    p1_r1: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    p1_r2: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    p1_r3: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    p1_r4: {
      type: Sequelize.STRING(250),
      allowNull: false,
      required: true,
    },

    id_quiz: {
      type: Sequelize.INTEGER,
      required: true,
      foreignKey: 'id_quiz',
      as: 'Quiz'
    }
    
  }
  
);

module.exports = PerguntasModel;