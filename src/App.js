import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services'exact element={<Services/>} />
          <Route path='/products'exact element={<Products/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;