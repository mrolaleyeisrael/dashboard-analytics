import React from 'react'
import Image from 'next/image'
import { brightness, moon, logo, settings, arrowRight, logout } from '@/app/assets'
import { NavigationItems, lowerNavigation } from '@/app/data/navigation'
import { NavigationItemsProp } from '@/app/data/navigation'





const Navigation = () => {
  return (
    <div className=' md:h-screen' >

      <div className=' h-full flex justify-between flex-col bg-[#F7F8FA]  '>
        <div className=' flex flex-col justify-center items-center'>

          {/* logo */}
          <div className=' p-5 '>
            <Image src={logo} alt='Logo' className=' ' />
          </div>

          {/* nav items */}
          <div className=' flex flex-col justify-center items-center gap-4'>
            {NavigationItems.map((item: NavigationItemsProp) => (
              <div key={item.linkName} className=' py-2 w-full flex items-center justify-center '>
                <Image src={item.icon} alt={item.linkName} className=' h-8 w-8 cursor-pointer  ' />
              </div>
            ))}
          </div>

          {/* theme buttons */}
          <div className='flex flex-col justify-between items-center w-fit bg-white p-1 rounded-full gap-4 mt-4 '>
            <div className=' p-1 bg-[#34CAA5] rounded-full '>

              <Image src={brightness} alt='Light' className=' bg-[#34CAA5]  rounded-full p-1 h-8 w-8 cursor-pointer ' />
            </div>

            <div className=' p-1 rounded-full '>
              <Image src={moon} alt='Dark' className=' rounded-full p-1 cursor-pointer ' />
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

    </div>

  )
}

export default Navigation