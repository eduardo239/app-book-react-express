const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

module.exports = mongoose.connection;
