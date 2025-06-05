import Image from 'next/image';
import React from 'react'
import { GrAchievement, GrCertificate } from "react-icons/gr";

export const Strategy = () => {
  return (
    <div className='mt-40 w-full flex justify-center flex-col'>
        {/* Information 01 */}
        <div className='mb-24'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
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
                <div className='relative p-6 mx-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-50'>
                        <Image 
                            width={400}
                            height={400}
                            src='/images/background/coinseraqp-bgAbout_01.svg'
                            className='w-full h-full object-cover'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/coinseraqp_strategy_01.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl shadow-lg m-10 md:m-20 relative z-10'
                    />
                </div>
            </div>
        </div>

        {/* Information 02 */}
        <div className='mb-24'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* Image Content */}
                <div className='relative p-6 mx-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-50'>
                        <Image
                            width={400}
                            height={400} 
                            src='/images/background/coinseraqp-bgAbout_01.svg'
                            className='w-full h-full object-cover'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/coinseraqp_strategy_02.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl shadow-lg m-10 md:m-20 relative z-10'
                    />
                </div>

                {/* text content */}
                <div className='mt-6'>
                    {/* Title */}
                    
                    <div className='flex'>
                        <div className='p-3 rounded-full bg-cyan-400 text-white'><GrAchievement className='w-6 h-6' /></div>
                        <h1 className='ml-8 text-2xl my-auto sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                            MISIÓN
                        </h1>
                    </div>
                    {/* Definition */}
                    <div className='mt-4 ml-8'>
                        <div className='flex items-center mb-6 space-x-4'>
                            <div>
                                <p className='text-sm text-justify sm:text-start sm:text-base text-gray-600 dark:text-gray-300'>
                                    JJ COINSER AQP E.I.R.L., Empresa que brinda en la provincia de Arequipa y a Nivel Nacional, mediante una adecuada gestión técnica y administrativa los servicios de Ingeniería en los rubros de:  
                                </p>
                                <ul className='list-none space-y-2 ml-6 my-2'>
                                    <li className='flex items-center space-x-2'>
                                        <GrCertificate className='text-orange-400' />
                                        <span>GEOLOGÍA</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <GrCertificate className='text-orange-400' />
                                        <span>GEOTECNIA</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <GrCertificate className='text-orange-400' />
                                        <span>MEDIO AMBIENTE</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <GrCertificate className='text-orange-400' />
                                        <span>MINERÍA</span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <GrCertificate className='text-orange-400' />
                                        <span>
                                            GEOMÁTICA:
                                            <ul className='list-circle ml-6 mt-1'>
                                                <li>Geodesia</li>
                                                <li>Cartografía</li>
                                                <li>SIG</li>
                                                <li>Topografía</li>
                                            </ul>
                                        </span>
                                    </li>
                                    <li className='flex items-center space-x-2'>
                                        <GrCertificate className='text-orange-400' />
                                        <span>
                                            ALQUILER DE EQUIPOS DE TOPOGRAFÍA:
                                            <ul className='list-circle ml-6 mt-1'>
                                                <li>Venta y mantenimiento</li>
                                                <li>Ajuste calibración</li>
                                                <li>Certificación de equipos geodésicos y topográficos</li>
                                            </ul>
                                        </span>
                                    </li>
                                </ul>
                                <p className='text-sm text-justify sm:text-start sm:text-base text-gray-600 dark:text-gray-300'>
                                    Participar activamente en los sectores de la minería Artesanal, Pequeña Minería y Mediana Minería en el asesoramiento técnico legal dando fiel cumplimiento a los derechos y obligaciones que se emanan del Ministerio de Energía y Minas - 
                                    Ingemmet - Gerencia Regional de Energía y Minas Gobierno Regional Arequipa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Information 03 */}
        <div className=''>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* Image Content */}
                <div className='relative p-6 mx-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-50'>
                        <Image
                            width={400}
                            height={400} 
                            src='/images/background/coinseraqp-bgAbout_01.svg'
                            className='w-full h-full object-cover'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/coinseraqp_strategy_03.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl shadow-lg m-10 md:m-20 relative z-10'
                    />
                </div>
                
                {/* text content */}
                <div className='mt-6'>
                    {/* Title */}
                    
                    <div className='flex'>
                        <div className='p-3 rounded-full bg-cyan-400 text-white'><GrAchievement className='w-6 h-6' /></div>
                        <h1 className='ml-8 text-2xl my-auto sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                            VISIÓN
                        </h1>
                    </div>
                    {/* Definition */}
                    <div className='mt-4 ml-8'>
                        <div className='flex items-center mb-6 space-x-4'>
                            <div>
                                <p className='text-sm text-justify sm:text-start sm:text-base text-gray-600 dark:text-gray-300'>
                                    JJ COINSER AQP E.I.R.L., es una organización moderna y competitiva, reconocida por su liderazgo en los servicios que ofrece acorde con la Tecnología de Punta, 
                                    contribuyendo de manera integral, participativa, inclusiva y sostenible en los Servicios que brinda.  
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