import React from 'react';

function Cards({ title, author, isbn, publisher, genre,image }) {
  return (
    <div className='flex flex-row flex-wrap justify-start items-start flex-shrink-0'>
      <div
        className="relative  bg-white drop-shadow-xl w-48 flex-grow-0 h-64 hover:w-52 hover:h-72 hover:transition-transform overflow-hidden m-11 flex flex-col justify-center items-center text-center "

        style={{
          backgroundImage: `url(${image})`, 
          backgroundSize: 'cover',
      
        }}
      >
        <div className='backdrop-blur-sm bg-gray/40'>
        <h1 className="font-bold text-lg text-orange-700">{title}</h1>
        <p className="text-black text-xs">AUTHOR: {author}</p>
        <p className="text-black text-xs">ISBN: {isbn}</p>
        <p className="text-black text-xs">PUBLISHER: {publisher}</p>
        <p className="text-black text-xs">GENRE: {genre}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
