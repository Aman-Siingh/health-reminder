import React, { useState } from 'react';

function Dashboard() {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleAddMedication = () => {
    const newMedication = { name, dosage, time };
    setMedications([...medications, newMedication]);
    setName('');
    setDosage('');
    setTime('');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Medication</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Medication Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Dosage</label>
            <input 
              type="text" 
              value={dosage} 
              onChange={(e) => setDosage(e.target.value)} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Time</label>
            <input 
              type="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            onClick={handleAddMedication} 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add Medication
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Scheduled Medications</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {medications.length > 0 ? (
            <ul>
              {medications.map((medication, index) => (
                <li key={index} className="mb-2">
                  <strong>{medication.name}</strong> - {medication.dosage} at {medication.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No medications scheduled.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
