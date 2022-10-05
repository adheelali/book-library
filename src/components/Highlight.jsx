import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HighlightUI from './UI/highlightUI';
import React from 'react';

const Highlight = () => {
  return (
    <section id='highlights'>
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <HighlightUI  
              icon={<FontAwesomeIcon icon='bolt' />}
              subtitle='Easy and quick'
              para='Get access to the book you purchased online instantly'
              />
            <HighlightUI  
              icon={<FontAwesomeIcon icon='book-open' />}
              subtitle='10,000+ books'
              para='Library has books in all your favorite catagories'
              />
            <HighlightUI  
              icon={<FontAwesomeIcon icon='tags' />}
              subtitle='Affordable'
              para='Get your hands on popular books for as little as $10'
              />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlight;
