const router = require("express").Router();

const UtilizadoreRouter = require("./Utilizadores");
router.use("/utilizadores", UtilizadoreRouter);

const TipoQuizRouter = require("./TipoQuiz");
router.use("/tipo-quiz", TipoQuizRouter);

const QuizRouter = require("./Quizs");
router.use("/quiz", QuizRouter);

const TipoUtilizadorRouter = require("./TipoUtilizador");
router.use("/tipo-utilizador", TipoUtilizadorRouter);

router.get('/', (req, res) => {
	res.send('welcome /api!');
});

module.exports = router;

