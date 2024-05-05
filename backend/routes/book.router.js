const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

router.get("/", (req, res, next) => {
  return bookController.getAllBooks(req, res);
});

// 6636bf9680ebe4f1763d68af
router.get("/:id", (req, res, next) => {
  return bookController.getBookById(req, res);
});

router.post("/", (req, res, next) => {
  return bookController.addBook(req, res);
});

router.delete("/:id", (req, res, next) => {
  return bookController.deleteBookById(req, res);
});

router.put("/:id", (req, res, next) => {
  return bookController.updateBookById(req, res);
});

module.exports = router;
