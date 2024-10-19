import React, { useState } from 'react'
import Cards2 from './Cards2'
import AddBookForm from './AddBookForm'
function BookManager() {
    const[books,setbooks]=useState([]);
    const handleBooks=(bookdata)=>
    {
        setbooks((prevdata)=>[...prevdata,bookdata]);
    }

  return (
    
    <div>
        <AddBookForm onSubmit={handleBooks}/>
        <div className='book-list flexwrap justify-center mt-10'>
            {books.map((book,i)=>(
                <Cards2
                 key={i}
                title={book.title}
                author={book.author}
                publisher={book.publisher}
                genre={book.genre}
                isbn={book.isbn}
                />
            ))}
        </div>
    </div>
  );
}

export default BookManager