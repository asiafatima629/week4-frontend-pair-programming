import React, { useState } from "react";
import "./App.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");

  // Handle input change for title
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  // Handle input change for author
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  // Handle input change for rating
  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  // Add a new book to the list
  function addBook() {
    if (title.trim() !== "" && author.trim() !== "" && rating !== "") {
      setBooks((b) => [...b, { title, author, rating: parseInt(rating) }]);
      setTitle("");
      setAuthor("");
      setRating(""); // Clear the input fields
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  // Helper function to generate star rating display
  function renderStars(rating) {
    return "★".repeat(rating);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>
      
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={handleTitleChange}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={handleAuthorChange}
          className="input-field"
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)..."
          value={rating}
          onChange={handleRatingChange}
          className="rating-input"
        />
        <button onClick={addBook} className="add-button">
          Add Book
        </button>
      </div>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>
        {books.length === 0 ? (
          <p className="empty-message">No books yet. Add one to get started!</p>
        ) : (
          <ol className="books-list">
            {books.map((book, index) => (
              <li key={index} className="book-item">
                <div className="book-info">
                  <span className="book-title">{book.title}</span>
                  <span className="book-author">by {book.author}</span>
                  <div className="rating-container">
                    <span className="rating-label">Rating:</span>
                    <span className="rating-stars">
                      <span className="star">{renderStars(book.rating)}</span>
                      <span className="rating-value">{book.rating}/5</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteBook(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;