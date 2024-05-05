const Book = require("../models/book.model");

const getAllBooks = async () => await Book.find();
const getBookById = async (id) =>
  await Book.findById(id).populate("author", "firstName lastName birthOfDate");
const addBook = async (book) => await Book.create(book);
const deleteBookById = async (id) => await Book.findByIdAndDelete(id);
const updateBookById = async (id, book) =>
  await Book.findByIdAndUpdate(id, book);

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
  updateBookById,
};
