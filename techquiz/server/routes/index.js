const router = require("express").Router();
const registModel = require("./user");

router.use("/register", registModel);

module.exports = router;

