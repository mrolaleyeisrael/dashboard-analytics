import React from 'react'
import ProgressCard from './ProgressCard'

const Progress = () => {
  return (
    <div className=' h-full p-5 rounded-xl lg:col-span-4 bg-white border-gray-200/50 dark:bg-[#322929] dark:border-[#333]  '>
      <div className=' flex justify-between mb-4'>
        <p className=' text-lg'>Top Platform</p>
        <p className=' text-[#34CAA5] text-lg cursor-pointer '>See All</p>
      </div>

      <div className=' overflow-scroll '>
      <ProgressCard />
      </div>

    </div>
  )
}

export default Progress