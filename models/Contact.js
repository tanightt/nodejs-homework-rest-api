const { Schema, model } = require("mongoose");
const { handleValidateError, handleValidateUpdate } = require("./hooks");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleValidateError);

contactSchema.pre("findOneAndUpdate", handleValidateUpdate);

contactSchema.post("findOneAndUpdate", handleValidateError);

const Contact = model("contacts", contactSchema);

module.exports = Contact;
