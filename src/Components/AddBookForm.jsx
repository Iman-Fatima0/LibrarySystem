import React, { useState } from 'react';
import GenericInput from './GenericInput'; 
import './loginFormStyle.css';
import HeroSection from './HeroSection';
import Penguine from "../assets/IMAGES/Penguine.png";
import Cards2 from './Cards2';
function AddBookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publication: '',
    genre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    onAddBook(formData);
    setFormData({
      title: '',
      author: '',
      publication: '',
      genre: '',
      isbn: '',
    });
  };

  const inputs = [
    { name: 'title', type: 'text', placeholder: 'Title' },
    { name: 'author', type: 'text', placeholder: 'Author' },
    { name: 'publication', type: 'date', placeholder: 'Date of Publication' },
    { name: 'genre', type: 'text', placeholder: 'Genre' },
    { name: 'isbn', type: 'number', placeholder: 'Isbn'}
  ];

  return (
    
        <form onSubmit={handleSubmit} className="form mt-36 flex flex-wrap align-middle"> 
        <img src={Penguine} alt="Penguine" className="object-contain " />
          {inputs.map((input) => (
            <GenericInput
              key={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
            />
          ))}
          <button type="submit" onSubmit={handleSubmit} className='button1'>Add Book</button>
        </form>
   
  );
}

export default AddBookForm;
