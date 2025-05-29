'use client';
import { appPaths } from '@/config/paths';
import { useUIDarkMode } from '@/store';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react'
import { GrLastfm, GrThreeD, GrList, GrMoon, GrActions } from "react-icons/gr";

interface NavbarProps {
    toggleMenu: () => void;
}

export const Navbar:FC<NavbarProps> = ({ toggleMenu }) => {

    const { isDarkMode, toggleDarkMode } = useUIDarkMode();

    const [ navBg, setNavBg ] = useState(false);

    useEffect(() => {
      const handler = () => {
        if (window.scrollY >= 50) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      };
      window.addEventListener('scroll', handler);

      return () => {
        window.removeEventListener('scroll', handler);
      };
    }, []);


  return (
    <div className={`transition-all ${ navBg ? 'bg-orange-500 shadow-md' : 'fixed' } duration-200 h-[12vh] z-[100] fixed w-full`}>
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
                {/* Burger Menu */}
                <GrList onClick={ toggleMenu } className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                {/* Dark Switch Button */}
                {
                    isDarkMode 
                    ? ( <GrActions
                        onClick={ toggleDarkMode }
                        className='w-8 h-8 cursor-pointer text-white'
                        /> )
                    : ( <GrMoon 
                        onClick={ toggleDarkMode }
                        className='w-8 h-8 cursor-pointer text-white'
                        /> )
                }
            </div>
        </div>
    </div>
  )
};
