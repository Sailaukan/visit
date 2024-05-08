import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import HomePage from './components/HomePage/HomePage.js';
import ResumePage from './components/ResumePage/ResumePage.js';
import BlogPage from './components/BlogPage/BlogPage.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
