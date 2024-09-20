import React, { useState } from 'react';
import axios from 'axios';

function BookAppointment() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      doctor,
      date,
      time
    };

    try {
      // Replace 'your-api-key' with the actual API key from Practo
      const res = await axios.post('https://api.practo.com/appointments', appointmentData, {
        headers: {
          'Authorization': `Bearer your-api-key`,
          'Content-Type': 'application/json'
        }
      });

      setResponse(res.data);
    } catch (err) {
      setError('Error booking appointment. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment with a Doctor</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Doctor Name</label>
          <input
            type="text"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Appointment Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Appointment Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Book Appointment
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
          <p>Appointment successfully booked!</p>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
