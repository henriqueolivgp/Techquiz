const Sequelize = require("sequelize");

const pool = new Sequelize({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "techquiz",
  dialect: "mysql",
});

module.exports = pool;
