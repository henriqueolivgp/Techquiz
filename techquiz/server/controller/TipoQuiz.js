const apiResponse = require("../utils/apiResponse.js");
const TipoQuizModel = require("../data/models/TipoQuiz");

exports.getAll = async (req, res) => {
  const tiposquizs = await TipoQuizModel.findAll();

  const response = apiResponse.prepareResponse(
    tiposquizs.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const tipoquiz = await TipoQuizModel.findByPk(id);
  delete tipoquiz.password;

  const response = apiResponse.prepareResponse(tipoquiz);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id, nome, password, email } = req.body;

  const tipoquiz = await TipoQuizModel.create({ id, nome, password, email });

  const response = apiResponse.prepareResponse(tipoquiz);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id_tipoquiz, nome, descricao } = req.body;

  const tipoquiz = await TipoQuizModel.findByPk(id_tipoquiz);

  tipoquiz.nome = nome;
  tipoquiz.descricao = descricao;

  await tipoquiz.save();

  const response = apiResponse.prepareResponse(tipoquiz);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await TipoQuizModel.destroy({
    where: {
      id_tipoquiz: id,
    },
  });

  const response = apiResponse.prepareResponse(
    "tipoquiz with ID " + id + " deleted"
  );
  return apiResponse.send(res, response);
};
