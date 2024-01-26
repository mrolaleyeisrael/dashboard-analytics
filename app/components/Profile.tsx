import React from 'react'
import Image from 'next/image'
import { userImage } from '../assets'
import { arrowDown, arrowDown2 } from '../assets'
import { useTheme } from 'next-themes'

const Profile = () => {

  const { theme } = useTheme()
  return (
    <div className='md:px-2 pr-3 md:py-[6px] border dark:border-[#34CAA5]/50 flex items-center gap-2 rounded-full cursor-pointer  '>
      <Image src={userImage} alt='Account Image' className=' rounded-full lg:h-[38px] lg:w-[38px]  w-8 h-8 ' />

      <div className=' hidden lg:flex flex-col gap-0 dark:text-[#34CAA5]'>
        <h1 className=' font-semibold mb-0'>Israel Olaleye</h1>
        <p className=' text-sm '>mrolaleyeisrael@gmail.com</p>
      </div>
      {
        theme == 'dark' ?
          <Image src={arrowDown2} alt='arrow down' className=' cursor-pointer' /> : <Image src={arrowDown} alt='arrow down' className=' cursor-pointer' />
      }
    </div>
  )
}

export default Profile