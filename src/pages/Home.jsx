import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-8">Medication Reminder</h1>
      <p className="text-lg mb-8">Never forget your medication again!</p>
      <div>
        <Link to="/register" className="bg-white text-blue-500 px-6 py-2 rounded-full mr-4">Register</Link>
        <Link to="/login" className="bg-white text-blue-500 px-6 py-2 rounded-full">Login</Link>
      </div>
    </div>
  );
}

export default Home;
