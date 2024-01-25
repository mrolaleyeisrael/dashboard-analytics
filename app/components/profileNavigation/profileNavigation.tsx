import React from 'react'
import Search from '../Search'

import { bell, calendar } from '@/app/assets'
import Image from 'next/image'
import Profile from '../Profile'

const ProfileNavigation = () => {
  return (
    <div className=' w-full text-black bg-white md:px-5 px-3 md:py-[18px] py-3 border-b flex items-center justify-between absolute left-0 top-0 right-0 z-50  '>

      <h1>Dashboard</h1>

      <div className=' flex lg:gap-5 gap-2 items-center  '>
        <Search />

        {/* date */}
        <div className=' sm:flex hidden px-4 gap-[10px] '>
          <Image src={calendar} alt='Calendar' />
          <p>November 15, 2023</p>
        </div>

        
        <div className='  p-2 rounded-full border'>
          <Image src={bell} alt='Notification' className='' />
        </div>


        <Profile />
      </div>
    </div>
  )
}

export default ProfileNavigation