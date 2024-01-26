import React from 'react'
import { ArrowDown, arrowDown2 } from '../assets'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const BarChartHeadings = () => {
  const { theme } = useTheme()
  return (
    <div className=' flex justify-between'>
      <p className=' text-lg font-medium dark:text-white   '>Sales Trend</p>

      <div className=' flex items-center gap-3'>
        <p className=' text-sm font-medium hidden dark:text-white sm:block'>Sort by:</p>
        <button className=' flex items-center space-x-[10px] px-3 py-[6px] rounded-full border '>
          <span className=' dark:text-white   ' >Weekly</span>
          {
            theme == 'dark' ?
              <Image src={ArrowDown} alt='Drop Down Arrow' />
              : <Image src={arrowDown2} alt='Drop Down Arrow' />
          }

        </button>
      </div>
    </div>)
}

export default BarChartHeadings