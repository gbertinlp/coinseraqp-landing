import { IFeature } from '@/interfaces/feature';
import React, { FC } from 'react'
import CarouselApp from '../ui/carousel/Carousel';
import { carouselWall } from '@/config/carousels';

interface Props {
    features: IFeature[];
}

export const Features:FC<Props> = ({features}) => {
  return (
    <div className='py-32 md:py-40'>

        {/* Image Content - Carousel - OPTIONAL */}
        <div className='md:px-12 lg:px-24 mx-auto xl:hidden mb-16'>
          <CarouselApp images={carouselWall} />
        </div>

        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                features.map((feature) => {
                    return(
                      <div key={feature.id} className='text-center mx-auto'>
                        {/* Icon */}
                        <div className='flex justify-center text-orange-500'>{feature.icon}</div>
                        {/* Title */}
                        <h2 className='mt-4 text-lg font-semibold text-gray-900 dark:text-white'>{feature.title}</h2>
                        {/* Description */}
                        <p className='text-gray-600 dark:text-gray-300 mt-4'>{feature.description}</p>
                      </div>
                    )
                })
            }
        </div>
    </div>
  )
}