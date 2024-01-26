'use client'
import React from 'react'
import Search from '../Search'
import { bell, bell2, calendar, calendar2 } from '@/app/assets'
import Image from 'next/image'
import Profile from '../Profile'
import { useTheme } from 'next-themes'
import { CiMenuKebab } from "react-icons/ci";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

import { useStore, StoreState } from '@/app/store/store'



const ProfileNavigation = () => {

  const { toggleMenu } = useStore() as {
    toggleMenu: () => void;

  };
  const { openMenu }: StoreState = useStore() as StoreState;


  const { theme } = useTheme()
  return (
    <div className=' absolute w-full text-black dark:bg-zinc-900/90 bg-white md:px-5 px-3 md:py-[18px] py-3 border-b dark:border-b-zinc-600/90 flex items-center justify-between  top-0 z-50  '>

      <h1 className=' lg:pl-20  dark:text-[#34CAA5] text-black lg:text-xl ' >Dashboard</h1>

      <div className=' flex lg:gap-5 gap-2 items-center  '>
        <Search />

        {/* date */}
        <div className=' sm:flex hidden px-4 gap-[10px] dark:text-[#34CAA5] '>
          {
            theme == "dark" ? <Image src={calendar2} alt='Calendar' /> :
              <Image src={calendar} alt='Calendar' />
          }
          <p>November 15, 2023</p>
        </div>


        <div className='  hidden sm:block p-2 rounded-full border dark:border-[#34CAA5]/50 '>
          {
            theme == "dark" ?
              <Image src={bell2} alt='Notification' className=' h-4 w-4 lg:h-6 lg:w-6 ' /> :
              <Image src={bell} alt='Notification' className='h-4 w-4 lg:h-6 lg:w-6' />
          }
        </div>


        <Profile />

        <div className=' h-5 w-5'>

          {openMenu ? <RiMenuFoldLine className=' w-full h-full dark:text-[#34cca5] ' onClick={toggleMenu} /> :
            <RiMenuUnfoldLine className=' w-full h-full dark:text-[#34cca5] ' onClick={toggleMenu} />
          }

        </div>

      </div>
    </div>
  )
}

export default ProfileNavigation