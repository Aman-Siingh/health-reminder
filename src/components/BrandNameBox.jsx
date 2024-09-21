import React from 'react';
import { Link } from 'react-router-dom';

function BrandNameBox() {
  return (
    <div className="bg-white p-[19px] w-[200px] h-[70px] flex justify-center rounded-lg shadow-lg">
      <Link to="/" className="text-black text-2xl font-bold">MediSOS</Link>
    </div>
  );
}

export default BrandNameBox;
