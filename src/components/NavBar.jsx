import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white p-6 px-16 rounded-lg shadow-lg flex justify-between w-[1200px] h-[70px]">
      <Link to="/" className="text-black font-bold hover:underline">Home</Link>
      <Link to="/dashboard" className="text-black font-bold hover:underline">Dashboard</Link>
      <Link to="/guide" className="text-black font-bold hover:underline">Guide</Link>
      <Link to="/book-appointment" className="text-black font-bold hover:underline">Book Appointment</Link>
      <Link to="/about-us" className="text-black font-bold hover:underline">About us</Link>


    </nav>
  );
}

export default NavBar;
