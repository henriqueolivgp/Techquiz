const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/database");

const QuizModel = database.define(
  "Quiz" /*isto é o nome da tabela da base de dados*/,
  {
    id_quiz: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    titulo: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },

    descricao: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },

    nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

    tipoQuiz: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
  
    descricao: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
  }
);

module.exports = QuizModel;

