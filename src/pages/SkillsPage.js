import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import techBackground from '../assets/tech-background.jpg';

function SkillsPage() {
  const [activeTab, setActiveTab] = useState('advance');

  const skillsData = {
    advance: [
      { name: 'Docker', icon: require('../assets/docker-icon.png') },
      { name: 'NodeJS', icon: require('../assets/nodejs-icon.png') },
      { name: 'Git', icon: require('../assets/git-icon.png') },
      { name: 'Kubernetes', icon: require('../assets/kubernetest-icon.png') },
      { name: 'Bash', icon: require('../assets/bash-script-icon.png') },
      { name: 'Nginx', icon: require('../assets/nginx-icon.png') },
      { name: 'Splunk', icon: require('../assets/splunk-icon.png') },
      { name: 'Gitlab', icon: require('../assets/gitlab-icon.png') },
      { name: 'Github', icon: require('../assets/github-icon.png') },
    ],
    good: [
      { name: 'Docker', icon: require('../assets/docker-icon.png') },
      { name: 'NodeJS', icon: require('../assets/nodejs-icon.png') },
      { name: 'Git', icon: require('../assets/git-icon.png') },
      { name: 'Gitlab', icon: require('../assets/gitlab-icon.png') },
      { name: 'Github', icon: require('../assets/github-icon.png') },
      { name: 'Jenkins', icon: require('../assets/jenkins-icon.png') },
      { name: 'Kubernetes', icon: require('../assets/kubernetest-icon.png') },
      { name: 'Aws Cloud', icon: require('../assets/aws-cloud-icon.png') },
      { name: 'Alibaba Cloud', icon: require('../assets/alibaba-cloud-icon.png') },
      { name: 'Helm', icon: require('../assets/helm-k8s-icon.png') },
      { name: 'Sonarqube', icon: require('../assets/sonarqube-icon.png') },
      { name: 'Kong', icon: require('../assets/kong-apigw-icon.png') },
      { name: 'Datadog', icon: require('../assets/datadog-icon.png') },
      { name: 'Kibana', icon: require('../assets/kibana-icon.png') },
      { name: 'Grafana', icon: require('../assets/grafana-icon.png') },
      { name: 'Jmeter', icon: require('../assets/apache-jmeter-icon.png') },
      { name: 'Google Play', icon: require('../assets/google-play-console-icon.png') },
      { name: 'App Store', icon: require('../assets/app-store-connect-icon.png') },
      { name: 'Firebase', icon: require('../assets/firebase-icon.png') },
    ],
    familiar: [
      { name: 'Javascript', icon: require('../assets/javascript-icon.png') },
      { name: 'NodeJS', icon: require('../assets/nodejs-icon.png') },
      { name: 'TailwindCSS', icon: require('../assets/tailwindcss-icon.png') },
      { name: 'ReactJS', icon: require('../assets/react-icon.png') },
    ],
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${techBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 min-h-screen min-h-[130vh] flex flex-col items-center justify-start pb-40">

        <h2 className="text-4xl font-bold text-white mb-6 pt-24">Tech Stack</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {['advance', 'good', 'familiar'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-md text-white font-semibold transition-all ${
                activeTab === tab ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        <div className="relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {skillsData[activeTab].map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center p-5 rounded-2xl
                    bg-white/10 hover:bg-white/20 backdrop-blur-sm 
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-lg hover:shadow-blue-400/40"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 mb-2 transition-transform duration-300"
                  />
                  <span className="text-white text-sm">{skill.name}</span>

                  {/* Tooltip saat hover */}
                  <div className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition 
                    bg-gray-900 text-white text-xs rounded px-2 py-1 pointer-events-none">
                    {skill.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
