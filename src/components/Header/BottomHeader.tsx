import React from 'react'

import { navigation } from '@/constants'
import Link from 'next/link'
import Container from '../Container'

function BottomHeader() {
  return (
    <div className='border-b border-b-gray-400'>
      <Container className='flex items-center justify-between py-1'>
        <div className='text-xs  md:text-sm font-medium flex mx-auto md:mx-0 items-center gap-4 md:gap-5'>
        {
          navigation?.map((item) => (
            <Link className='hover:text-themeColor duration-200' href={item?.href} key={item?.title}>{item?.title}</Link>
          ))}
          <Link className='hidden md:inline-flex text-xs hover:text-themeColor duration-200' href={'signin'}>Please SignIn To Viwe Your Carts</Link>
        </div>
        <p className='hidden md:inline-flex text-xs text-gray-400 font-medium'>HotLine <span className='text-black'>+88017298504092</span></p>
      </Container>
    </div>
  )
}

export default BottomHeader