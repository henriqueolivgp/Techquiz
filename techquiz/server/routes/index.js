const router = require("express").Router();
const registModel = require("./regist");

router.use("/regist", registModel);

module.exports = router;

