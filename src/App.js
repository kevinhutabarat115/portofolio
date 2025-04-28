import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profilePhoto from './assets/Kevin Polin Hutabarat Profile.png';
import './index.css';
import backgroundMusic from './assets/coding-music.mp3';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Link for navigation

// Landing Page Component
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

// Home Page Component
function HomePage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      <section className="main-content w-full text-center space-y-6 animate-zoom-in max-w-3xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-white">Hi, I'm Kevin Polin</h1>
        <h2 className="text-2xl text-blue-400">Cloud | DevOps | SRE Enthusiast</h2>
        <img src={profilePhoto} alt="Kevin Polin Hutabarat" className="w-48 h-48 mx-auto mt-6 shadow-lg border-4 border-blue-500 rounded-full" />
        <p className="text-lg text-gray-300 mt-6">
          I am from Indonesia. I love working with Cloud Infrastructure, Automation, and ensuring high reliability of services.
        </p>
        <div className="flex space-x-6 justify-center mt-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kevinhutabarat115@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
          <a
            href="/Kevin Polin Hutabarat_CV.pdf"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition"
            download
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/kevinhutabarat115/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-blue-500 hover:text-blue-600" />
          </a>
          <a href="https://www.linkedin.com/in/kevin-polin-hutabarat/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-500 hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/am_i_vyn" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-500 hover:text-pink-600" />
          </a>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="main-content text-center">
      <h2 className="text-4xl font-bold text-white">About Me</h2>
      <p className="text-lg text-gray-300 mt-6">
        This is the About page. You can provide a description about yourself here.
      </p>
    </div>
  );
}

// Projects Page Component
function ProjectsPage() {
  return (
    <div className="main-content text-center">
      <h2 className="text-4xl font-bold text-white">Projects</h2>
      <p className="text-lg text-gray-300 mt-6">
        This is where you can showcase your projects.
      </p>
    </div>
  );
}

// Skills Page Component (Tech Stack with Categories)
function SkillsPage() {
  const [activeTab, setActiveTab] = useState('advance');

  const skillsData = {
    advance: [
      { name: 'Docker', icon: require('./assets/docker-icon.png') },
      { name: 'NodeJS', icon: require('./assets/nodejs-icon.png') },
      { name: 'Git', icon: require('./assets/git-icon.png') },
      { name: 'Kubernetes', icon: require('./assets/kubernetest-icon.png') },
      { name: 'Bash', icon: require('./assets/bash-script-icon.png') },
      { name: 'Nginx', icon: require('./assets/nginx-icon.png') },
      { name: 'Splunk', icon: require('./assets/splunk-icon.png') },
      { name: 'Gitlab', icon: require('./assets/gitlab-icon.png') },
      { name: 'Github', icon: require('./assets/github-icon.png') },
    ],
    good: [
      { name: 'Docker', icon: require('./assets/docker-icon.png') },
      { name: 'NodeJS', icon: require('./assets/nodejs-icon.png') },
      { name: 'Git', icon: require('./assets/git-icon.png') },
      { name: 'Gitlab', icon: require('./assets/gitlab-icon.png') },
      { name: 'Github', icon: require('./assets/github-icon.png') },
      { name: 'Jenkins', icon: require('./assets/jenkins-icon.png') },
      { name: 'Kubernetes', icon: require('./assets/kubernetest-icon.png') },
      { name: 'Aws Cloud', icon: require('./assets/aws-cloud-icon.png') },
      { name: 'Alibaba Cloud', icon: require('./assets/alibaba-cloud-icon.png') },
      { name: 'Helm', icon: require('./assets/helm-k8s-icon.png') },
      { name: 'Bash', icon: require('./assets/bash-script-icon.png') },
      { name: 'Nginx', icon: require('./assets/nginx-icon.png') },
      { name: 'Sonarqube', icon: require('./assets/sonarqube-icon.png') },
      { name: 'Kong', icon: require('./assets/kong-apigw-icon.png') },
      { name: 'Splunk', icon: require('./assets/splunk-icon.png') },
      { name: 'Datadog', icon: require('./assets/datadog-icon.png') },
      { name: 'Kibana', icon: require('./assets/kibana-icon.png') },
      { name: 'Grafana', icon: require('./assets/grafana-icon.png') },
      { name: 'Jmeter', icon: require('./assets/apache-jmeter-icon.png') },
      { name: 'Google Play', icon: require('./assets/google-play-console-icon.png') },
      { name: 'App Store', icon: require('./assets/app-store-connect-icon.png') },
      { name: 'Firebase', icon: require('./assets/firebase-icon.png') },
    ],
    familiar: [
      { name: 'Javascript', icon: require('./assets/javascript-icon.png') },
      { name: 'NodeJS', icon: require('./assets/nodejs-icon.png') },
      { name: 'TailwindCSS', icon: require('./assets/tailwindcss-icon.png') },
      { name: 'ReactJS', icon: require('./assets/react-icon.png') },
    ]
  };

  return (
    <div className="main-content text-center">
      <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
      <div className="mt-6 text-lg text-gray-300">
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-6 mb-8">
          <button 
            className={`px-6 py-3 ${activeTab === 'advance' ? 'bg-red-500' : 'bg-gray-500'} rounded-md text-white`}
            onClick={() => setActiveTab('advance')}
          >
            Advance
          </button>
          <button 
            className={`px-6 py-3 ${activeTab === 'good' ? 'bg-blue-500' : 'bg-gray-500'} rounded-md text-white`}
            onClick={() => setActiveTab('good')}
          >
            Good
          </button>
          <button 
            className={`px-6 py-3 ${activeTab === 'familiar' ? 'bg-green-500' : 'bg-gray-500'} rounded-md text-white`}
            onClick={() => setActiveTab('familiar')}
          >
            Familiar
          </button>
        </div>

        {/* Tech Stack Icons Display */}
        <div className="skills-container">
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Education Page Component
function EducationPage() {
  return (
    <div className="main-content text-center">
      <h2 className="text-4xl font-bold text-white">Education</h2>
      <p className="text-lg text-gray-300 mt-6">
        Here you can display your education details, such as university, degree, and year.
      </p>
    </div>
  );
}

// Main App Component
function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [audio] = useState(new Audio(backgroundMusic));

  const handleExploreClick = () => {
    setIsEntered(true);
    audio.play();
  };

  const handleModeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isEntered) {
      audio.loop = true;
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isEntered, audio]);

  return (
    <Router>
      <div className={`relative min-h-screen ${isEntered ? (isDarkMode ? "bg-gray-500 text-white" : "bg-gradient-to-b from-gray-900 to-black text-white") : "bg-gradient-to-b from-white to-gray-200 text-black"}`}>
        {!isEntered && <LandingPage onExplore={handleExploreClick} />}

        {isEntered && (
          <>
            {/* Navbar - Horizontally aligned */}
            <div className="navbar">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/education">Education</Link></li>
              </ul>
            </div>

            {/* Routing for Pages */}
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

        {/* Mode Switcher with Name */}
        {isEntered && (
          <div className="fixed top-4 right-4 text-white">
            <span className="mr-2">{'Kevin Polin'}</span>
            <button onClick={handleModeSwitch} className="bg-gray-800 p-2 rounded-full">
              <span>{isDarkMode ? "🌙" : "🌞"}</span>
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
