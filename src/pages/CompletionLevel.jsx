import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import LoginRegisterBox from '../components/LoginRegisterBox';
import BrandNameBox from '../components/BrandNameBox';

const CompletionLevel = ({ medicationsCount }) => {
  const [completion, setCompletion] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // Calculate the percentage completion (each level is 10 medications)
    const newCompletion = (medicationsCount % 10) * 10;
    setCompletion(newCompletion);

    // Calculate the new level (increments by 1 for every 10 medications)
    const newLevel = Math.floor(medicationsCount / 10) + 1;
    setLevel(newLevel);
  }, [medicationsCount]);

  return (
    <div>
      <header className="bg-black-blue-gradient p-4 pt-[40px] h-[90px] flex justify-around items-center">
        <BrandNameBox />
        <NavBar />
        <LoginRegisterBox />
      </header>

      <div className="flex mt-[20px] h-[calc(100vh-90px)]">
        <Sidebar />

        <div className="flex-1 flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Level {level} Progress</h1>

          <div className="w-11/12 sm:w-1/2 bg-gray-300 rounded-full h-8">
            <div
              className="bg-blue-600 h-8 rounded-full"
              style={{ width: `${completion}%` }}
            />
          </div>

          <p className="mt-4 text-xl">{completion}% Completed</p>
        </div>
      </div>
    </div>
  );
};

export default CompletionLevel;