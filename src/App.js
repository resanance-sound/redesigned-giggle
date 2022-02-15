import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './pages/blogpage/post'
import Home from './pages/homePage'
import Dashboard from './pages/dashboard/overview/DashBoard';

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
                <Route path="/myDash" element={<Dashboard />} />
                </Routes>
            </div>
          </div>
          <Link to='/'>Home Page</Link> 
          <br />
          <Link to='/post'>Blog Page</Link> 
          <br />
          <Link to='/myDash'>MyDashBoard</Link> 
      </div>
  </Router>
  );
}

export default App;
