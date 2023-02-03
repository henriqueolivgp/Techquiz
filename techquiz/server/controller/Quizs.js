const apiResponse = require("../utils/apiResponse.js");
const QuizsModel = require("../data/models/Quizs");

exports.getAll = async (req, res) => {
  const quizs = await QuizsModel.findAll();

  const response = apiResponse.prepareResponse(
    quizs.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const quiz = await QuizsModel.findByPk(id);
  delete quiz.password;

  const response = apiResponse.prepareResponse(quiz);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id_quiz, titulo, descricao} = req.body;

  const quiz = await QuizsModel.create({ id_quiz, titulo, descricao});

  const response = apiResponse.prepareResponse(quiz);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id_quiz, nome, descricao } = req.body;

  const quiz = await QuizsModel.findByPk(id_quiz);

  quiz.nome = nome;
  quiz.descricao = descricao;

  await quiz.save();

  const response = apiResponse.prepareResponse(quiz);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await QuizsModel.destroy({
    where: {
        id_quiz: id,
    },
  });

  const response = apiResponse.prepareResponse(
    "tipoquiz with ID " + id + " deleted"
  );
  return apiResponse.send(res, response);
};
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

