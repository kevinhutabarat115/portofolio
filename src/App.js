// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import backgroundMusic from './coding-music.mp3';
import './index.css';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/education';
function LandingPage({ onExplore }) {
  return (
    <div className="landing-page-bg">
      <div className="text-center space-y-6 animate-zoom-in">
        <h1 className="text-5xl font-bold text-white">Welcome to Kevin Polin's Portfolio</h1>
        <p className="text-xl text-gray-300">Cloud | DevOps | SRE Enthusiast</p>
        <button
          onClick={onExplore}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-300"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [audio] = useState(new Audio(backgroundMusic));

  const handleExploreClick = () => {
    setIsEntered(true);
    // audio.play(false);
  };

  const handleModeSwitch = () => setIsDarkMode(!isDarkMode);

  // useEffect(() => {
  //   if (isEntered) {
  //     audio.loop = true;
  //     audio.play();
  //   }
  //   return () => audio.pause();
  // }, [isEntered, audio]);

  return (
    <Router>
      <div className={`relative min-h-screen ${isEntered ? (isDarkMode ? "bg-gray-500 text-white" : "bg-gradient-to-b from-gray-900 to-black text-white") : "bg-gradient-to-b from-white to-gray-200 text-black"}`}>
        {!isEntered ? (
          <LandingPage onExplore={handleExploreClick} />
        ) : (
          <>
            <nav className="navbar">
              <ul className="flex justify-center space-x-8 py-4">
                {['home', 'about', 'projects', 'skills', 'education'].map((path) => (
                  <li key={path}>
                    <Link to={`/${path}`} className="capitalize hover:text-blue-400">{path}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/education" element={<EducationPage />} />
            </Routes>

            <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-3">
              <p>&copy; 2025 Kevin Polin Hutabarat. All rights reserved.</p>
            </footer>
          </>
        )}

        {isEntered && (
          <div className="fixed top-4 right-4 text-white flex items-center">
            <span className="mr-2">Kevin Polin</span>
            <button onClick={handleModeSwitch} className="bg-gray-800 p-2 rounded-full">
              {isDarkMode ? "🌙" : "🌞"}
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
