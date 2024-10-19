import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import './App.css';
import SignUp from './Pages/SignUp';
import EditingPage from './Pages/EditingPage';
import BookTable from './Pages/BookTable';
import Footer from './Components/Footer';
import Nav1 from './Components/Nav1';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const location = useLocation();
 const hidebars= location.pathname ==='/SignUp'|| location.pathname==='/Login'
  
  return (
    <>
    
   <div className="flex">
   {!hidebars && <Navbar/>}
    {!hidebars &&<Nav1/>}
  
    <div className="flex-grow ">
     
      <Routes>
        
        <Route path="/" element={<BookTable />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp/>} /> 
        <Route path="/BookTable" element={<BookTable />} />
        <Route path="/EditingPage" element={<EditingPage />} />
        

      </Routes>
      </div>
      </div>
     
      {/* <Footer /> */}
    </>
  );
}

export default App;
