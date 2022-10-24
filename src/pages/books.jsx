import React, { useState, useEffect } from "react";
import Book from "../components/UI/Book";

const Books = ({ books: initialBooks }) => {
  const [book, setBook] = useState(initialBooks);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  function filterBooks(filter) {
    if (filter === "LOW_TO_HIGH") {
      setBook(
        book
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    }
    if (filter === "HIGH_TO_LOW") {
      setBook(
        book
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    }
    if (filter === "RATING") {
      setBook(book.slice().sort((a, b) => b.rating - a.rating));
    }
  }


  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="book__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {book.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
