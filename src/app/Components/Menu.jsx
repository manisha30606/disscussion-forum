'use client'
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";//IMPORT ICON
import { GoBellFill } from "react-icons/go";//IMPORT ICON
import { MdOutlineMessage } from "react-icons/md";//IMPORT ICON
import { RiMoneyDollarCircleFill } from "react-icons/ri";//IMPORT ICON
import { IoMdArrowDropdown, IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";//IMPORT ICONS

const Menu = () => {
  // ============== FOR OPENING AND CLOSING MENU ====================
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
     {/* ===================== MENU SECTION ==================== */}
      <div className="menu-container flex">
        {menuOpen && (
          <div className="menu-data sm:w-96 w-64 h-screen bg-blue-900 text-[#fff] transition-all duration-300">
            <div className="user-data flex flex-row border-b-2 border-gray-500 justify-between cursor-pointer py-4 px-4">
              <div className='user-subdata flex flex-row'>
                <FaUser className='user-icon sm:text-2xl text-xl mr-2'/>
                <h1 className="user-name sm:text-xl text-sm ">Hello,User</h1>
              </div>
              <h1 className='user-bell sm:text-2xl text-xl'><GoBellFill/></h1>
            </div>
            <div className="menu-list flex flex-col mt-4">
              <ul className="list-data sm:text-xl text-xs">
                <li className='list py-4 px-4 flex  bg-blue-950 '><MdOutlineMessage className='text-2xl mr-3'/>Disscussion Forum<IoMdArrowDropdown className='ml-24'/></li>
                <li className='list py-4 px-4 flex '><RiMoneyDollarCircleFill className='mr-4'/>Market Stories</li>
                <li className='list py-4 px-12'>Sentiment</li>
                <li className='list py-4 px-12'>Market</li>
                <li className='list py-4 px-12'>Sector</li>
                <li className='list py-4 px-12'>Watchlist</li>
                <li className='list py-4 px-12'>Events</li>
                <li className='list py-4 px-12'>News/Interview</li>
              </ul>
            </div>
          </div>
        )}

        {/* ================== MENU OPEN AND CLOSE ICON =================== */}
        <div className="open-icon my-80" onClick={toggleMenu}>
          {menuOpen ? (
            <div className="icon py-6 bg-blue-900 static">
              <IoMdArrowDropleft className='text-[#fff] text-2xl'/>
            </div>
          ) : (
            <div className="icon py-6 bg-blue-900 absolute">
              <IoMdArrowDropright className='text-[#fff] text-2xl'/>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
