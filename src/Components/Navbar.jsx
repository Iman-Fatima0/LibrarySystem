import React from 'react';
import Penguine from '../assets/IMAGES/Penguine.png'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-black border-r-white border-r-2 w-28  h-svh p-2 flex flex-col items-center hover:shadow-xl hover:shadow-white backdrop-opacity-50 backdrop-invert flex-shrink-0 '>
      <ul className='mb-16 hover:cursor-pointer '>
        <li>
          <Link to="/">
          <img src={Penguine}  alt="Penguine"  className="object-contain "   />
          </Link>
        </li>
        
      </ul>
      <div className='flex flex-col text-orange-600 '>
        <ul className='flex flex-col items-center pt-'>
          <li className='pb-5 pt-32 hover:text-white  hover:cursor-pointer '><Link to='/BookTable'>Home</Link></li>
          <li className='pb-5 hover:text-white hover:cursor-pointer '><Link to='/EditingPage'>Publish</Link></li>
          {/* <li className='hover:text-orange-200 hover:underline hover:cursor-pointer'><Link to='/'>Editor</Link></li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
