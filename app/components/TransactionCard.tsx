import React from 'react'
import Image from 'next/image'
import { trendUp, greenTrend, cart, downTrend } from '../assets'

import { totals } from '../data/dataTotal'



const TransactionCard = () => {
  return (
    <>
      {totals.map((total) => (
        <div key={total.digit} className=' h-fit p-4 rounded-[14px] flex flex-col gap-[10px] border border-gray-200/50 dark:border-[#333] bg-white dark:bg-[#322929] shadow-md '>

          <div className='flex justify-between'>
            <p className=' p-2 rounded-full border border-[#E6E6E6] w-fit '>
              <Image src={total.icon} alt='icon' className='' />
            </p>

            <div className='  '>
              <Image src={total.chart} alt='chart' className=' h-full' />
            </div>
          </div>
          <div className=' space-y-[5px]'>
            <h1 className=' text-lg text-[#898989]'>Total Refund</h1>
            <p className=' dark:text-white font-semibold text-2xl'>{total.digit}</p>
          </div>
          <div className=' flex justify-between '>

            {total.trend == greenTrend ? (
              <div className=' rounded-full flex gap-1 bg-[#34CAA5]/40 px-2 py-1 '>
                <Image src={greenTrend} alt="trend direction" className='' />

                <p className=' text-[#34CAA5]'>23.5%</p>

                {/* [#34CAA5] ED544E  */}
              </div>
            ) : (
              <div className=' rounded-full flex gap-1 bg-[#ED544E]/40 px-2 py-1 '>
                <Image src={downTrend} alt="trend direction" className='' />

                  <p className=' text-[#ED544E]'>23.5%</p>

                {/* [#34CAA5] ED544E  */}
              </div>
            )

            }
            <p className=' font-normal text-[#606060] '>vs. previous month</p>

          </div>
        </div >

      ))



      }
    </>

  )
}

export default TransactionCard