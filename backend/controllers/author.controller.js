const bcrypt = require("bcrypt");
const authorService = require("../services/author.service");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAuthorById = async (req, res) => {
  // 6348acd2e1a47ca32e79f46f
  const { id } = req.params;
  try {
    const author = await authorService.getAuthorById(id);
    res.json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/*
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  birthOfDate: Date,
*/
const addAuthor = async (req, res) => {
  const { firstName, lastName, email, password, birthOfDate } = req.body;
  try {
    const author = await authorService.addAuthor({
      firstName,
      lastName,
      email,
      password,
      birthOfDate,
    });
    res.json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await authorService.deleteAuthorById(id);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAuthorById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, birthOfDate } = req.body;
  try {
    const book = await authorService.updateAuthorById(
      id,
      {
        firstName,
        lastName,
        email,
        password,
        birthOfDate,
      },
      { new: true }
    );
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signInAuthor = async (req, res) => {
  const { email, password } = req.body;
  try {
    const author = await authorService.getAuthorByEmail(email);
    if (!author) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, author.password);

    if (isPasswordMatch) {
      return res.status(200).json({ message: "Login successful", author });
    } else {
      // If passwords don't match, respond with error
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  addAuthor,
  deleteAuthorById,
  updateAuthorById,
  signInAuthor,
};
