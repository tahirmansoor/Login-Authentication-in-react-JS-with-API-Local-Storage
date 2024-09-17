
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <>
        <Router>
        <Navbar />        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/Register" element={<Register />} /> 
       </Routes>
    </Router>
    </>
  );
}

export default App;
