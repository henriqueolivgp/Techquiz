const TipoUtilizadorRouter = require("express").Router();
const controller = require("../controller/TipoUtilizador");

TipoUtilizadorRouter.get("/", controller.getAll);
TipoUtilizadorRouter.get("/:id", controller.getById);
TipoUtilizadorRouter.post("/create", controller.create);
TipoUtilizadorRouter.put("/update", controller.update);
TipoUtilizadorRouter.delete("/delete", controller.delete);


module.exports = TipoUtilizadorRouter;