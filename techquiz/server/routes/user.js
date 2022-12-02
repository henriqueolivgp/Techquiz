const userModel = require("express").Router();
const controller = require("../controller/user");

userModel.get("/", controller.getAll);
userModel.get("/:id", controller.getById);
userModel.post("/create", controller.create);
userModel.put("/update", controller.update);
userModel.delete("/delete", controller.delete);

module.exports = userModel;
