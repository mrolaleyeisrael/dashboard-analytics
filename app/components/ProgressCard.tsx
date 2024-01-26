import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'


const platForms = [
  {
    color: '#6160DC',
    text: 'Book Bazaar',
    price: '$2,500,000',
    percent: '+15%',
    completed: 60
  },
  {
    color: '#54C5EB',
    text: 'Artisan Aisle',
    price: '$1,800,000',
    percent: '+10%',
    completed: 40
  },

  {
    color: '#FFB74A',
    text: 'Toy Troop',
    price: '$1,200,000',
    percent: '+8%',
    completed: 30
  },

  {
    color: '#6160DC',
    text: 'XStore',
    price: '$600,000',
    percent: '+5%',
    completed: 20
  },
]
const ProgressCard = () => {
  return (
    <div className=' flex flex-col gap-5 '>
      {
        platForms.map((platform) => (
          <div key={platform.color} className=' w-full flex flex-col gap-4 '>
            <p className=' font-semibold lg:text-lg text-[#22242C] dark:text-white/80 '>{ platform.text }</p>


            <ProgressBar height='12px' isLabelVisible={false} completed={platform.completed} bgColor={platform.color} />


            <div className='text-[#525252] dark:text-white/70 flex justify-between w-full'>
              <p>{platform.price}</p>
              <p>{platform.percent}</p>
            </div>
          </div>

        ))
      }

    </div>
  )
}

export default ProgressCard