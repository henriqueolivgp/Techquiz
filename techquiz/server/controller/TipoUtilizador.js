const apiResponse = require("../utils/apiResponse.js");
const TipoUtilizadorModel = require("../data/models/TipoQuiz");

exports.getAll = async (req, res) => {
  const tiposutilizador = await TipoUtilizadorModel.findAll();

  const response = apiResponse.prepareResponse(
    tiposutilizador.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const Tipoutilizador = await TipoUtilizadorModel.findByPk(id);
  delete Tipoutilizador.password;

  const response = apiResponse.prepareResponse(tipoquiz);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id, nome, password, email } = req.body;

  const Tipoutilizador = await TipoUtilizadorModel.create({ id, nome, password, email });

  const response = apiResponse.prepareResponse(Tipoutilizador);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id_tipoutilizador, nome, descricao } = req.body;

  const tipoquiz = await TipoUtilizadorModel.findByPk(id_tipoutilizador);

  Tipoutilizador.nome = nome;
  Tipoutilizador.descricao = descricao;

  await tipoquiz.save();

  const response = apiResponse.prepareResponse(Tipoutilizador);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await TipoUtilizadorModel.destroy({
    where: {
        id_tipoutilizador: id,
    },
  });

  const response = apiResponse.prepareResponse(
    "Tipoutilizador with ID " + id + " deleted"
  );
  return apiResponse.send(res, response);
};