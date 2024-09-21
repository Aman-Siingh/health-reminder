import React from 'react';
import LoginRegisterBox from '../components/LoginRegisterBox';
import BrandNameBox from '../components/BrandNameBox';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


import backgroundImage from '../assets/hero.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black p-4 pt-[40px] h-[90px] flex justify-around items-center">
        <BrandNameBox />
        <NavBar />
        <LoginRegisterBox />
      </header>

      <section className="flex justify-center pd-[20px] items-center h-screen bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/path-to-hero-image.jpg")' }}>
        <div
          className="bg-opacity-80 p-12 mb-[120px] h-[800px] w-[1785px]  mt-[30px] rounded-lg shadow-lg text-center relative"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='pt-[420px] text-left'>
            <h1 className="text-white text-8xl font-black mb-4">
              <span>TAKE YOUR</span><br />
              <span>MEDICINES</span><br />
              <span>ON TIME</span>
            </h1>
          </div>
          <div className="absolute bottom-5 right-5">
            <Link to="/login">
              <div className="bg-white text-black font-bold text-4xl w-[250px] h-[70px] flex items-center border-2 border-black justify-center rounded-lg">
                <span className="text-lg">Set Reminder</span>
              </div>
            </Link>
          </div>
        </div>
      </section>



      <section className="container ml-[60px]  grid grid-cols-1 md:grid-cols-4 gap-[285px]">
        {/* Box 1 */}
        <div className="bg-blue-300 w-[420px] p-1 rounded-lg shadow-lg text-center relative transition transform duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4">General Dentistry</h2>
          <p className="text-gray-300 mb-4">Comprehensive care for your dental health needs.</p>
          <a href="/services/general" className="text-white underline">Learn more</a>
          <div className="absolute bottom-2 right-2 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-yellow-50 w-[420px] h-[500px] p-6 rounded-lg shadow-lg text-center relative transition transform duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4">Cosmetic Dentistry</h2>
          <p className="text-gray-300 mb-4">Achieve a beautiful smile with our cosmetic treatments.</p>
          <a href="/services/cosmetic" className="text-white underline">Learn more</a>
          <div className="absolute bottom-2 right-2 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-purple-300 w-[420px] h-[500px] p-6 rounded-lg shadow-lg text-center relative transition transform duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4">Emergency Care</h2>
          <p className="text-gray-300 mb-4">Immediate care for emergencies like toothaches or injuries.</p>
          <a href="/services/emergency" className="text-white underline">Learn more</a>
          <div className="absolute bottom-2 right-2 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-green-300 w-[420px] p-1 rounded-lg shadow-lg  relative transition transform duration-300 ease-in-out">
          <h1 className="text-black text-left text-4xl ml-[20px] mt-[20px] font-black mb-4 " style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span>DOCTOR</span><br />
            <span>APPOINTMENT</span>
          </h1>

          <p className="text-gray-300 mb-4"></p>
          <a href="/services/pediatric" className="text-white underline">Learn more</a>
          <div className="absolute bottom-2 right-2 bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
