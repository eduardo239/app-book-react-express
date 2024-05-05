const Author = require("../models/author.model");

const getAllAuthors = async () =>
  await Author.find().select("firstName lastName birthOfDate");
const getAuthorById = async (id) =>
  await Author.findById(id).select("firstName lastName birthOfDate");
const addAuthor = async (author) => await Author.create(author);
const deleteAuthorById = async (id) => await Author.findByIdAndDelete(id);
const updateAuthorById = async (id, author) =>
  await Author.findByIdAndUpdate(id, author);
const getAuthorByEmail = async (email) => await Author.findOne({ email });

module.exports = {
  getAllAuthors,
  getAuthorById,
  addAuthor,
  deleteAuthorById,
  updateAuthorById,
  getAuthorByEmail,
};
