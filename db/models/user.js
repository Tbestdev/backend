const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    message: { required: true, type: String },
    email: { required: true, type: String },
    firstName: { required: true, type: String },
    lastName: { required: true, type: String }
  },
  { versionKey: false }
);

module.exports = mongoose.model("User", UserSchema);
