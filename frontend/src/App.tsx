import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import AuthorProfile from "./pages/AuthorProfile";
import SignIn from "./pages/SignIn";
import BookDetail from "./pages/BookDetail";
import { getBooks } from "./services/bookService";
import { Book } from "./models/Book";
import Register from "./pages/Register";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);
  console.log(books);

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/book/add">Add Book</Link>
        <Link to="/book">Book</Link>
        <Link to="/author">Profile</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/register">Register</Link>
        <Link to="/logout">Logout</Link>
      </nav>
      <h1>Book</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/add" element={<AddBook />} />
        <Route path="/book" element={<BookDetail />} />
        <Route
          path="/author"
          element={
            <AuthorProfile
              author={{
                firstName: "John",
                lastName: "Doe",
                biography: "Lorem ipsum",
              }}
            />
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
