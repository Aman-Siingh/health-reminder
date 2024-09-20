// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 text-gray-900">
//         <header className="bg-indigo-600 shadow-lg py-4">
//           <nav className="container mx-auto flex justify-between items-center">
//             <Link to="/" className="text-white text-2xl font-bold">
//             MediSOS
//             </Link>
//             <div className="space-x-4">
//               <Link to="/" className="text-white hover:text-indigo-300 transition duration-300">
//                 Home
//               </Link>
//               <Link to="/login" className="text-white hover:text-indigo-300 transition duration-300">
//                 Login
//               </Link>
//               <Link to="/register" className="text-white hover:text-indigo-300 transition duration-300">
//                 Register
//               </Link>
//             </div>
//           </nav>
//         </header>

//         <main className="container mx-auto py-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </main>

//         <footer className="bg-indigo-600 py-4">
//           <div className="container mx-auto text-center text-white">
//             &copy; 2024 MediSOS. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Guide from './pages/Guide'; // Import the new Guide page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-indigo-600 shadow-lg py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              MediSOS
            </Link>
            <div className="space-x-4 flex items-center">
              <Link to="/" className="text-white hover:text-indigo-300 transition duration-300">
                Home
              </Link>
              <Link to="/login" className="text-white hover:text-indigo-300 transition duration-300">
                Login
              </Link>
              <Link to="/register" className="text-white hover:text-indigo-300 transition duration-300">
                Register
              </Link>
              <Link
                to="/guide"
                className="bg-white text-indigo-600 px-4 py-2 rounded-md shadow hover:bg-indigo-50 transition duration-300"
              >
                First Aid Guide
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
            <Route path="/guide" element={<Guide />} /> {/* Add the Guide route */}
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


