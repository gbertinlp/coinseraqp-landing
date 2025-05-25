import { appPaths } from '@/config/paths';
import Link from 'next/link';
import React from 'react';
import { GrPrevious } from "react-icons/gr";

export const NavMobile = () => {
  return (
    <div>
        {/* overlay */}
        <div className='fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen'></div>
        {/* NAVLINKS */}
        <nav className='text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-500 space-y-6 z-[1050]'>
            {
                appPaths.map((link) => {
                    return(
                    <Link
                        key={link.id}
                        href={link.path}
                        className='w-fit text-xl ml-12 hover:border-b-[1.5px] border-white sm:text-[30px]'
                    >
                        {link.label}
                    </Link>
                    )
                })
            }
            {/* Close Icon */}
            <GrPrevious className='absolute cursor-pointer top-[1rem] right-[2.5rem] sm:w-10 sm:h-10 w-8 h-8'/>
        </nav>
    </div>
  )
};
