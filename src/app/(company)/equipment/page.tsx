import { Equipment } from '@/components';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Equipamiento",
    description: "Dedicados a proveer servicios de Topografía - Geodesia - Batimetría - Fotogrametría y Minería",
  };

export default function EquipmentPage() {
  return (
    <div className='overflow-hidden'>
        <h1 className='mt-40 text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold'>
            Nuestro Equipamiento
        </h1>
        <span className='w-16 h-1 bg-orange-500 mx-auto mt-3 block mb-12'></span>
        <Equipment />
    </div>
  )
}
