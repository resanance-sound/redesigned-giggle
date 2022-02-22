import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Post from './pages/blogpage/post'
import Home from './pages/homePage'
import Dashboard from './pages/dashboard/overview/DashBoard';
import SideBar from './components/navBar/sidebar/SideBar';

function App() {

  return (
    <Router>
      <div className="App">
        <SideBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/myDash" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
