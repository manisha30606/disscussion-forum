import React from 'react'
import Image  from 'next/image'
import Person from "../../Image/person.png" //IMPORT PHOTO
import { FaRegHeart } from "react-icons/fa"; //IMPORT ICONS
import { CiShare2 } from "react-icons/ci";//IMPORT ICONS
import { FaRegCommentAlt } from "react-icons/fa";//IMPORT ICONS
import { MdOutlineRemoveRedEye } from "react-icons/md";//IMPORT ICONS

const Forum = () => {
  return (
    <>
     {/* ========================= DISSSCUSSSION FORUM BOX ===================== */}
     <div className="discussion-box border border-gray-300 shadow-lg rounded-lg p-4 mt-6 ">
      <div className="box-info flex flex-row my-2">
        <div className="box-icon w-10 h-20">
          <Image src={Person}/>
        </div>
        <div className='box-data'>
          <div className="box-head flex flex-row justify-between">
            <h1 className='text-sm font-semibold pl-3 md:text-xl'>Lorem ipsum <span className=' md:text-sm text-xs font-normal bg-blue-700 text-[#fff] md:ml-6 ml-2 px-1 md:px-2 py-1 rounded-2xl'>Sector 2</span></h1>
            
            <p className=' md:text-sm text-xs text-blue-600'>2 min ago</p>
          </div>
          <h3 className="box-subdata pl-3 pt-1 text-xs sm:text-sm lg:text-xl">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. At totam eum quia quod illo sit? Lorem ipsum dolor sit.
          </h3>
          <div className=" mt-2 box-icons flex flex-row justify-between pl-3 pt-2">
           <h2 className='icon-data flex text-xs sm:text-sm font-semibold'><FaRegHeart className='sm:text-2xl text-sm mr-1'/>2k</h2>
           <h2 className='icon-data flex text-xs sm:text-sm font-semibold'><MdOutlineRemoveRedEye className='sm:text-2xl text-sm mr-1'/>2k</h2>
           <h2 className='icon-data flex text-xs sm:text-sm font-semibold'><FaRegCommentAlt className='sm:text-2xl text-sm mr-1'/>2k Comments</h2>
           <h2 className='icon-data flex text-xs sm:text-sm font-semibold'><CiShare2 className='sm:text-2xl text-sm mr-1'/> Share</h2>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Forum;
