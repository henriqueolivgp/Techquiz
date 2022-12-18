const UtilizadoreModel = require ("../data/models/Utilizadores");

const loginService = (email) => 
UtilizadoreModel.findOne({email: email}).select("+password");

module.exports = loginService;