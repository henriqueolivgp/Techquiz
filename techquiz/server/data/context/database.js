const Sequelize = require("sequelize");

const pool = new Sequelize({
  host: "localhost",
  port: "3306",
  username: "root",
  password: "",
  database: "techquiz",
  dialect: "mysql",
});

module.exports = pool;
 