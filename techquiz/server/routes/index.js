const router = require("express").Router();

const UtilizadoreRouter = require("./Utilizadores");
router.use("/utilizadores", UtilizadoreRouter);

const QuizRouter = require("./Quizs");
router.use("/quiz", QuizRouter);

const PerguntasRouter = require("./Perguntas");
router.use("/perguntas", PerguntasRouter);

router.get('/', (req, res) => {
	res.send('welcome /api!');
});

module.exports = router;

