const router = require("express").Router();

const UtilizadoreRouter = require("./Utilizadores");
router.use("/utilizadores", UtilizadoreRouter);

const TipoQuizRouter = require("./TipoQuiz");
router.use("/tipo-quiz", TipoQuizRouter);

router.get('/', (req, res) => {
	res.send('welcome /api!');
});

module.exports = router;

