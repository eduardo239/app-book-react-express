const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  birthOfDate: Date,
});

authorSchema.pre("save", async function (next) {
  const author = this;
  if (!author.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(author.password, salt);
    author.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Author", authorSchema);
