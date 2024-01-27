import React from 'react'
import Image from 'next/image'
import { userImage } from '../assets'
import { orderData } from '../data/lastOrders'
import { useModalStore } from "../store/store";

const Table = () => {
  return (
    <div className=' h-fit overflow-auto lg:col-span-5 bg-white dark:bg-[#322929] p-5 rounded-xl  border-gray-200/50 dark:border-[#333]  ' >

      <div className=' flex w-full grow-0 justify-between mb-4'>
        <p className=' text-lg'>Last Orders</p>
        <p className=' text-[#34CAA5] text-lg cursor-pointer '>See All</p>
      </div>
      <table className="w-full table-auto overflow-x-auto">
        <thead className='text-left text-gray-400 font-normal sr-only'>
          <tr>
            <th>Song</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody className='py-5'>

          {
            orderData.map((order) => (
              <tr key={order.buyer} className='py-5 text-[#737373] dark:text-white/80 border-b'>
                <td className='px-4 py-3 flex items-center gap-[10px] mr-5 whitespace-nowrap'>
                  <Image src={order.image} alt='user image' className='h-10 w-10 rounded-full' />
                  {order.buyer}
                </td>
                <td className='px-4 py-3 whitespace-nowrap '>{order.date}</td>
                <td className='px-4 py-3 text-black dark:text-white/90'>{order.amount}</td>
                <td className={`${order.status == "Refund" ? 'text-[#ED544E]' : 'text-[#34CAA5]'} px-4 py-3`}>{order.status}</td>
                <td className='px-4 py-3'>View</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default Table