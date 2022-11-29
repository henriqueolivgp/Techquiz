const Sequelize = require("sequelize");

const pool = new Sequelize({
  host: "localhost",
  port: "3306",
  user: "jose",
  password: "8854",
  database: "PSI_final",
  dialect: "mysql",
});

module.exports = pool;
