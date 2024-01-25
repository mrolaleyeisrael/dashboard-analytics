import React from 'react'
import Image from 'next/image'
import { ArrowDown } from '@/app/assets'
import ProfileNavigation from '../profileNavigation/profileNavigation'
import TransactionCard from '../TransactionCard'
import BarCharts from '../BarCharts'
import BarChartHeadings from '../BarChartHeadings'

const MainPage = () => {
  return (
    <section className='  relative w-full '>
      <ProfileNavigation />

      <section className=' p-5 text-black flex flex-col h-full overflow-scroll w-full md:pt-28 pt-20  '>
        <div className=' grid lg:grid-cols-9 gap-5'>

          {/* chart container  */}
          <div className='  w-full lg:col-span-5 space-y-4 bg-white shadow-md h-full rounded-[14px] nd:px-[20px] px-2 pt-4 border border-gray-100/90  '>

           <BarChartHeadings />

            <BarCharts />
          </div>

          <div className=' w-full lg:col-span-4 grid md:grid-cols-2 gap-4 h-fit '>
            <TransactionCard />
          </div>
        </div>
      </section>




    </section>
  )
}

export default MainPage