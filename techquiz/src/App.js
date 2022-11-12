import Home from './Home/HomePage';
import './App';
import NavBarH from './Home/NavbarH';
import React from "react";

function App() {
  return (
    <div className="App">
      <div className='content'>
      <NavBarH/>
      <Home/>
      </div>
    </div>
  );
}

export default App;
