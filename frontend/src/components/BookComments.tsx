import React, { useState } from "react";
import { Comment } from "../models/Comment";

interface CommentProps {
  comments: Comment[];
}
const BookComments: React.FC<CommentProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to submit new comment
    console.log("New comment:", newComment);
    // Clear input after submission
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.user}</strong>: {comment.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={handleChange}
          placeholder="Add a comment..."
          required
          rows={4}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default BookComments;
