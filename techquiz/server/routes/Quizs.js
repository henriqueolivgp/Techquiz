const QuizRouter = require("express").Router();
const controller = require("../controller/Quizs");

QuizRouter.get("/", controller.getAll);
QuizRouter.get("/id/:id_quiz", controller.getById);
QuizRouter.post("/create", controller.create);
QuizRouter.put("/update", controller.update);
QuizRouter.delete("/delete", controller.delete);


module.exports = QuizRouter;