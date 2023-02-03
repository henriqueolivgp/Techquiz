const PerguntasRouter = require("express").Router();
const controller = require("../controller/Perguntas");

PerguntasRouter.get("/", controller.getAll);
PerguntasRouter.get("/ById", controller.getById);
PerguntasRouter.post("/create", controller.create);
PerguntasRouter.put("/update", controller.update);
PerguntasRouter.delete("/delete", controller.delete);


module.exports = PerguntasRouter;