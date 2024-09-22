import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-[250px] bg-softGreen text-white h-screen ml-[58px] border-2 border-black rounded-lg shadow-lg"> {/* Added ml-6 for margin-left */}
      <ul className="text-black font-bold space-y-[100px] p-4">
        <li><Link to="/dashboard">Medications Schedule</Link></li>
        <li><Link to="/appointments">Your Appointments</Link></li>
        <li><Link to="/level">Level</Link></li>
        <li><Link to="/gifts">Gifts Won</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
