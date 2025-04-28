import React from 'react';

function EducationCard() {
  return (
    <div className="flex justify-center items-center min-h-screen p-8">
     <div className="bg-blue-900 bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-3xl w-full border border-white/20 transform transition-transform hover:scale-105 hover:shadow-2xl animate-fadeIn">
        <div className="flex items-center">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 mr-6"
            src="/del-logo.png"   // <-- pakai root path karena dari public
            alt="Institut Teknologi Del"
          />
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Institut Teknologi Del
            </h3>
            <p className="text-blue-100 mb-1">Diploma of Education, Computer Engineering</p>
            <p className="text-blue-200 text-sm font-semibold">Aug 2018 - Sep 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
