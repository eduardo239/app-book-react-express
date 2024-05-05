const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.delete("/delete-all-authors", (req, res, next) => {
  return adminController.deleteAllAuthors(req, res);
});

router.delete("/delete-all-books", (req, res, next) => {
  return adminController.deleteAllBooks(req, res);
});

module.exports = router;
