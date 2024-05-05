import React from "react";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div>
      <div className="grid-container">
        {/* Each div represents an item */}
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>

      <button>Learn More</button>
    </div>
  );
};

export default Home;
