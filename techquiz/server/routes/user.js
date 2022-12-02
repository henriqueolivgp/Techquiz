const userRouter = require("express").Router();
const controller = require("../controller/user");
//const verifyToken = require('../utils/jwt.js').verifyToken;

userRouter.get("/", controller.getAll);
userRouter.get("/:id", controller.getById);
userRouter.post("/create", controller.create);
userRouter.put("/update", controller.update);
userRouter.delete("/delete", controller.delete);

module.exports = userRouter;
