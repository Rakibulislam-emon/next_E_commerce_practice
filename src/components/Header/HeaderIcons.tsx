"use client"
import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { StateType } from '../../../type'

function HeaderIcons() {
  const { cart, favorite } = useSelector((state: StateType) => state.shofy);
  const totalItems = cart.reduce((acc, item) => acc! + item.quantity!, 0);
  
 
  
  return (
    <>
      <Link href={'/favorite'} className='text-2xl relative'>
        <MdFavoriteBorder />
        <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center'>
          {
            favorite?.length > 0 ? favorite.length : 0
          }
        </span>
      </Link>
      <Link href={'/cart'} className='text-2xl relative'>
        <BiShoppingBag />
        <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-themeColor text-white rounded-full flex items-center justify-center'>
          {
            totalItems > 0 ? totalItems : 0

          }
        </span>
      </Link>
    </>
  )
}

export default HeaderIcons