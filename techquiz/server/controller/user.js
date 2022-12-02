const userModel = require("../data/models/user");

exports.getAll = async (req, res) => {
  const anotadores = await userModel.findall();
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const anotadores = await userModel.findByPk(id);

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.create = async (req, res) => {
  const { nome, email, password } = req.body;

  const anotadores = await userModel.create({  nome, email, password});

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
  const {  nome, email, password } = req.body;
  const anotadores = await userModel.findByPk(email_U);

  anotadores.nome = nome;
  anotadores.password = password;
  anotadores.email = email; 

  const updateRes = await anotadores.save();
  if (updateRes) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.delete = async (req, res) => {
  const {  nome, email, password } = req.body;

  await userModel.destroy({
    where: { id },
  });
  return res.json({ success: true });
};
