
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { brightness, brightness2, moon, moon2, logo, settings, arrowRight, logout, blackCategory } from '@/app/assets'
import { NavigationItems, lowerNavigation } from '@/app/data/navigation'
import { NavigationItemsProp } from '@/app/data/navigation'
import { useTheme } from 'next-themes'


const Navigation = () => {
  const { theme, setTheme } = useTheme();

  console.log('Current Theme:', theme);


  return (

    <div className=' hidden lg:flex z-50 border-r dark:border-r-zinc-600/90 fixed h-screen md:w-[80px] justify-between flex-col bg-[#F7F8FA] dark:bg-zinc-900   '>
      <div className=' flex flex-col justify-center items-center px-3 pt-5'>

        {/* logo */}
        <Link href={'/'} className=' mb-5 '>
          <Image src={logo} alt='Logo' className=' h-12 w-12 ' />
        </Link>

        {/* nav items */}
        <div className=' flex flex-col justify-center items-center gap-4'>
          {NavigationItems.map((item: NavigationItemsProp) => (
            <div key={item.linkName} className=' z-50 py-2 w-full flex items-center justify-center '>
              {
                theme == 'dark' && item.linkName == "Category" ?
                  <Image src={blackCategory} alt={item.linkName} className=' h-8 w-8 cursor-pointer z-50  ' /> :
                  <Image src={item.icon} alt={item.linkName} className=' h-8 w-8 cursor-pointer  ' />
              }
            </div>
          ))}
        </div>

        {/* theme buttons */}
        <div className='flex flex-col justify-between items-center w-fit bg-white dark:bg-[#322929] p-1 rounded-full gap-4 mt-4 '>
          <div className={` p-1   rounded-full hover:bg-green-300/50 ${theme == 'light' ? 'bg-[#34CAA5]' : ''} `} onClick={() => setTheme('light')}>
            {
              theme == 'dark' ?
                <Image src={brightness2} alt='Light' className=' rounded-full p-1 h-8 w-8 cursor-pointer ' /> :
                <Image src={brightness} alt='Light' className=' rounded-full p-1 h-8 w-8 cursor-pointer ' />
            }
          </div>


          <div className={` ${theme == 'dark' ? 'bg-[#34CAA5]' : ''} p-1 rounded-full hover:bg-green-300/50 `} onClick={() => setTheme('dark')} >
            {
              theme == 'light' ? <Image src={moon} alt='Theme' className=' rounded-full p-1 cursor-pointer ' /> : <Image src={moon2} alt='Theme' className=' rounded-full p-1 cursor-pointer ' />
            }
          </div>
        </div>
      </div>

      <div className='  flex flex-col justify-center items-center gap-4 mb-5 '>
        {
          lowerNavigation.map((item) => (
            <div className=' p-2' key={item.linkName}>
              <Image src={item.icon} alt={item.linkName} className=' cursor-pointer ' />
            </div>
          ))

        }

      </div>


    </div>

  )
}

export default Navigation