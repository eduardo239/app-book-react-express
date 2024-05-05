import React from "react";
import { Author } from "../models/Author";
import AuthorEdit from "../components/AuthorEdit";

interface Props {
  author: Author;
}

const AuthorProfile: React.FC<Props> = ({ author }) => {
  return (
    <div>
      <div className="author-profile">
        <h2>Author Profile</h2>
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {author.firstName} {author.lastName}
          </p>
          <p>
            <strong>Biography:</strong> {author.biography}
          </p>
        </div>
      </div>

      <AuthorEdit
        author={author}
        onSave={() => console.log("update profile")}
      />
    </div>
  );
};

export default AuthorProfile;
