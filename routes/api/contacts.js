const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../decorators");

const { isValidId, isBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const addValidate = validateBody(schemas.addSchema);

const addFavoriteSchema = validateBody(schemas.addFavoriteSchema);

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", addValidate, ctrl.addContact);

router.delete("/:contactId", isValidId, ctrl.removeContact);

router.put("/:contactId", isValidId, addValidate, ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isBody,
  addFavoriteSchema,
  ctrl.updateStatusContact
);

module.exports = router;
