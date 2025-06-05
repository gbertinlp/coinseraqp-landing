import { ServicesCompany } from '@/config/services';
import { IReview } from '@/interfaces/review';
import { Metadata } from 'next';  
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

export const metadata: Metadata = {
    title: "Servicios",
    description: "Dedicados a proveer servicios de Topografía - Geodesia - Batimetría - Fotogrametría y Minería",
  };

export default async function Servicespage() {
  const services: IReview[] = ServicesCompany;

  return (
    <div className='overflow-hidden'>
      <h1 className='mt-40 text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold'>
          Nuestros Servicios
      </h1>
      <span className='w-16 h-1 bg-orange-500 mx-auto mt-3 block mb-12'></span>
      {
        services.map((service) => {
          return(
            <div 
              key={service.id}
              className='my-12 w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'
            >
              {/* Text Content */}
              <div>
                {/* Service */}
                <h3 className='text-xl lg:text-3xl  text-slate-800 dark:text-gray-100 text-center mt-6 mb-3 p-1 font-bold leading-[2.5rem] md:leading-[3.5rem] border-2 border-gray-200 dark:border-gray-300 rounded-md'>
                  { service.name }
                </h3>
                {/* Description */}
                <p className='text-sm sm:text-base md:text-lg font-medium text-slate-800 dark:text-gray-100 text-center'>
                  { service.description }
                </p>
                {/* Buttons */}
                <div className='mt-8 flex justify-end space-y-4 sm:space-y-0'>
                  {/* First Button */}
                  <Link href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-green-400 border border-green-400 rounded-lg shadow-inner group w-fit">
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
              <div className='mt-6'>
                <Image src={service.imageUrl} alt={service.imageUrl} width={400} height={400} className='object-center mx-auto rounded-lg'/>
              </div>
              
            </div>     
          )
        })
      }
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const services: IReview[] = ServicesCompany;

//   return {
//     props: {
//       services
//     },
//     revalidate: 86400 // cada 24hrs
//   }
// }
// El error ocurre porque estás usando el App Router de Next.js 13+ que tiene un nuevo sistema de fetching.
// "getStaticProps" is not supported in app/. Read more: https://nextjs.org/docs/app/building-your-application/data-fetching