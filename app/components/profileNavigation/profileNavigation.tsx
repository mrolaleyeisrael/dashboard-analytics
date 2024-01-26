'use client'
import React from 'react'
import Search from '../Search'
import { bell, bell2, calendar } from '@/app/assets'
import Image from 'next/image'
import Profile from '../Profile'
import { useTheme } from 'next-themes'

const ProfileNavigation = () => {
  const { theme } = useTheme()
  return (
    <div className=' w-full text-black dark:bg-zinc-900 bg-white md:px-5 px-3 md:py-[18px] py-3 border-b dark:border-b-zinc-900/30 flex items-center justify-between  left-0 top-0 right-0 z-50  '>

      <h1 className='  dark:text-[#34CAA5] text-black text-xl ' >Dashboard</h1>

      <div className=' flex lg:gap-5 gap-2 items-center  '>
        <Search />

        {/* date */}
        <div className=' sm:flex hidden px-4 gap-[10px] dark:text-[#34CAA5] '>
          <Image src={calendar} alt='Calendar' />
          <p>November 15, 2023</p>
        </div>


        <div className='  p-2 rounded-full border dark:border-[#34CAA5]/50 '>
          {
            theme == "dark" ?
              <Image src={bell2} alt='Notification' className='' /> :
              <Image src={bell} alt='Notification' className='' />
          }
        </div>


        <Profile />
      </div>
    </div>
  )
}

export default ProfileNavigation