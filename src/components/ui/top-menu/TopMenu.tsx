'use client';
import React from 'react'
import { Navbar } from '../navigation/Navbar'
import { NavMobile } from '../navigation/NavMobile'
import { useUIStore } from '@/store'

export const TopMenu = () => {

  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const handleMenuOpen = useUIStore((state) => state.toggleSideMenu);

  return (
    <div>
        <Navbar toggleMenu={handleMenuOpen}/>
        <NavMobile isOpenMenu={isSideMenuOpen} toggleMenu={handleMenuOpen} />
    </div>
  )
}
