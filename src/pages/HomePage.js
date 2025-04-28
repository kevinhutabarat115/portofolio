// src/pages/HomePage.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import profilePhoto from '../assets/Kevin Polin Hutabarat Profile.png';

function HomePage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-32">
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
          <a href="https://www.linkedin.com/in/kevin-polin-hutabarat-bb96012a3/" target="_blank" rel="noopener noreferrer">
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

export default HomePage;
