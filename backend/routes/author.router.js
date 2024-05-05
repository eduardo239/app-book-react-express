const express = require("express");
const router = express.Router();
const authorController = require("../controllers/author.controller");

router.get("/", (req, res, next) => {
  return authorController.getAllAuthors(req, res);
});

// 6636bf9680ebe4f1763d68af
router.get("/:id", (req, res, next) => {
  return authorController.getAuthorById(req, res);
});

router.post("/", (req, res, next) => {
  return authorController.addAuthor(req, res);
});

router.delete("/:id", (req, res, next) => {
  return authorController.deleteAuthorById(req, res);
});

router.put("/:id", (req, res, next) => {
  return authorController.updateAuthorById(req, res);
});

router.post("/sign-in", (req, res, next) => {
  return authorController.signInAuthor(req, res);
});

module.exports = router;
