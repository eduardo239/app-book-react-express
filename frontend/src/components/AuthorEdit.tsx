import React, { useState } from "react";
import { Author } from "../models/Author";

interface Props {
  author: Author;
  onSave: (updatedAuthor: Author) => void;
}

const AuthorEdit: React.FC<Props> = ({ author, onSave }) => {
  const [updatedAuthor, setUpdatedAuthor] = useState(author);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatedAuthor({ ...updatedAuthor, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(updatedAuthor);
  };

  return (
    <div className="edit-author-form">
      <h2>Edit Author Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={updatedAuthor.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={updatedAuthor.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Biography:</label>
          <textarea
            name="biography"
            value={updatedAuthor.biography}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AuthorEdit;
