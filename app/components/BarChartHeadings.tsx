import React from 'react'
import { ArrowDown } from '../assets'
import Image from 'next/image'

const BarChartHeadings = () => {
  return (
    <div className=' flex justify-between'>
      <p className=' text-lg font-medium'>Sales Trend</p>

      <div className=' flex items-center gap-3'>
        <p className=' text-sm font-medium hidden sm:block'>Sort by:</p>
        <button className=' flex items-center space-x-[10px] px-3 py-[6px] rounded-full border '>
          <span>Weekly</span>
          <Image src={ArrowDown} alt='Drop Down Arrow' />

        </button>
      </div>
    </div>  )
}

export default BarChartHeadings