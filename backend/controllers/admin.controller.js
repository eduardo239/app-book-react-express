const adminService = require("../services/admin.service");

const deleteAllAuthors = async (req, res) => {
  try {
    const authors = await adminService.deleteAllAuthors();
    res.json(authors);
  } catch (error) {
    console.log(error);
  }
};

const deleteAllBooks = async (req, res) => {
  try {
    const books = await adminService.deleteAllBooks();
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteAllAuthors,
  deleteAllBooks,
};
