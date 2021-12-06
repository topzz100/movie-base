import React from 'react';
import Header from './Components/Header/Header'
import Home from './Components/Home'
import {GlobalStyles} from './GlobalStyles'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      
      <GlobalStyles/>
    </div>
  );
}

export default App;
