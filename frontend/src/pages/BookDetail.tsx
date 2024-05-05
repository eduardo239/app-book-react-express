import React from "react";
import { Book } from "../models/Book";
import poster from "../assets/poster.jpg";
import BookComments from "../components/BookComments";
import { useLocation } from "react-router-dom";

const BookDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [book, setBook] = React.useState<Book>({
    id: id?.toString() ? parseInt(id) : 1,
    poster: poster,
    title: "A Book",
    year: 2021,
    genre: "Thriller",
    description:
      "A Resenha é um texto que pode ser curto ou longo com a finalidade de fornecer a opinião do leitor sobre um livro, ou seja, a pessoa que escreve a resenha expõe suas impressões pessoais sobre o livro, de acordo com suas vivências e seus filtros mentais pessoais. Não há certo ou errado, há somente a opinião da pessoa, seja ela negativa ou positiva.",
    language: "English",
    number_of_pages: 100,
    author_id: 1,
  });
  return (
    <div>
      <div className="book-detail">
        <div className="poster">
          <img src={book.poster} alt={book.title} />
        </div>
        <div className="details">
          <h2>
            {book.title} - ({book.year})
          </h2>
          <p className="description">{book.description}</p>
          <div className="additional-info">
            <p>
              <strong>Author:</strong> {book.author_id}
            </p>
            <p>
              <strong>Genre:</strong> {book.genre}
            </p>
            <p>
              <strong>Language:</strong> {book.language}
            </p>
            <p>
              <strong>Pages:</strong> {book.number_of_pages}
            </p>
            {/* Add more details as needed */}
            <p>
              <small>ID # {id}</small>
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="comments">
        <BookComments
          comments={[
            {
              id: 1,
              user: "John Doe",
              content: "This is a great book!",
            },
            {
              id: 2,
              user: "Jane Doe",
              content: "I really enjoyed reading this book!",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default BookDetail;
