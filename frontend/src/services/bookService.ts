import axios from "axios";
import { Book } from "../models/Book";

const url = "http://localhost:3000/api/books";

const db_books = [
  {
    id: 1,
    title: "The Lord of the Rings",
    poster: "https://example.com/the-lord-of-the-rings.jpg",
    year: 1954,
    genre: "Fantasy",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien.",
    language: "English",
    number_of_pages: 1170,
    author_id: 1,
  },
  {
    id: 2,
    title: "Harry Potter and the Philosopher's Stone",
    poster: "https://example.com/the-lord-of-the-rings.jpg",
    year: 1997,
    genre: "Fantasy",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien.",
    language: "English",
    number_of_pages: 1170,
    author_id: 1,
  },
];

const getBooks = async (): Promise<Book[]> => {
  try {
    // const response = await axios.get<Book[]>(url);
    // if (!response) {
    //   return [];
    // }
    // return response.data;

    return db_books;
  } catch (error) {
    console.error("Error: ", error);
    return [];
  }
};

export { getBooks };
