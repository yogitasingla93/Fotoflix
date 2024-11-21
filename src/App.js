import './App.css';
import React from 'react';
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';

function App() {
  return (
  <BrowserRouter>
    <div>
       <nav className='navbar'>
          <div className='navbar_logo'>
            FotoFlix
          </div>
          <form action='' className='navbar_search-form'>
            <input type='text' className='search-form' placeholder='Search' />
            <button type='submit' className='submit-btn'>
             <FaSearch/>
            </button>
          </form>
         <div className='navbar_links'>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourites</Link>
          </div> 
       </nav>
       <Routes>
         <Route path="/" element={<Photos />} />
         <Route path="/favourites" element={<Favourites />} />
       </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
