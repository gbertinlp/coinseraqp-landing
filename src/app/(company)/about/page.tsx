import { Strategy } from '@/components';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Empresa",
    description: "Dedicados a proveer servicios de Topografía - Geodesia - Batimetría - Fotogrametría y Minería",
  };

export default function CompanyPage() {
  return (
    <div className='overflow-hidden'>
        <Strategy />
    </div>
  )
}
