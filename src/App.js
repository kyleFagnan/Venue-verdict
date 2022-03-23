import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Spotlight from './components/pages/Spotlight';
import Venues from './components/pages/Venues';
import Signup from './components/pages/Signup';



function App() {
  const [data, setData] = React.useState(null);


  
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/venues' element={<Venues/>} />
        <Route exact path='/spotlight' element={<Spotlight/>} />
        <Route exact path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
