import Image from 'next/image';
import React from 'react'
import { GrAchievement } from "react-icons/gr";

export const Strategy = () => {
  return (
    <div className='mt-40 w-full flex justify-center flex-col'>
        {/* Information 01 */}
        <div className='mb-24'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 pag-12'>
                {/* text content */}
                <div className='mt-6'>
                    {/* Title */}
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                        QUIENES SOMOS
                    </h1>
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                            <div className='p-3 flex items-center justify-center flex-col rounded-full bg-cyan-400 text-white'><GrAchievement className='w-6 h-6' /></div>
                            <p className='text-sm text-justify sm:text-start sm:text-base text-gray-600 dark:text-gray-300'>
                                Somos una empresa dedicada a proveer servicios en todo el ámbito de la topografía, geodesia, batimetría y fotogrametría, y también a la venta, calibración y reparación de productos de esta misma. <br />
                                Nuestra preocupación es siempre satisfacer las necesidades de nuestros clientes cumpliendo con sus estándares, expectativas y colaborando eficazmente para que este cumpla sus metas y objetivos en sus plazos trazados.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className='relative p-6 mx-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950  dark:from-gray-100 dark:to-gray-200'>
                    <Image
                        src='/images/coinseraqp_strategy_01.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl shadow-lg mx-10 relative z-10'
                    />
                    <div className='absolute inset-0 bg-[#ebf4ff] mix-blend-multiply rounded-xl' />
                </div>
            </div>
        </div>

        {/* Information 02 */}
        <div className=''>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 pag-12'>
                {/* Image Content */}
                <div className='relative p-6 mx-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950  dark:from-gray-100 dark:to-gray-200'>
                    <Image
                        src='/images/coinseraqp_strategy_01.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl shadow-lg mx-10 relative z-10'
                    />
                    <div className='absolute inset-0 bg-[#ebf4ff] mix-blend-multiply rounded-xl' />
                </div>
                {/* text content */}
                <div className='mt-6'>
                    {/* Title */}
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                        MISIÓN
                    </h1>
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                            <div className='p-3 flex items-center justify-center flex-col rounded-full bg-cyan-400 text-white'><GrAchievement className='w-6 h-6' /></div>
                            <div>
                                <p className='text-sm text-justify sm:text-start sm:text-base text-gray-600 dark:text-gray-300'>
                                    JJ COINSER AQP E.I.R.L., Empresa que brinda en la provincia de Arequipa y a Nivel Nacional, mediante una adecuada gestión técnica y administrativa los servicios de Ingeniería en los rubros de:  
                                </p>
                                <ul className='list-disc space-y-2 ml-6 my-2'>
                                    <li>GEOLOGÍA</li>
                                    <li>GEOTECNIA</li>
                                    <li>MEDIO AMBIENTE</li>
                                    <li>MINERÍA</li>
                                    <li>GEOMÁTICA:
                                        <ul className='list-circle ml-6 mt-1'>
                                            <li>Geodesia</li>
                                            <li>Cartografía</li>
                                            <li>SIG</li>
                                            <li>Topografía</li>
                                        </ul>
                                    </li>
                                    <li>ALQUILER DE EQUIPOS DE TOPOGRAFÍA:
                                        <ul className='list-circle ml-6 mt-1'>
                                            <li>Venta y mantenimiento</li>
                                            <li>Ajuste calibración</li>
                                            <li>Certificación de equipos geodésicos y topográficos</li>
                                        </ul>
                                    </li>
                                </ul>
                                <p className='text-sm text-justify sm:text-start sm:text-base text-gray-600 dark:text-gray-300'>
                                    Participa activamente en los sectores de la minería Artesanal, Pequeña Minería y Mediana Minería en el asesoramiento técnico legal dando fiel cumplimiento a los derechos y obligaciones que se emanan del Ministerio de Energía y Minas - 
                                    Ingemmet - Gerencia Regional de Energía y Minas Gobierno Regional Arequipa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}