const apiResponse = require("../utils/apiResponse.js");
const UtilizadoreModel = require("../data/models/Utilizadores");
const config = process.env.TOKEN_SECRET;
const bcrypt = require('bcryptjs');
const poll = require ("../data/context/database");
const {sign} = require('jsonwebtoken');

exports.getAll = async (req, res) => {
  const utilizadores = await UtilizadoreModel.findAll();

  const response = apiResponse.prepareResponse(
    utilizadores.map(({ dataValues: { password, ...e } }) => e) // se retirar password, o postman vai mostrar a password
  );
  return apiResponse.send(res, response);
};

exports.getById = async (req, res) => {
  const id = req.body.id_utilizador;

  const utilizador = await UtilizadoreModel.findByPk(id);


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
  const { id_utilizador, role} = req.body;

  const utilizador = await UtilizadoreModel.findByPk(id_utilizador);

  utilizador.role = role;

  await utilizador.save();

  const response = apiResponse.prepareResponse(utilizador);
  return apiResponse.send(res, response);
};

/*exports.updateById = async (req, res) => {
  const { id_utilizador, role } = req.body;

  // Busca o usuário pelo id
  let utilizador;
  try {
    utilizador = await UtilizadoreModel.findByPk(id_utilizador);
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Ocorreu um erro ao buscar o usuário.' });
  }

  // Verifica se o usuário foi encontrado
  if (!utilizador) {
    return res.status(404).json({ success: false, error: 'O usuário não foi encontrado.' });
  }

  // Atualiza o role do usuário
  utilizador.role = role;

  // Salva as alterações no banco de dados
  let updateRes;
  try {
    updateRes = await utilizador.save();
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Ocorreu um erro ao atualizar o usuário.' });
  }

  // Retorna o resultado da atualização
  return res.json({ success: true, data: utilizador });
};*/

exports.updateBYId = async (req, res) => {
  const { id_utilizador,role} = req.body;
  const utilizador = await UtilizadoreModel.findByPk(id_utilizador);

  utilizador.role = role;

  const updateRes = await utilizador.save();
  if (updateRes) {
    //cenario de sucesso
    return res.json({ success: true, data: utilizador });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.deleteById = async (req, res) => {
  const  id_utilizador  = req.params.id_utilizador;

  await UtilizadoreModel.destroy({where: { id_utilizador },});
  return res.json({ success: true });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
exports.login = async (req, res) => {
  const { email, password } = req.body;
  //username = xberion2
  //password = querty


  if (!password || password.length < 4) {
    return res.status(500).json({
      message: "Password não pode estar vazio",
    });
  }

  //SELECT * FROM users WHERE 'username'='xberion2' AND 'password'='querty'
  const listOfUsers = await UtilizadoreModel.findAll({
    where: {
      email: email,
      password: password,
    },
  });

  const user = listOfUsers[0];

  if (!user) {
    return res.status(500).json({
      message: "CREDENCIAIS ERRADAS",
    });
  }

  const token = createToken({ data: { id: user.id, email: user.email } });
  console.log(token);
  return res.status(200).json({
    message: "LOGIN FEITO",
    token,
  });
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await UtilizadoreModel.findOne({
    where:{
    email: email,
    }
  });

  bcrypt.hash(password, 10).then((hash) => {
 
  if(!user) res.json({error:"usuario nao existe"});

  bcrypt.compare(password, user.password).then(async(match) => {
    if (!match) res.json({ error: "password errada" });
  });

  const accessToken = sign(
    {id_utilizador: user.id_utilizador, email: user.email},
    'jwtkey'
  );
  res.json(accessToken );
 });


/*
  res.cookie("access_token", token, {
    httpOnly: true
  }).status(200).json(user) 
*/

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.register = async (req, res) => {
  const { nome, email, password } = req.body;
  /*
    const listOfUsers = await registModel.findAll({
      where: {
        nome_U: nome_U,
        pass: pass,
        email_U: email_U,
      },
    });

    if (listOfUsers ) {

      return res.status(500).json({
        message: "Nome ,pass ou email ja estao a ser utilizados",
      });
    }else{
      return res.status(404).json({
        message: "Nome ,pass ou email nao existem ",
      });
    }
    */

    // Simple validation
   if (!nome || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  bcrypt.hash(password, 10).then((hash) => {
    UtilizadoreModel.create({
      nome: nome,
      password: hash,
      email: email,
      
    });
    res.json("succeess")
  });
};
