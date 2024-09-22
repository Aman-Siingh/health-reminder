import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-peach p-[20px] px-16  rounded-lg shadow-lg flex justify-between w-[1200px] h-[70px] border-2 border-black">
      <Link to="/" className="text-black font-bold hover:underline">Home</Link>
      <Link to="/" className="text-black font-bold hover:underline">Our Partners</Link>
      <Link to="/guide" className="text-black font-bold hover:underline">First Aid Guide</Link>
      <Link to="/book-appointment" className="text-black font-bold hover:underline">Book Appointment</Link>
      <Link to="/about-us" className="text-black font-bold hover:underline">About us</Link>


    </nav>
  );
}

export default NavBar;
