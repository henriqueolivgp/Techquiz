const router = require("express").Router();

const UtilizadoreRouter = require("./Utilizadores");
router.use("/utilizadores", UtilizadoreRouter);

router.get('/', (req, res) => {
	res.send('welcome /api!');
});

module.exports = router;

