import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about.js'
import Contact from './pages/contact.js';
import Layout from './components/Layout.js';
import Home from './pages/home.js';
import NotFound from './pages/notFound.js';
import Profile from './pages/profile.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path = '/about' element={<About />}></Route>
        <Route path = '/contact' element={<Contact />}></Route>
        <Route path = '/profile/:id' element={<Profile />}></Route>
        <Route path = '*' element={<NotFound />}></Route>
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}


export default App;
