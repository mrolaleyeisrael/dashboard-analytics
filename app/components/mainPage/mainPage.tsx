'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowDown } from '@/app/assets'
import ProfileNavigation from '../profileNavigation/profileNavigation'
import TransactionCard from '../TransactionCard'
import BarCharts from '../BarCharts'
import BarChartHeadings from '../BarChartHeadings'
import { useTheme } from 'next-themes'
import Table from '../Table'
import Progress from '../Progress'

const MainPage = () => {
  const { theme, setTheme } = useTheme()
  return (
    <section className=' overflow-scroll flex flex-col lg:pl-[80px]  w-full dark:bg-zinc-900 bg-[#fafafa] pb-32 z-10 '>

      <section className=' grid lg:grid-cols-9 grid-cols-1 gap-5 p-5 text-black lg:max-h-[600px] w-full md:pt-28 pt-20  '>

        {/* chart container  */}
        <div className='  w-full h-full lg:col-span-5 space-y-4 bg-white shadow-md rounded-[14px] nd:px-[20px] px-2 pt-4 border border-gray-100/90  '>

          <BarChartHeadings />

          <BarCharts />
        </div>

        <div className=' w-full lg:col-span-4 grid md:grid-cols-2 gap-4 h-fit '>
          <TransactionCard />
        </div>
      </section>

      <section className=' grid lg:grid-cols-9 grid-cols-1 w-full gap-5 px-5 lg:max-h-[450px] '>
        <Table />
        <Progress />
      </section>


    </section>
  )
}

export default MainPage