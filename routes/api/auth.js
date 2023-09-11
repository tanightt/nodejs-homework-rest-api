const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../decorators");

const { authenticate, upload } = require("../../middlewares");

const schemas = require("../../schemas/users");

const router = express.Router();

const userSignUpMiddleware = validateBody(schemas.userSignUpSchema);
const userSignInMiddleware = validateBody(schemas.userSignInSchema);

router.post("/register", userSignUpMiddleware, ctrl.signUp);

router.post("/login", userSignInMiddleware, ctrl.signIn);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCurrent);

router.patch("/", authenticate, ctrl.updateSubscription);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
