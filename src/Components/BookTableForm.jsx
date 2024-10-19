import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Searchbar from './Searchbar';
import HeroSection from './HeroSection';
import BookManager from './BookManager';
import Cards2 from './Cards2';

function BookTableForm() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://fakerapi.it/api/v2/books?_quantity=10")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        mapBooks(data.data);
      });
  }, []);

  const mapBooks = (data) => {
    const mappedBooks = data.map((t) => ({
      isbn: t.isbn,
      title: t.title,
      author: t.author,
      genre: t.genre,
      publisher: t.publisher,
      image: t.image,

    }));

    setBooks(mappedBooks);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) || book.isbn.includes(search) || 
    book.author.toLowerCase().includes(search.toLowerCase()) || book.genre.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <>
      <Searchbar onChange={handleSearch} className='flex flex-shrink-0'/>
      <HeroSection className='flex flex-shrink-0'/>
  
      <div className='container flex flex-row flex-shrink-0 flex-grow-0'>
        {
          filteredBooks.length === 0 && <h1 className='text-white flex align-text-center text-lg bold'> oops! No books found.</h1>
        }
        {filteredBooks.map((book, index) => (
          <Cards
            key={index}
            isbn={book.isbn}
            title={book.title}
            author={book.author}
            genre={book.genre}
            publisher={book.publisher}
            image={book.image}
          />
        ))}
      </div>
       {/* <Cards2/>  */}
    </>
  );
}

export default BookTableForm;
