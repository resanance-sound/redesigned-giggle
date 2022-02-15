import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './pages/blogpage/post'
import Home from './pages/homePage'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <h1>I am a nav bar honestly</h1>
        </nav>

          <div className="outer">
            <div className="inner">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
                </Routes>
            </div>
          </div>
          <Link to='/'>Home Page</Link> 
          <Link to='/post'>Blog Page</Link> 
      </div>
  </Router>
  );
}

export default App;
