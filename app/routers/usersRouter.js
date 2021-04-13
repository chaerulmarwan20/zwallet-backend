const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router
  .get("/", auth.verification(), usersController.findAll)
  .get("/find-one", auth.verification(), usersController.findOne)
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .get("/auth/verify", usersController.verify)
  .put("/pin/:id", usersController.createPin)
  .post("/auth/login", usersController.login)
  .post("/auth/forgot-password", usersController.forgotPassword)
  .put("/auth/reset-password", usersController.resetPassword)
  .put("/:id", multer.uploadImage.single("image"), usersController.update)
  .delete("/:id", auth.verification(), usersController.delete);

module.exports = router;
