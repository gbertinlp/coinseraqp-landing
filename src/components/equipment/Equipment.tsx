import Image from 'next/image'
import React from 'react'
import { GrLineChart } from "react-icons/gr";

export const Equipment = () => {
  return (
    <div className='w-full flex justify-center flex-col'>
        {/* Information 01 */}
        <div className='mb-12'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* text content */}
                <div className='bg-gray-100 px-4 md:px-10 py-2 md:py-6 border dark:text-slate-900'>
                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-bold'>
                        DRONES TOPOGRÁFICOS (DJI M300, Phantom 4 RTK, WingtraOne)
                    </h3>
                    {/* Línea divisoria */}
                    <hr className='my-4 border-t-2 border-gray-200 dark:border-gray-300 mx-auto' />
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                        <ul className='list-none space-y-2 ml-6 my-2'>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Precisión centimétrica con PPK/RTK para fotogrametría y LiDAR</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Autonomía extendida (hasta 60 min de vuelo) y resistencia a condiciones extremas</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Software especializado (Pix4D, DroneDeploy) para procesamiento rápido de datos</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Aplicaciones: Mapeo minero, agricultura de precisión, inspección de infraestructuras</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className='relative p-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-20'>
                        <Image
                            width={400}
                            height={400} 
                            src='/images/background/coinseraqp-bgEquipment_01.svg'
                            className='w-full h-full object-cover md:px-4'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/equipment/coinseraqp-equipment_01.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl sm:mx-auto relative z-10'
                    />
                </div>
            </div>
        </div>
        {/* Information 02 */}
        <div className='mb-12'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* text content */}
                <div className='bg-gray-100 px-4 md:px-10 py-2 md:py-6 border dark:text-slate-900'>
                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-bold'>
                        GPS DIFERENCIAL TRIMBLE R8-R10 (GNSS de Alta Precisión)
                    </h3>
                    {/* Línea divisoria */}
                    <hr className='my-4 border-t-2 border-gray-200 dark:border-gray-300 mx-auto' />
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                        <ul className='list-none space-y-2 ml-6 my-2'>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Exactitud 1cm+1ppm con tecnología Multi-Band y RTK/PPK</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Conectividad total: Bluetooth, radio UHF, red NTRIP para correcciones en tiempo real</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Resistencia IP68 y autonomía de 12+ horas (batería doble)</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Incluye: TSC7 Controller con Trimble Access y licencias de software</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className='relative p-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-20'>
                        <Image
                            width={400}
                            height={400} 
                            src='/images/background/coinseraqp-bgEquipment_01.svg'
                            className='w-full h-full object-cover md:px-4'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/equipment/coinseraqp-equipment_02.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl sm:mx-auto relative z-10'
                    />
                </div>
            </div>
        </div>
        {/* Information 03 */}
        <div className='mb-12'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* text content */}
                <div className='bg-gray-100 px-4 md:px-10 py-2 md:py-6 border dark:text-slate-900'>
                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-bold'>
                        ESTACIÓN TOTAL (Leica TS16, Sokkia CX) + ESCÁNER 3D
                    </h3>
                    {/* Línea divisoria */}
                    <hr className='my-4 border-t-2 border-gray-200 dark:border-gray-300 mx-auto' />
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                        <ul className='list-none space-y-2 ml-6 my-2'>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Rango 1km+ con precisión 1" angular/2mm+2ppm</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Automatización total: Seguimiento automático, control vía tablet/PC</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Escaneo 3D a 1,000,000 pts/seg con colorización en campo (Leica RTC360)</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Paquetes completos: Incluye prismas, bastones y software Cyclone/Carlson</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className='relative p-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-20'>
                        <Image
                            width={400}
                            height={400} 
                            src='/images/background/coinseraqp-bgEquipment_01.svg'
                            className='w-full h-full object-cover md:px-4'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/equipment/coinseraqp-equipment_03.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl sm:mx-auto relative z-10'
                    />
                </div>
            </div>
        </div>
        {/* Information 04 */}
        <div className='mb-12'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* text content */}
                <div className='bg-gray-100 px-4 md:px-10 py-2 md:py-6 border dark:text-slate-900'>
                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-bold'>
                        NIVELES DIGITALES (Leica Sprinter, Sokkia SDL1X)
                    </h3>
                    {/* Línea divisoria */}
                    <hr className='my-4 border-t-2 border-gray-200 dark:border-gray-300 mx-auto' />
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                        <ul className='list-none space-y-2 ml-6 my-2'>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Precisión 0.7mm/km con compensador automático</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Pantalla LCD con almacenamiento interno y exportación directa a CAD</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Diseño ergonómico resistente a polvo/agua (IP55)</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Incluye: Mira código de barras, trípode metálico y maletín de transporte</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className='relative p-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-20'>
                        <Image
                            width={400}
                            height={400} 
                            src='/images/background/coinseraqp-bgEquipment_01.svg'
                            className='w-full h-full object-cover md:px-4'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/equipment/coinseraqp-equipment_04.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl sm:mx-auto relative z-10'
                    />
                </div>
            </div>
        </div>
        {/* Information 05 */}
        <div className='mb-12'>
            <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2'>
                {/* text content */}
                <div className='bg-gray-100 px-4 md:px-10 py-2 md:py-6 border dark:text-slate-900'>
                    {/* Title */}
                    <h3 className='text-lg md:text-xl font-bold'>
                        TEODOLITOS ELECTRÓNICOS (Sokkia DT5, Topcon DT-200)
                    </h3>
                    {/* Línea divisoria */}
                    <hr className='my-4 border-t-2 border-gray-200 dark:border-gray-300 mx-auto' />
                    {/* Definition */}
                    <div className='mt-4'>
                        <div className='flex items-center mb-6 space-x-4'>
                        <ul className='list-none space-y-2 ml-6 my-2'>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Precisión 1&quot;-5&quot; con compensador dual eje</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Pantalla digital con lectura directa Hz/V y cálculo de coordenadas</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Alcance 3km+ con prisma individual</span>
                            </li>
                            <li className='flex items-center space-x-3'>
                                <GrLineChart className='text-orange-400' />
                                <span>Paquete profesional: Trípode de fibra, prismas y maletín blindado</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                {/* Image Content */}
                <div className='relative p-6 rounded-xl '>
                    {/* Fondo SVG */}
                    <div className='absolute inset-0 z-0 opacity-20'>
                        <Image 
                            width={400}
                            height={400}
                            src='/images/background/coinseraqp-bgEquipment_01.svg'
                            className='w-full h-full object-cover md:px-4'
                            alt='Fondo texturizado'
                        />
                    </div>

                    <Image
                        src='/images/equipment/coinseraqp-equipment_05.png'
                        width={400}
                        height={400}
                        alt='Quienes-Somos-Coinseraqp'
                        className='rounded-xl sm:mx-auto relative z-10'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
