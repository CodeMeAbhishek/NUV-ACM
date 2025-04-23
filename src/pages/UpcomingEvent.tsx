import React from 'react';
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";
import logo from "../assets/Frame 4.png";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";

function UpcomingEvent() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-30">
        <AnimatedGridPattern
          repeatDelay={2}
          width={100}
          height={100}
          numSquares={5}
          className=""
        />
      </div>
      {/* Header */}
      <div className="z-50 m-0 flex items-center justify-between h-24 bg-black mb-10">
        <div className="logo bg-black">
          <img className="rounded-2xl" src={logo} height={400} width={470} />
        </div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-8 font-aleo">Upcoming Event</h1>
        
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200 font-aleo">
          
          <h2 className="text-3xl font-semibold text-black mb-6 text-center">Technology changing the Global Landscape</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="/assets/david_migdal.jpg" 
                alt="Mr. David Migdal" 
                className="rounded-lg shadow-md object-cover w-48 h-48 md:w-full md:h-auto border border-gray-300"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-2"><span className="font-bold">Guest Speaker:</span> Mr. David Migdal</p>
              <p className="text-lg mb-2"><span className="font-bold">Designation:</span> Global CTO, Tntra</p>
              <p className="text-lg mb-2"><span className="font-bold">Organized by:</span> Computer Science & Engineering</p>
              <p className="text-lg mb-4"><span className="font-bold">Collaboration:</span> FutureTech Edge - collaboration between Navrachana University and Promact</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-gray-300 pt-6">
            <div>
              <p className="font-semibold text-red-700 text-lg">Date</p>
              <p className="text-xl font-bold">24<sup>th</sup> April, 2025</p>
              <p className="text-md text-gray-600">Thursday</p>
            </div>
            <div>
              <p className="font-semibold text-red-700 text-lg">Time</p>
              <p className="text-xl font-bold">2:30 PM onwards</p>
            </div>
            <div>
              <p className="font-semibold text-red-700 text-lg">Venue</p>
              <p className="text-xl font-bold">NUV Auditorium</p>
              <p className="text-md text-gray-600">5<sup>th</sup> Floor, Block A</p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UpcomingEvent;