import React from 'react'
import { useStore, StoreState } from '../store/store'


const ProfileMenu = () => {
  const { toggleProfileMenu } = useStore() as StoreState
  return (
    <div className=' transition-all duration-300 absolute top-0 bottom-0 left-0 right-0 w-full bg-white/20 ' onClick={toggleProfileMenu}>

      <div className=' grid grid-cols-1 gap-2 p-5 absolute lg:top-[100px] top-[65px] sm:top-[85px] z-40 w-[200px] right-8 rounded-lg bg-zinc-900/90   '>

        <div className=' p-2 border border-gray-300/50 rounded-lg  hover:bg-green-50/30 '>Home</div>
        <div className=' p-2 border border-gray-300/50  rounded-lg  hover:bg-green-50/30'>Home</div>
        <div className=' p-2 border border-gray-300/50 rounded-lg  hover:bg-green-50/30 '>Home</div>
        <div className=' p-2 border border-gray-300/50  rounded-lg  hover:bg-green-50/30'>Home</div>
      </div>
    </div>
  )
}

export default ProfileMenu