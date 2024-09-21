import React from 'react';
import LoginRegisterBox from '../components/LoginRegisterBox';
import BrandNameBox from '../components/BrandNameBox';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


import backgroundImage from '../assets/hero.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-seashell text-white">
      <header className="bg-black-blue-gradient p-4 pt-[40px] h-[90px] flex justify-around items-center">
        <BrandNameBox />
        <NavBar />
        <LoginRegisterBox />
      </header>

      <section className="flex justify-center pd-[20px] items-center h-screen bg-cover bg-center relative "
        style={{ backgroundImage: 'url("/path-to-hero-image.jpg")' }}>
        <div
          className="bg-opacity-80 p-12 mb-[120px] h-[800px] w-[1785px]  mt-[30px] rounded-lg shadow-lg text-center relative border-2 border-black"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='pt-[420px] text-left'>
            <h1 className="text-white text-8xl font-black mb-4 font-anton tracking-widest">
              <span>TAKE YOUR</span><br />
              <span>MEDICINES</span><br />
              <span>ON TIME</span>
            </h1>
          </div>
          <div className="absolute bottom-5 right-5">
            <Link to="/login">
              <div className="bg-peach text-black font-bold text-4xl w-[250px] h-[70px] flex items-center border-2 border-black justify-center rounded-lg">
                <span className="text-lg">Set Reminder</span>
              </div>
            </Link>
          </div>
        </div>
      </section>



      <section className="container ml-[60px] mb-[50px] grid grid-cols-1 md:grid-cols-4 gap-[285px]">
        {/* Box 1 */}
        <div className="bg-blue-300 w-[420px] p-1 rounded-lg shadow-lg text-center relative transition transform duration-300 ease-in-out border-2 border-black">
          <h1 className="font-anton text-black text-left text-6xl ml-[20px] mt-[20px] font-black mb-4 " >
            <span>MEDICINE</span><br />
            <span>REMINDER</span>
          </h1>
          <p className="text-black mb-4 text-left ml-[20px] font-bold">Book your doctor appointment effortlessly and prioritize your health today!</p>
          <a href="/" className="text-black underline mr-[290px]">Learn more</a>
          <div className="absolute bottom-6 right-6 bg-blue-600 w-[80px] h-[80px] flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-yellow-50 w-[420px] h-[500px] p-6 rounded-lg shadow-lg text-center relative transition transform duration-300 ease-in-out border-2 border-black">
          <h1 className="font-anton text-black text-left text-6xl ml-[20px] mt-[0px] font-black mb-4 " >
            <span>FIRST AID</span><br />
            <span>GUIDE</span>
          </h1>
          <p className="text-black mb-4 text-left ml-[20px] font-bold">Book your doctor appointment effortlessly and prioritize your health today!</p>
          <a href="/" className="text-black underline mr-[250px]">Learn more</a>
          <div className="absolute bottom-6 right-6 bg-blue-600 w-[80px] h-[80px] flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-purple-300 w-[420px] h-[500px] p-6 rounded-lg shadow-lg text-center relative transition transform duration-300 ease-in-out border-2 border-black">
          <h1 className="font-anton text-black text-left text-6xl ml-[20px] mt-[0px] font-black mb-4 " >
            <span>GET D-COUPANS</span><br />
            <span>ON MEDICINES</span>
          </h1>
          <p className="text-black mb-4 text-left ml-[20px] font-bold">Book your doctor appointment effortlessly and prioritize your health today!</p>
          <a href="/" className="text-black underline mr-[250px]">Learn more</a>
          <div className="absolute bottom-6 right-6 bg-blue-600 w-[80px] h-[80px] flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>

        {/* Box 4 */}
        <div className="bg-green-300 w-[420px] p-1 rounded-lg shadow-lg  relative transition transform duration-300 ease-in-out border-2 border-black">
          <h1 className="font-anton text-black text-left text-6xl ml-[20px] mt-[20px] font-black mb-4 " >
            <span>DOCTOR</span><br />
            <span>APPOINTMENT</span>
          </h1>

          <p className="text-black mb-4 text-left ml-[20px] font-bold">Book your doctor appointment effortlessly and prioritize your health today!</p>
          <a href="/" className="text-black underline ml-[20px]">Learn more</a>
          <div className="absolute bottom-6 right-6 bg-blue-600 w-[80px] h-[80px] flex items-center justify-center rounded-full">
            <span className="text-white text-lg">&#8594;</span> {/* Arrow icon */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
