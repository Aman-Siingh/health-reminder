import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import BrandNameBox from "../components/BrandNameBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginRegisterBox from "../components/LoginRegisterBox";

function Dashboard() {
  const [medications, setMedications] = useState(() => {
    const savedMedications = localStorage.getItem("medications");
    return savedMedications ? JSON.parse(savedMedications) : [];
  });
  const [medicineName, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [reminderDate, setReminderDate] = useState("");
  const [reminderTime, setTime] = useState("");
  const [userEmail, setContactInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medications));
  }, [medications]);

  const handleAddMedication = async (e) => {
    e.preventDefault();

    if (!medicineName || !dosage || !reminderDate || !reminderTime || !userEmail) {
      alert("Please fill out all fields.");
      return;
    }

    const reminderDateTime = new Date(
      `${reminderDate}T${reminderTime}:00Z`
    ).toISOString();

    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/auth/medicine`,
        { medicineName, dosage, reminderTime: reminderDateTime, userEmail }
      );
      if (res && res.data.success) {
        const newMedication = {
          name: medicineName,
          dosage,
          time: reminderDateTime,
          contactInfo: userEmail,
        };
        setMedications([...medications, newMedication]);
        setName(""); // Clear input fields after adding
        setDosage("");
        setReminderDate("");
        setTime("");
        setContactInfo("");
      } else {
        console.log("Error adding medication");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMedication = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
  };

  return (
    <div>
      <header className="bg-black-blue-gradient p-4 pt-[40px] h-[90px] flex justify-around items-center">
        <BrandNameBox />
        
        <NavBar />
        <LoginRegisterBox />
      </header>

      <div className="flex mt-[20px] h-[calc(100vh-90px)]">
        <Sidebar />

        <div className="p-6 bg-gray-100 min-h-screen flex-1">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Add Medication</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Medication Name</label>
                <input
                  type="text"
                  value={medicineName}
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
                <label className="block text-gray-700 mb-2">Email or Phone Number</label>
                <input
                  type="text"
                  value={userEmail}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Enter email or phone number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={reminderDate}
                  onChange={(e) => setReminderDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Time</label>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                onClick={handleAddMedication}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
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
                    <li key={index} className="mb-2 flex justify-between items-center">
                      <div>
                        <strong>{medication.name}</strong> - {medication.dosage}{" "}
                        at {medication.time}, Contact: {medication.contactInfo}
                      </div>
                      <button
                        onClick={() => handleDeleteMedication(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No medications scheduled.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
