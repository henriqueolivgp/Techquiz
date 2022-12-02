const apiResponse = require("../utils/apiResponse.js");
const userModel = require("../data/models/user");
const createToken = require("../utils/jwt.js").createToken;

exports.getAll = async (req, res) => {
  const users = await userModel.findAll();

  const response = apiResponse.prepareResponse(
    users.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.params.idbatata;

  const user = await userModel.findByPk(id);
  delete user.password;

  const response = apiResponse.prepareResponse(user);
  return apiResponse.send(res, response);
};

exports.create = async (req, res) => {
  const { id, nome, password, email } = req.body;

  const user = await userModel.create({ id, nome, password, email });

  const response = apiResponse.prepareResponse(user);
  return apiResponse.send(res, response);
};

exports.update = async (req, res) => {
  const { id, nome, password, email } = req.body;

  const user = await userModel.findByPk(id);

  user.nome = nome;
  user.password = password;
  user.email = email;

  await user.save();

  const response = apiResponse.prepareResponse(user);
  return apiResponse.send(res, response);
};

exports.delete = async (req, res) => {
  const id = req.body.id;

  await userModel.destroy({
    where: {
      id: id,
    },
  });

  const response = apiResponse.prepareResponse(
    "User with ID " + id + " deleted"
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
      message: "Username não pode estar vazio",
    });
  }

  if (!password || password.length < 4) {
    return res.status(500).json({
      message: "Password não pode estar vazio",
    });
  }

  //SELECT * FROM users WHERE 'username'='xberion2' AND 'password'='querty'
  const listOfUsers = await userModel.findAll({
    where: {
      nome: nome,
      password: password,
    },
  });

  const user = listOfUsers[0];

  if (!user) {
    return res.status(500).json({
      message: "CREDENCIAIS ERRADAS",
    });
  }

  const token = createToken({ data: { id: user.id, username: user.username } });
  console.log(token);
  return res.status(200).json({
    message: "LOGIN FEITO",
    token,
  });
};
