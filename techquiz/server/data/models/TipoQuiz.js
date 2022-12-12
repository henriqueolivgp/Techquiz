const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/database");

const TipoQuizModel = database.define(
  "TipoQuiz" /*isto é o nome da tabela da base de dados*/,
  {
    id_tipoquiz: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },

    descricao: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
  }
);

module.exports = TipoQuizModel;

