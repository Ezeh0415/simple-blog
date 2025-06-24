import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">About This Blog</h1>
      <p className="text-gray-700 mb-6">
        Welcome to Simple React Blog — a beginner-friendly blogging platform built with React, React Router, and Tailwind CSS.  
        This blog project demonstrates core React concepts like routing, global state management with Context, and responsive styling.
      </p>
      <p className="text-gray-700 mb-6">
        Users can browse posts, add new blog entries via a simple form, and navigate easily between pages. The goal is to provide a clean, easy-to-understand example for learning React app structure and state management.
      </p>
      <p className="text-gray-700">
        <strong>Created by:</strong> Ezeh Godwin Chigozie
      </p>
    </div>
  );
};

export default About;
