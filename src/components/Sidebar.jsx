// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <ul className="space-y-4 p-4">
        <li><Link to="/dashboard">Medications Schedule</Link></li>
        <li><Link to="/appointments">Your Appointments</Link></li>
        <li><Link to="/level">Level</Link></li>
        <li><Link to="/gifts">Gifts Won</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
