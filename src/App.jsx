import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import BookAppointment from './pages/BookAppointment';  // Correctly importing BookAppointment

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-indigo-600 shadow-lg py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              MediSOS
            </Link>
            <div className="space-x-4">
              <Link to="/" className="text-white hover:text-indigo-300 transition duration-300">
                Home
              </Link>
              <Link to="/login" className="text-white hover:text-indigo-300 transition duration-300">
                Login
              </Link>
              <Link to="/register" className="text-white hover:text-indigo-300 transition duration-300">
                Register
              </Link>
              <Link to="/book-appointment" className="text-white hover:text-indigo-300 transition duration-300">
                Book Appointment
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book-appointment" element={<BookAppointment />} />  {/* BookAppointment route */}
          </Routes>
        </main>

        <footer className="bg-indigo-600 py-4">
          <div className="container mx-auto text-center text-white">
            &copy; 2024 MediSOS. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
