import React from 'react';
import EducationCard from '../components/EducationCard';
import hogwartsImage from '../assets/hogwarts.jpg'; // Pastikan ini path yang benar!

function Education() {
  return (
    <div
      className="relative flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${hogwartsImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten utama di atas overlay */}
      <div className="relative z-10">
        <EducationCard />
      </div>
    </div>
  );
}

export default Education;
