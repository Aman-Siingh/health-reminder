import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Guide from './pages/Guide';
import Dashboard from './pages/Dashboard';
import CompletionLevel from './pages/CompletionLevel';



import BookAppointment from './pages/BookAppointment';
import NavBar from './components/NavBar';
import LoginRegisterBox from './components/LoginRegisterBox';
import BrandNameBox from './components/BrandNameBox';
import backgroundImage from './assets/hero.jpg'; // Adjust the path as needed


function App() {
  return (
    <Router>
      



        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completion-level" element={<CompletionLevel />} />

          
        </Routes>

       





        







    </Router>
  );
}

export default App;
