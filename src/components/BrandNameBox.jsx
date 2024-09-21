import React from 'react';
import { Link } from 'react-router-dom';

function BrandNameBox() {
  return (
    <div className="bg-peach p-[17px] w-[200px] h-[70px] flex justify-center border-2 border-black rounded-lg shadow-lg">
      <Link to="/" className="text-black  text-2xl font-black">MediSOS</Link>
    </div>
  );
}

export default BrandNameBox;
