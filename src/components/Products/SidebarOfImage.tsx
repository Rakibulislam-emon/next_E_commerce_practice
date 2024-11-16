import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavoriteBorder } from 'react-icons/md'

function SideBar() {
  return (
    <div className='absolute right-2 bottom-44 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40'>
      <button className='p-2 hover:bg-sky-600 hover:text-white duration-200'>
        <FiShoppingCart />
      </button>
      <button className='p-2 hover:bg-sky-600 hover:text-white border-y border-y-borderColor duration-200'>
        <LuEye />
      </button>
      <button className='p-2 hover:bg-sky-600 hover:text-white duration-200'>
        <MdFavoriteBorder />
      </button>
    </div>
  )
}

export default SideBar