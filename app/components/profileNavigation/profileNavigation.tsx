import React from 'react'
import Search from '../Search'

import { bell, calendar } from '@/app/assets'
import Image from 'next/image'
import Profile from '../Profile'

const ProfileNavigation = () => {
  return (
    <div className=' w-full text-black bg-white px-5 py-[18px] border-b flex items-center justify-between  '>

      <h1>Dashboard</h1>

      <div className=' flex gap-5 items-center '>
        <Search />

        {/* date */}
        <div className=' flex px-4 gap-[10px] '>
          <Image src={calendar} alt='Calendar' />
          <p>November 15, 2023</p>
        </div>

        
        <div className=' p-2 rounded-full border'>
          <Image src={bell} alt='Notification' className='' />
        </div>


        <Profile />
      </div>
    </div>
  )
}

export default ProfileNavigation