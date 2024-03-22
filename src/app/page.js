"use client"
import Menu from './Components/Menu'; //IMPORT MENU COMPONENT
import Forum from './Components/Forum'; //IMPORT FORUM COMPONENT
import Market from './Components/Market'; //IMPORT MENU COMPONENT
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [activeSection, setActiveSection] = useState('discussion'); // State to track active section
  const [isSmallScreen, setIsSmallScreen] = useState(false); // State to track screen size
  const [clickedHeading, setClickedHeading] = useState(null); // State to track clicked heading

  // Function to handle click on Discussion heading
  const handleDiscussionClick = () => {
    if (isSmallScreen) {
      setActiveSection('discussion');
      setClickedHeading('discussion');
    }
  };

  // Function to handle click on Market heading
  const handleMarketClick = () => {
    if (isSmallScreen) {
      setActiveSection('market');
      setClickedHeading('market');
    }
  };

  // Effect to detect screen size and update isSmallScreen state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 627); // Adjusted threshold to 627px
    };

    // Initial call to handleResize to set initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* =============MAIN CONTAINER============= */}
      <div className="main flex flex-row">
        <div className=''><Menu /></div>
        <div className='flex flex-col'>
          <div className="flex flex-row">
            <h1
              className={`sm:w-[70%] w-[50%] sm:text-2xl text-sm md:text-xl sm:ml-4 ml-0 px-2 py-2 sm:text-red-700 text-[#fff] ${isSmallScreen ? (activeSection === 'discussion' || clickedHeading === 'discussion' ? 'bg-blue-950' : 'bg-blue-900') : 'bg-slate-200'}`}
              onClick={handleDiscussionClick} // Always attach click handler
            >
              DISCUSSION FORUM
            </h1>
            <h1
              className={`sm:w-[30%] w-[50%] sm:text-2xl text-sm md:text-xl sm:ml-16 ml-0 px-2 py-2 sm:text-red-700 text-[#fff] ${isSmallScreen ? (activeSection === 'market' || clickedHeading === 'market' ? 'bg-blue-950' : 'bg-blue-900') : 'bg-slate-200'}`}
              onClick={handleMarketClick} // Always attach click handler
            >
              MARKET STORIES
            </h1>
          </div>
          <div className='flex flex row'>
            {/* ===============DISSCUSSION FORUM SECTION ================= */}
            <div className={`flex flex-col sm:max-w-[70%] max-w-full ${activeSection === 'discussion' || !isSmallScreen ? 'block' : 'hidden'}`}>
              <Forum />
              <Forum />
              <Forum />
              <Forum />
            </div>
            {/* =====================MARKET STORIES SECTION==================== */}
            <div className={`flex flex-col sm:max-w-[30%] sm:ml-12 ml-2 max-w-full ${activeSection === 'market' || !isSmallScreen ? 'block' : 'hidden'}`}>
              <Market />
              <Market />
              <Market />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;
