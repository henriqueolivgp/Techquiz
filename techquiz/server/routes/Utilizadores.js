const UtilizadoreRouter = require("express").Router();
const controller = require("../controller/Utilizadores");
//const verifyToken = require('../utils/jwt.js').verifyToken;

UtilizadoreRouter.get("/", controller.getAll);
UtilizadoreRouter.get("/:id", controller.getById);
UtilizadoreRouter.post("/create", controller.create);
UtilizadoreRouter.put("/update", controller.update);
UtilizadoreRouter.delete("/delete", controller.delete);

module.exports = UtilizadoreRouter;