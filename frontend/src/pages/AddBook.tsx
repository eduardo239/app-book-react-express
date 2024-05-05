import React, { ChangeEvent, useState } from "react";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    authorId: "",
    year: "",
    genre: "",
    description: "",
    language: "",
    numberOfPages: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add book submission logic here
    console.log("Book data:", bookData);
  };

  return (
    <div className="form-container">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={bookData.description}
            onChange={handleChange}
            required
            rows={6}
          />
        </div>

        <div className="form-group">
          <label>Author ID:</label>
          <input
            type="text"
            name="authorId"
            value={bookData.authorId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={bookData.year}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Genre:</label>
          <select
            name="genre"
            value={bookData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="fantasy">Fantasy</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Language:</label>
          <select
            name="language"
            value={bookData.language}
            onChange={handleChange}
            required
          >
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label>Number of Pages:</label>
          <input
            type="text"
            name="numberOfPages"
            value={bookData.numberOfPages}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
