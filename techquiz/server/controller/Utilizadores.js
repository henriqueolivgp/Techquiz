const apiResponse = require("../utils/apiResponse.js");
const UtilizadoreModel = require("../data/models/Utilizadores");
const createToken = require("../utils/jwt.js").createToken;

exports.getAll = async (req, res) => {
  const utilizadores = await UtilizadoreModel.findAll();

  const response = apiResponse.prepareResponse(
    utilizadores.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const utilizador = await UtilizadoreModel.findByPk(id);
  delete utilizador.password;

  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id, nome, password, email } = req.body;

  const utilizador = await UtilizadoreModel.create({ id, nome, password, email });

  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id_utilizador, nome, password, email } = req.body;

  const utilizador = await UtilizadoreModel.findByPk(id_utilizador);

  utilizador.nome = nome;
  utilizador.password = password;
  utilizador.email = email;

  await utilizador.save();

  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await UtilizadoreModel.destroy({
    where: {
      id_utilizador: id_utilizador,
    },
  });

  const response = apiResponse.prepareResponse(
    "utilizador with ID " + id + " deleted"
  );
  return apiResponse.send(res, response);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.login = async (req, res) => {
  const { nome, password } = req.body;
  //username = xberion2
  //password = querty

  if (!nome || nome.length < 4) {
    return res.status(500).json({
      message: "Nome não pode estar vazio",
    });
  }

  if (!password || password.length < 4) {
    return res.status(500).json({
      message: "Password não pode estar vazio",
    });
  }

  //SELECT * FROM users WHERE 'username'='xberion2' AND 'password'='querty'
  const listOfutilizadores = await UtilizadoreModel.findAll({
    where: {
      nome: nome,
      password: password,
    },
  });

  const utilizador = listOfutilizadores[0];

  if (!utilizador) {
    return res.status(500).json({
      message: "CREDENCIAIS ERRADAS",
    });
  }

  const token = createToken({ data: { id_utilizador: utilizador.id_utilizador, nome: utilizador.nome } });
  console.log(token);
  return res.status(200).json({
    message: "LOGIN FEITO",
    token,
  });
};
