const router = require("express").Router();

const userRouter = require("./user");
router.use("/user", userRouter);

router.get('/', (req, res) => {
	res.send('welcome /api!');
});

module.exports = router;

