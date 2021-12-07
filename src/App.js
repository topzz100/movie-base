import React from 'react';
import Header from './Components/Header/Header'
import Home from './Components/Home'
import Movie from './Components/Movie'
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyles} from './GlobalStyles'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/:movieId' element = {<Movie/>}/>
        <Route path = '/*' element = {<NotFound/>}/>
      </Routes>
      
      <GlobalStyles/>
    </Router>
  );
}

export default App;
