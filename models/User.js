const { Schema, model } = require("mongoose");
const { handleValidateError, handleValidateUpdate } = require("./hooks");

const { emailRegexp } = require("../constants/user-constants");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
    avatarURL: String,
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleValidateError);

userSchema.pre("findOneAndUpdate", handleValidateUpdate);

userSchema.post("findOneAndUpdate", handleValidateError);

const User = model("user", userSchema);

module.exports = User;
