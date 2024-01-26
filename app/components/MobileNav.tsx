import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { blackCategory } from '../assets'
import { moon, moon2, brightness, brightness2 } from '../assets'


import { NavigationItems, lowerNavigation, themeNavigation, themeNavigation2 } from '../data/navigation'

const MobileNav = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className=' absolute md:top-[82px] top-[58px] justify-center items-center left-0 lg:hidden grid grid-cols-3 gap-3 bg-[#F7F8FA]/95 dark:bg-zinc-900/90 w-full p-5 z-40 '>


      {NavigationItems.map((item) => (

        <>
          {theme == 'dark' && item.linkName == "Category" ?
            <div key={item.linkName} className=' py-4 w-full flex flex-col items-center justify-center '>

              <Image src={blackCategory} alt={item.linkName} className=' h-14 w-14 cursor-pointer z-50 mb-4  ' />
              <p>{item.linkName}</p>

            </div> : <div key={item.linkName} className=' py-4 w-full flex flex-col items-center justify-center '>
              <Image src={item.icon} alt={item.linkName} className=' h-14 w-14 cursor-pointer mb-4  ' />
              <p>{item.linkName}</p>

            </div>
          }
        </>
      ))}


      {
        lowerNavigation.map((item) => (
          <div key={item.linkName} className=' py-4 w-full flex flex-col items-center justify-center ' >
            <Image src={item.icon} alt={item.linkName} className=' cursor-pointer h-14 w-14 mb-4 ' />
            <p>{item.linkName}</p>
          </div>
        ))

      }

      {
        theme == "Light" ?

          <>
            {
              themeNavigation.map((item) => (
                <div key={item.linkName} className=' py-4 w-full flex flex-col items-center justify-center ' >
                  <Image src={item.icon} alt={item.linkName} className=' cursor-pointer h-14 w-14 mb-4 ' />
                  <p>{item.linkName}</p>
                </div>
              ))

            }
          </>
          :

          <>
            {themeNavigation2.map((item) => (
              <div key={item.linkName} className=' py-4 w-full flex flex-col items-center justify-center ' >
                <Image src={item.icon} alt={item.linkName} className=' cursor-pointer h-14 w-14 mb-4 ' />
                <p>{item.linkName}</p>
              </div>
            ))}
          </>
      }

    </div>
  )
}

export default MobileNav