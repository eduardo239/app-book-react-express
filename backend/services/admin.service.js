const Author = require("../models/author.model");
const Book = require("../models/book.model");

const deleteAllAuthors = async () => await Author.deleteMany({});
const deleteAllBooks = async () => await Book.deleteMany({});

module.exports = {
  deleteAllAuthors,
  deleteAllBooks,
};
