import React from "react";
import { data } from '../data'
import Book from "./UI/Book";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {
              data
              .filter((books) => books.rating === 5)
              .slice(0, 4)
              .map((book) => <Book book={book} key={book.id}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
