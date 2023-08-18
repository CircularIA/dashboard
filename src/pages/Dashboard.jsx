/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import logoEmpresa from '../assets/logo-empresa.svg'
import leaf from '../assets/leaf.svg'
import substract from '../assets/substract.svg'
import Valorization from '../components/Valorization'

const Dashboard = () => {
  return (
    <div className='flex grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen'>
      <Sidebar />
      <main className='lg:col-span-10 xl:col-span-11 h-[100vh] overflow-y-scroll'>
        <Header />
        <div className='mt-4 flex items-center bg-custom-horizontal-gradient custom-shadow justify-between rounded-md shadow-lg p-4 mx-8'>
          <div className='flex items-center'>
            <img src={logoEmpresa} alt='Logo empresa' className='w-[30%] md:p-1 md:ml-4 md:w-[35%]' />
            <div className='text-white ml-4'> {/* Aquí está el texto blanco */}
              <p className='font-bold mb-3'>NotCo - Sucursal 1 - Santiago Sur</p>
              <p>Dirección sucursal: Macul, Av. Quilín 3550</p>
              <p>Impulsora circular: Javiera Arenas</p>
            </div>
          </div>
        </div>
        <div className='flex mt-4 items-center bg-custom-dark-green custom-shadow justify-start rounded-md shadow-lg mx-8'>
          <img src={leaf} alt='Leaf' className='w-[16%] md:w-[10%] lg:w-[7%] p-0 md:p-3' />
          <p className='text-roboto custom-text text-sm lg:text-3xl ml-3 title-panel text-white'> PANEL DE CONTROL AMBIENTAL</p>
        </div>
        <div className='flex mt-4 items-center bg-custom-mid-green custom-shadow justify-between rounded-md shadow-lg p-3 mx-8'>
          <p className='text-roboto custom-text text-sm lg:text-2xl category-panel text-white'> Valorización de residuos</p>
          <div className='flex items-center'>
            <div className='border-l-2 border-gray-300 h-12 mx-4'></div> {/* Ajuste aquí */}
            <img src={substract} alt='Icon 2' className='w-18 h-18 px-4 cursor-pointer' />
          </div>
        </div>
        <Valorization />
        <div className='flex mt-4 items-center bg-custom-mid-green custom-shadow justify-between rounded-md shadow-lg p-3 mx-8'>
          <p className='text-roboto custom-text text-sm lg:text-2xl category-panel text-white'> Emisiones</p>
          <div className='flex items-center'>
            <div className='border-l-2 border-gray-300 h-12 mx-4'></div> {/* Ajuste aquí */}
            <img src={substract} alt='Icon 2' className='w-18 h-18 px-4 cursor-pointer' />
          </div>
        </div>
        <div className='flex mt-4 items-center bg-custom-mid-green custom-shadow justify-between rounded-md shadow-lg p-3 mx-8'>
          <p className='text-roboto custom-text text-sm lg:text-2xl category-panel text-white'> Energía</p>
          <div className='flex items-center'>
            <div className='border-l-2 border-gray-300 h-12 mx-4'></div> {/* Ajuste aquí */}
            <img src={substract} alt='Icon 2' className='w-18 h-18 px-4 cursor-pointer' />
          </div>
        </div>
        <div className='flex mt-4 items-center bg-custom-mid-green custom-shadow justify-between rounded-md shadow-lg p-3 mx-8'>
          <p className='text-roboto custom-text text-sm lg:text-2xl category-panel text-white'> Agua </p>
          <div className='flex items-center'>
            <div className='border-l-2 border-gray-300 h-12 mx-4'></div> {/* Ajuste aquí */}
            <img src={substract} alt='Icon 2' className='w-18 h-18 px-4 cursor-pointer' />
          </div>
        </div>
        <div className='flex mt-4 items-center bg-custom-mid-green custom-shadow justify-between rounded-md shadow-lg p-3 mb-2 mx-8'>
          <p className='text-roboto custom-text text-sm lg:text-2xl category-panel text-white'> Cadena de suministros</p>
          <div className='flex items-center'>
            <div className='border-l-2 border-gray-300 h-12 mx-4'></div> {/* Ajuste aquí */}
            <img src={substract} alt='Icon 2' className='w-18 h-18 px-4 cursor-pointer' />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard