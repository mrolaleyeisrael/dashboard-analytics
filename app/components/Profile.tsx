import React from 'react'
import Image from 'next/image'
import { userImage } from '../assets'
import { arrowDown } from '../assets'

const Profile = () => {
  return (
    <div className='px-2 py-[6px] border flex items-center gap-2 rounded-full cursor-pointer '>

      <Image src={userImage} alt='Account Image' className=' rounded-full h-[38px] w-[38px] ' />

      <div className=' flex flex-col gap-0'>
        <h1 className=' font-semibold mb-0'>Israel Olaleye</h1>
        <p className=' text-sm '>mrolaleyeisrael@gmail.com</p>
      </div>
      <Image src={arrowDown} alt='arrow down' className=' cursor-pointer' />
    </div>
  )
}

export default Profile