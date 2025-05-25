import { appPaths } from '@/config/paths';
import Link from 'next/link';
import React from 'react'
import { GrLastfm, GrThreeD, GrList, GrActions } from "react-icons/gr";

export const Navbar = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-orange-500'>
        <div className='flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto'>

            {/* LOGO */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <GrLastfm className='w-6 h-6 text-cyan-500'/>
                </div>
            </div>
            {/* NAVLINKS */}
            <nav className='hidden lg:flex items-center space-x-10'>
                {
                    appPaths.map((link) => {
                        return(
                            <Link 
                                key={link.id}
                                href={link.path}
                                className='text-white hover:text-gray-900 font-semibold transition-all duration-200'
                            >
                                <p>{link.label}</p>
                            </Link>
                        )
                    })
                }
            </nav>
            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                {/* Buy Button */}
                <Link href="#_" className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                    <span className="px-3.5 py-2 text-white bg-cyan-500 group-hover:bg-cyan-600 flex items-center justify-center">
                        {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg> */}
                        <GrThreeD className='w-5 h-5'/>
                    </span>
                    <span className="pl-4 pr-5 py-2.5">Comprar</span>
                </Link>
                {/* Dark Switch Button */}
                {/* Burger Menu */}
                <GrList className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                <GrActions className='w-8 h-8 cursor-pointer text-white'/>
            </div>
        </div>
    </div>
  )
};
