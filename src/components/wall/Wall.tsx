import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import CarouselApp from '../ui/carousel/Carousel';
import { carouselWall } from '@/config/carousels';

export const Wall = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col bg-orange-500 bg_clip'>
        <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
          {/* Text Content */}
          <div>
            {/* Heading */}
            <h1 className='text-3xl md:text-4xl text-white text-center lg:text-5xl mt-6 mb-2 font-bold leading-[2.5rem] md:leading-[3.5rem]'>
              TOPOGRAFÍA AVANZADA PARA RESULTADOS EXACTOS
            </h1>
            {/* Sub heading */}
            <h2 className='text-lg md:text-xl text-slate-900 text-center lg:text-2xl mt-2 mb-8 font-ligth leading-[1.5rem] md:leading-[2.5rem]'>
            Topografía - Geodesia - Batimetría - Fotogrametría y Minería
            </h2>
            {/* Description */}
            <p className='text-sm sm:text-base md:text-lg font-medium text-gray-100'>
            Levantamientos topográficos con equipos de última generación (estaciones totales, GNSS, escáner láser 3D) para proyectos de construcción, lotizaciones, urbanizaciones y más. Precisión milimétrica en cada medición.
            </p>
            {/* Buttons */}
            <div className='mt-8 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0'>
              {/* First Button */}
              <Link href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-fit mx-auto">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-cyan-500 opacity-0 group-hover:opacity-100"></span>
                  <div className='flex justify-center'>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Cotiza Aquí</span>
                  </div>
              </Link>
              {/* Second Button */}
              <Link href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-green-400 border border-green-400 rounded-lg shadow-inner group w-fit mx-auto">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-green-500 opacity-0 group-hover:opacity-100"></span>
                  <div className='flex items-center space-x-2 justify-center'>
                    <BsWhatsapp className="relative w-5 h-5 transition-colors duration-300 delay-200 group-hover:text-white ease" />
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Contacto Directo</span>
                  </div>
              </Link>
            </div>
          </div>

          {/* Image Content - Carousel */}
          <div className='mx-auto hidden xl:block'>
            <CarouselApp images={carouselWall} />
          </div>
          
        </div>
    </div>
  )
}
