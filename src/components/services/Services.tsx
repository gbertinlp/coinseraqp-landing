import React from 'react'
import { ReviewSlider } from '../ui/slider/ReviewSlider'
import { ServicesCompany } from '@/config/services'

export const Services = () => {
  return (
    <div className='py-16'>
        <h2 className='text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold'>
            Nuestros Servicios
        </h2>
        <span className='w-16 h-1 bg-orange-500 mx-auto mt-3 block'></span>
        <div className='w-[90%] sm:w-[80%] lg:w-[70%] mx-auto mt-16'>
          {/* Slider */}
          <ReviewSlider reviews={ServicesCompany} />
        </div>
    </div>
  )
}
