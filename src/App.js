import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';

function App() {
  return (
   <>
    <GlobalStyle />
    <Navbar/>
    <Dropdown />
   </>
  );
}

export default App;
