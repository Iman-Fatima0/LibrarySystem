import React, { useEffect, useState } from 'react';
import BookTableForm from '../Components/BookTableForm';
import HeroSection from '../Components/HeroSection';
import Penguine2 from "../assets/IMAGES/Penguine2.png";
import Penguine4 from'../assets/IMAGES/Penguine4.png';
import Searchbar from '../Components/Searchbar';
import BookManager from '../Components/BookManager';

function BookTable() {
 
  return (
    <div style={{
      display: 'flex',
      
      whiteSpace: 'nowrap',
      height: '100vh', 
    }}>
      
     
      <div style={{
        backgroundImage: `url(${Penguine2})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw', 
        height: '100vh', 
      }} />
      
      <div style={{
        backgroundImage: `url(${Penguine4})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw', 
        height: '100vh', 
      }} />
      
     
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        position: 'absolute', 
        zIndex: 1,
        top: '50%', 
        transform: 'translateY(-50%)', 
      }}>
        
        <BookTableForm />
        
      </div>
    </div>
  );
}

export default BookTable;
