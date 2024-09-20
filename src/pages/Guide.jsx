// src/pages/Guide.js
import React from 'react';

function Guide() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">First Aid Guide</h1>
      <p className="text-gray-700">
        This guide provides essential information on how to perform first aid in various situations. 
        Please refer to this guide during emergencies to help manage the situation until professional 
        medical help is available.
      </p>
      
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-indigo-500">Common First Aid Tips</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>CPR:</strong> If the person is not breathing, begin CPR immediately.</li>
          <li><strong>Bleeding:</strong> Apply pressure to the wound with a clean cloth.</li>
          <li><strong>Burns:</strong> Cool the burn under cool running water for at least 10 minutes.</li>
          <li><strong>Choking:</strong> Perform the Heimlich maneuver if the person is choking.</li>
          <li><strong>Fractures:</strong> Immobilize the affected area and seek medical help.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-4">First Aid Visuals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <img src="../assests/1.jpeg"alt="CPR" className="w-full h-auto rounded-lg shadow-md" />
          <img src="../assests/2.jpeg" alt="Stopping Bleeding" className="w-full h-auto rounded-lg shadow-md" />
          <img src="../assests/3.jpeg" alt="Treating Burns" className="w-full h-auto rounded-lg shadow-md" />
          <img src="../assests/4.jpeg" alt="Heimlich Maneuver" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
}

export default Guide;
