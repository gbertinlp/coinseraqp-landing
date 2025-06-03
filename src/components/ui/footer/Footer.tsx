import React from 'react'
import { RiFacebookCircleFill, RiTiktokFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-slate-900'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {/* 1st Part */}
            <div>
                <div className='text-white font-bold text-3xl'>lOGO</div>
                <p className='mt-5 font-semibold text-gray-200 text-sm'>
                    Dedicados a proveer servicios de Topografía - Geodesia - Batimetría - Fotogrametría y Minería
                </p>
                {/* social links */}
                <div className='flex items-center text-white space-x-4 mt-6'>
                    <div className='w-8 h-8 bg-cyan-400 flex flex-col items-center justify-center rounded-full'><RiFacebookCircleFill /></div>
                    <div className='w-8 h-8 bg-cyan-400 flex flex-col items-center justify-center rounded-full'><RiTiktokFill /></div>
                    <div className='w-8 h-8 bg-cyan-400 flex flex-col items-center justify-center rounded-full'><RiInstagramFill /></div>
                    <div className='w-8 h-8 bg-cyan-400 flex flex-col items-center justify-center rounded-full'><RiYoutubeFill /></div>
                </div>
            </div>
            

            {/* 2do Part */}
            <div className='space-y-5'>
                <h3 className='text-lg text-white font-bold'>Empresa</h3>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Acerca de</p>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Servicios</p>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Equipamiento</p>
            </div>

            {/* 3th Part */}
            <div className='space-y-5'>
                <h3 className='text-lg text-white font-bold'>Contamos con</h3>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Servicio Técnico</p>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Proyectos</p>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Capacitación</p>
                <p className='text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm'>Alquiler de Equipos</p>
            </div>
            
            {/* 4th Part */}
            <div>
                <h3 className='text-lg text-white font-bold'>Aquí</h3>
                <div className='mt-6'>
                    <h3 className='text-sm text-white'>Nuestros números de contacto:</h3>
                    <p className='font-bold text-white mt-1'>+51994 4660 3</p>
                </div>
                <div className='mt-6'>
                    <h3 className='text-sm text-white'>Ubícanos:</h3>
                    <p className='font-bold text-white mt-1'>Centro Comercial La Negrita interior Oficina N°10 - Cercado - Arequipa</p>
                </div>
                <div className='mt-6'>
                    <h3 className='text-sm text-white'>Escríbenos al:</h3>
                    <p className='font-bold text-white mt-1'>email.coinseraqpsac2@gmail.com</p>
                </div>
            </div>

        </div>
        {/* Buttons Part */}
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm'>
            <p className='text-center md:text-left'>Copyrigth © 2025 CoinserAQP. Todos los derechos reservados.</p>
            <div className='flex space-x-4'>
                <p className='hover:text-gray-400 cursor-pointer'>Políticas de Privacidad</p>
                <p className='hover:text-gray-400 cursor-pointer'>Terminos de Servicio</p>
            </div>
        </div>
    </div>
  )
}
