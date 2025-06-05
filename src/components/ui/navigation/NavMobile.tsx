'use client';
import { appPaths } from '@/config/paths';
import { useUIStore } from '@/store';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { GrPrevious } from "react-icons/gr";

interface NavMobileProps {
    isOpenMenu: boolean;
    toggleMenu: () => void;
}

export const NavMobile: FC<NavMobileProps> = ({ isOpenMenu, toggleMenu}) => {

  return (
    <div>
        {/* overlay background*/}
        {
            isOpenMenu && (
                <div className='fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen'></div>
            )
        }
        {/* Blur */}
        {
            isOpenMenu && (
                <div className='fade-in fixed top-0 left-0 w-screen h-screen z-[1005] backdrop-filter backdrop-blur-sm'></div>
            )
        }
        {/* NAVLINKS */}
        <nav 
            className={
                clsx(
                    'text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-orange-500 space-y-6 z-[1050]',
                    {
                        '-translate-x-full': !isOpenMenu,
                    }
                )
            }>
                {/* LOGO */}
                <Link href='/' className='flex items-center mx-auto mb-20'>
                    <Image
                        src='/images/coinseraqp-logo_only.svg'
                        width={150}
                        height={150}
                        alt='Logo Coinseraqp'
                        className='bg-white rounded-md px-2'
                    />
                </Link>
            {
                appPaths.map((link) => {
                    return(
                    <Link
                        key={link.id}
                        onClick={ toggleMenu }
                        href={link.path}
                        className='w-fit text-xl ml-12 hover:border-b-[1.5px] hover:border-white sm:text-[30px]'
                    >
                        {link.label}
                    </Link>
                    )
                })
            }
            {/* Close Icon */}
            <GrPrevious onClick={ toggleMenu } className='absolute cursor-pointer top-[1rem] right-[2.5rem] sm:w-10 sm:h-10 w-8 h-8'/>
        </nav>
    </div>
  )
};
