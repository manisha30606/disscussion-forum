import React from 'react'
import Image from 'next/image'
import Photo from "../../Image/photo.jpg"//IMPORT PHOTO
const Market = () => {
  return (
    <>
    {/* ==========================MARKET STORIES BOX ===================== */}
      <div className="market-box mt-4 ml-8 border-gray-300 border rounded-xl ">
        <div className="box-img w-full h-48">
          <Image src={Photo} className='w-full h-full'/>
        </div>
        <div className="box-data p-2">
          <h1 className='head text-xs sm:text-sm md:text-xl font-bold'>The Coldset Sunset</h1>
          <p className='para md:text-sm text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam exercitationem magnam nobis vero, fugit veritatis accusamus debitis officia vel.</p>
        </div>
      </div>

    </>
  )
}

export default Market;