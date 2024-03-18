import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DetailProject from './pages/DetailProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Home />} />
        <Route path="/portofolio/projects" element={<Projects />} />
        <Route path="/portofolio/detail-project" element={<DetailProject />} />
      </Routes>
    </Router>
  );
}

export default App;
