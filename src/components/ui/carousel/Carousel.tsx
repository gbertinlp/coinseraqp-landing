'use client';
import { ICarouselImage } from '@/interfaces/carousel';
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



interface CarouselProps {
  images: ICarouselImage[];
}

const CarouselApp: React.FC<CarouselProps> = ({images}) => {

  return (
    <Carousel 
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        className='rounded-lg shadow-lg'
    >
        {
            images.map((image) => {
                return(
                    <div key={image.id} className='w-full h-full'>
                        <Image
                            src={image.path}
                            width={400}
                            height={400}
                            alt={image.title || 'coinseraqp-wall'}
                            className='shadow-lg rounded-tr-3xl rounded-bl-3xl'
                            />
                    </div>
                )
            })
        }
        
        
    </Carousel>
  )
}

export default CarouselApp