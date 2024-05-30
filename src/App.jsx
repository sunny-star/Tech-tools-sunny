import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavbarHome from './components/Navbar';
import Category from './components/Category'; 
import Info from './components/Info';
import SearchFeed from "./components/SearchFeed";
import Footer from './components/Footer';
import "./App.css";

export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavbarHome />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:branch' element={<Category />} />
          <Route path='/software/:id' element={<Info />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
          <Footer/>
      </Router>
    </div>
  );
};

