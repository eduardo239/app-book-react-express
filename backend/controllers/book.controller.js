const bookService = require("../services/bookService");
const authorService = require("../services/author.service");

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    console.log(error);
  }
};

const getBookById = async (req, res) => {
  // 6348acd2e1a47ca32e79f46f
  const { id } = req.params;
  try {
    const book = await bookService.getBookById(id);
    res.json(book);
  } catch (error) {
    console.log(error);
  }
};

const addBook = async (req, res) => {
  const {
    title,
    year,
    genre,
    description,
    language,
    number_of_pages,
    poster,
    author,
  } = req.body;
  try {
    console.log(author);
    const _author = await authorService.getAuthorById(author);

    const book = await bookService.addBook({
      title,
      year,
      genre,
      description,
      language,
      number_of_pages,
      poster,
      author: _author._id,
    });
    res.json(book);
  } catch (error) {
    console.log(error);
  }
};

const deleteBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await bookService.deleteBookById(id);
    res.json(book);
  } catch (error) {
    console.log(error);
  }
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    year,
    genre,
    description,
    language,
    number_of_pages,
    poster,
    author,
  } = req.body;
  try {
    const book = await bookService.updateBookById(
      id,
      {
        title,
        year,
        genre,
        description,
        language,
        number_of_pages,
        poster,
        author,
      },
      { new: true }
    );
    res.json(book);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  deleteBookById,
  updateBookById,
};
