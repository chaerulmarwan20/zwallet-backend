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
  .post("/pin/:email", usersController.createPin)
  .post("/auth/login", usersController.login)
  .post("/auth/forgot-password", usersController.forgotPassword)
  .put("/auth/reset-password", usersController.resetPassword)
  .put(
    "/change-password/:id",
    auth.verification(),
    usersController.updatePassword
  )
  .post("/pin/check/:id", auth.verification(), usersController.checkPin)
  .put("/pin/:id", auth.verification(), usersController.updatePin)
  .post(
    "/phoneNumber/:id",
    auth.verification(),
    usersController.createPhoneNumber
  )
  .delete(
    "/phoneNumber/:id",
    auth.verification(),
    usersController.deletePhoneNumber
  )
  .put(
    "/:id",
    auth.verification(),
    multer.uploadImage.single("image"),
    usersController.update
  )
  .delete("/:id", auth.verification(), usersController.delete);

module.exports = router;
