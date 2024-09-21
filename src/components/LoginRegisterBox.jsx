import React from 'react';
import { Link } from 'react-router-dom';

function LoginRegisterBox() {
  return (
    <div className="bg-lightBlue p-4 rounded-lg shadow-lg flex space-x-4 border-2 border-black">
      <Link to="/login" className="text-black font-bold px-4 py-2 rounded-md">Login</Link>
      <Link to="/register" className="text-black font-bold px-4 py-2 rounded-md">Register</Link>
    </div>
  );
}

export default LoginRegisterBox;
