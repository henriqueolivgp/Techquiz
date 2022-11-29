const registModel = require("../data/models/regist");

exports.getAll = async (req, res) => {
  const anotadores = await registModel.findall();
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  const anotadores = await registModel.findByPk(id);

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.create = async (req, res) => {
  const { email_U, nome_U, pass } = req.body;

  const anotadores = await registModel.create({ email_U, nome_U, pass });

  if (anotadores) {
    //cenario de sucesso
    return res.json({ success: true, data: anotadores });
  } else {
    //cenario de erro
    return res.json({ success: false });
  }
};

exports.update = async (req, res) => {
  const { email_U, nome_U, pass } = req.body;
  const anotadores = await registModel.findByPk(email_U);

  anotadores.nome_U = nome_U;
  anotadores.pass = pass;

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
  const { email_U } = req.body;

  await registModel.destroy({
    where: { id },
  });
  return res.json({ success: true });
};
