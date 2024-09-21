// src/pages/Guide.js
import React from 'react';
import Img1 from '../assets/1.jpeg';
import Img2 from '../assets/2.jpeg';
import Img3 from '../assets/3.jpeg';
import Img4 from '../assets/4.jpeg';

function Guide() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">First Aid Guide</h1>
      <p className="text-gray-700 mb-8">
        This guide provides essential information on how to perform first aid in various situations. 
        Please refer to this guide during emergencies to help manage the situation until professional 
        medical help is available.
      </p>

      {/* First Aid Section for CPR */}
      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <img src={Img1} alt="CPR" className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">CPR</h2>
            <p className="text-gray-700">
              If a person is not breathing, you should start CPR immediately. Ensure the airway is clear 
              and then perform chest compressions at a rate of 100-120 compressions per minute. Continue 
              CPR until professional help arrives.
            </p>
          </div>
        </div>
      </section>

      {/* First Aid Section for Stopping Bleeding */}
      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <img src={Img2} alt="Stopping Bleeding" className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Stopping Bleeding</h2>
            <p className="text-gray-700">
              To stop bleeding, apply firm pressure with a clean cloth over the wound. Elevate the injured 
              area if possible, and maintain pressure until the bleeding stops. If the bleeding is severe, 
              seek medical help immediately.
            </p>
          </div>
        </div>
      </section>

      {/* First Aid Section for Treating Burns */}
      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <img src={Img3} alt="Treating Burns" className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Treating Burns</h2>
            <p className="text-gray-700">
              Cool burns under cool running water for at least 10 minutes. Avoid using ice or applying 
              ointments to severe burns. For minor burns, after cooling, you can cover the area with a 
              clean, non-stick dressing.
            </p>
          </div>
        </div>
      </section>

      {/* First Aid Section for Heimlich Maneuver */}
      <section className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <img src={Img4} alt="Heimlich Maneuver" className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 mb-4">Heimlich Maneuver</h2>
            <p className="text-gray-700">
              If someone is choking, you can perform the Heimlich maneuver by standing behind the person 
              and applying upward abdominal thrusts. Repeat the process until the object causing the 
              blockage is expelled.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Guide;
