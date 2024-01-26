import React from 'react'
import Image from 'next/image'
import { search } from '../assets'

const Search = () => {
  return (
    <div className=' hidden lg:flex items-center gap-2 border dark:border-[#34CAA5] border-gray-900/30 pl-4 rounded-full max-w-[390px] w-[390px]  '>
      <Image src={search} alt='Search' className='' />
      <input type="text" placeholder='Search...' className='  bg-transparent py-3 rounded-full outline-none w-full ' />
    </div>
  )
}

export default Search