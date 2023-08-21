const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../decorators");

const schemas = require("../../schemas/contacts");

const addValidate = validateBody(schemas.addSchema);

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", addValidate, ctrl.addContact);

router.delete("/:contactId", ctrl.removeContact);

router.put("/:contactId", addValidate, ctrl.updateContact);

module.exports = router;
