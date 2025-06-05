import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

export const Phrase = () => {
  return (
    <div className='my-24 overflow-hidden'>
      <h4 className='text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold'>
          En nuestras palabras
      </h4>
      <span className='w-16 h-1 bg-orange-500 mx-auto mt-3 block mb-12'></span>
      <div className='my-12 w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2'>
        {/* Image Content */}
        {/* Fondo SVG */}
        <div className='relative'>
            <div className='absolute inset-0 z-0'>
                <Image 
                    width={400}
                    height={400}
                    src='/images/background/coinseraqp-bgCeoprofile_01.svg'
                    className='w-full h-full object-contain'
                    alt='Fondo texturizado'
                />
            </div>

            <Image
                src='/images/coinseraqp_ceo-profile_1.png'
                width={400}
                height={400}
                alt='Quienes-Somos-Coinseraqp'
                className='rounded-xl mx-20 relative z-10'
            />
        </div>
        {/* Text Content */}
        <div>
            {/* Service */}
            <h3 className='text-xl lg:text-3xl  text-slate-800 dark:text-gray-100 text-center mt-6 mb-3 p-1 font-bold leading-[2rem] md:leading-[2.5rem]'>
                Cada dato, cada proyecto y cada cliente son parte de nuestro compromiso
            </h3>
            {/* Description */}
            <p className='text-sm font-medium text-slate-800 dark:text-gray-100 text-center'>
                &quot;Como Gerente General de CoinserAQP, les aseguro que no hay desafío topográfico, geodésico o minero que no podamos resolver. Contamos con la tecnología más avanzada del mercado para entregar resultados exactos, rápidos y con validez legal.&quot;
            </p>
            {/* Buttons */}
            <div className='mt-8 flex justify-start space-y-4 sm:space-y-0'>
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

      </div>
    </div>
  )
}
