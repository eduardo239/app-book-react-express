import React from "react";
import poster from "../assets/poster.jpg";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <Link to="/book?id=1">
      <div className="grid-item">
        <div className="book-card">
          <img src={poster} alt="xxx" />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
