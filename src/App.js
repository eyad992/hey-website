import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import SignUp from './components/pages/SignUp';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services'exact element={<Services/>} />
          <Route path='/projects'exact element={<Projects/>} />
          <Route path='/sign-up' exact element={<SignUp/>} />
        </Routes>
        </ScrollToTop>

      </HashRouter>
    </>
  );
}

export default App;