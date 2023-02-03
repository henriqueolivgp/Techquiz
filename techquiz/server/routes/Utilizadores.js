const UtilizadoreRouter = require("express").Router();
const controller = require("../controller/Utilizadores");
const verifyToken = require('../utils/jwt.js').verifyToken;

UtilizadoreRouter.get("/", controller.getAll);
UtilizadoreRouter.get("/:id", controller.getById);
UtilizadoreRouter.post("/create", controller.create);
UtilizadoreRouter.put("/update", controller.updateBYId);
UtilizadoreRouter.delete("/delete/:id_utilizador", controller.deleteById);

UtilizadoreRouter.post("/register",controller.register);

UtilizadoreRouter.post("/login", controller.login);


module.exports = UtilizadoreRouter;