const TipoQuizRouter = require("express").Router();
const controller = require("../controller/TipoQuiz");

TipoQuizRouter.get("/", controller.getAll);
TipoQuizRouter.get("/:id", controller.getById);
TipoQuizRouter.post("/create", controller.create);
TipoQuizRouter.put("/update", controller.update);
TipoQuizRouter.delete("/delete", controller.delete);


module.exports = TipoQuizRouter;