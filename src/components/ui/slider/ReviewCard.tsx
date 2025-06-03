import { IReview } from '@/interfaces/review';
import Image from 'next/image';
import React, { FC } from 'react'
import { GrFolderCycle } from "react-icons/gr";

interface ReviewCardProps {
  review: IReview;
}

export const ReviewCard:FC<ReviewCardProps> = ({ review }) => {
  return (
    <div>
        <GrFolderCycle className='mx-auto w-14 h-14 text-orange-500'/>
        <h3 className='text-lg text-center text-gray-800 dark:text-gray-200 font-bold my-6'>{review.name}</h3>
        <div className='mt-6'>
          <Image src={review.imageUrl} alt={review.imageUrl} width={150} height={150} className='object-center mx-auto rounded-full'/>
        </div>
        <p className='text-center text-gray-600 dark:text-gray-400 font-light px-2 mt-4'>{review.description}</p>
    </div>
  )
}
