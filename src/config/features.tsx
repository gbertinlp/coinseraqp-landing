import { GrCertificate, GrCompliance, GrFolderCycle, GrMapLocation, GrMoney, GrOptimize } from "react-icons/gr";

export const featuresCompany = [
    {
        id: 1,
        title: 'Profesionalismo',
        description: 'Contamos con un personal altamente calificado y certificado que esta apto a resolver cualquier desafío.',
        icon: <GrCertificate className='w-10 h-10'/>
    },
    {  
        id: 2,
        title: 'Responsabilidad',
        description: 'Adquirimos los objetivos de los clientes como nuestros, demostrando responsabilidad, puntualidad, entrega, dedicación y excelencia en cada servicio.',
        icon: <GrCompliance className='w-10 h-10'/>
    },
    {
        id: 3,
        title: 'Innovación',
        description: 'Constantemente buscamos innovar adquiriendo equipos de última tecnología y herramientas.',
        icon: <GrFolderCycle className='w-10 h-10'/>
    },
    {
        id: 4,
        title: 'Cobertura',
        description: 'Nuestros servicios abarca todo el territorio nacional, desde levantamientos urbanos hasta estudios en zonas remotas.',
        icon: <GrMapLocation className='w-10 h-10'/>
    },
    {
        id: 5,
        title: 'Accesible',
        description: 'Evitamos sobrecargos en obra gracias a planos exactos y modelos 3D optimizados.',
        icon: <GrMoney className='w-10 h-10'/>
    },
    {
        id: 6,
        title: 'Garantía',
        description: 'Adaptamos nuestras técnicas (fotogrametría, batimetría, LiDAR) a las necesidades específicas de tu proyecto.',
        icon: <GrOptimize className='w-10 h-10'/>
    },
]