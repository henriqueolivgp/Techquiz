const apiResponse = require("../utils/apiResponse.js");
const PerguntasModel = require("../data/models/Perguntas");

exports.getAll = async (req, res) => {
  const perguntas = await PerguntasModel.findAll();

  const response = apiResponse.prepareResponse(
    perguntas.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const Perguntas = await PerguntasModel.findByPk(id);
  delete Perguntas.password;

  const response = apiResponse.prepareResponse(tipoquiz);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id, pergunats, respostas } = req.body;

  const Perguntas = await PerguntasModel.create({ id, perguntas, rtespostas });

  const response = apiResponse.prepareResponse(Perguntas);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id_pergunats, perguntas, respostas } = req.body;

  const tipoquiz = await PerguntasModel.findByPk(id_pergunats);

  Perguntas.perguntas = perguntas;
  Perguntas.respostas = respostas;

  await tipoquiz.save();

  const response = apiResponse.prepareResponse(Perguntas);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await PerguntasModel.destroy({
    where: {
      id_pergunats: id,
    },
  });

  const response = apiResponse.prepareResponse(
    "Perguntas with ID " + id + " deleted"
  );
  return apiResponse.send(res, response);
};