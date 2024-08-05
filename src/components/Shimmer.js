import React from 'react';
//import './Shimmer.css'; // Import the CSS for keyframes

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-4">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bg-gray-100  h-96 w-56  mb-4 ml-4 rounded-lg "></div>
      ))}
    </div>
  );
};

export default Shimmer;
