/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/dashboard-logo.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

// Íconos
import profileIcon from '../assets/profile-icon.svg';
import dashboardIcon from '../assets/dashboard-icon.svg';
import functionsIcon from '../assets/functions-icon.svg';
import contactIcon from '../assets/contact-icon.svg';
import evaluationIcon from '../assets/evaluation-icon.svg';
import helpIcon from '../assets/help-icon.svg';
import { RiAlignJustify } from "react-icons/ri";

const Sidebar = ({ theme }) => {
    const [showMenu, setShowMenu] = useState(false)
    const sidebarGradientClass =
        theme === 'ambiental' ? 'bg-sidebar-gradient-green' :
            theme === 'social' ? 'bg-sidebar-gradient-blue' :
                'bg-sidebar-gradient-orange';

    const sidebarButtonColor =
        theme === 'ambiental' ? 'bg-custom-mid-green' :
            theme === 'social' ? 'bg-custom-mid-blue' :
                'bg-custom-mid-orange';
    return (
        <>
            <div className={`fixed inset-0 bg-black transition-opacity lg:hidden z-40 ${showMenu ? "opacity-50" : "opacity-0 pointer-events-none"}`} />
            <div className={`h-screen ${sidebarGradientClass} custom-shadow h-full flex flex-col lg:static fixed w-[35%] z-50 md:w-[15%] lg:w-[100%] ${showMenu ? "left-0" : "-left-full"} overflow-y-scroll lg:overflow-hidden`}>
                <Link to={"/"} className='flex justify-center p-5'>
                    <img src={logo} alt='Logo' className='w-17 h-17 object-cover' />
                </Link>
                <ul className='pt-12 pb-12 lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow'>
                    <MenuItem icon={profileIcon} text='Perfil' route='/perfil' />
                    <MenuItem icon={dashboardIcon} text='Dashboard' route='/' />
                    <MenuItem icon={functionsIcon} text='Funciones' route='/funciones' />
                    <MenuItem icon={contactIcon} text='Contacto' route='/contacto' />
                    <MenuItem icon={evaluationIcon} text='Evaluación' route='/evaluacion' />
                    <MenuItem icon={helpIcon} text='Ayuda' route='/ayuda' />
                </ul>
            </div>
            {/* Mobile button*/}
            <button onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? "opacity-100" : "opacity-50"} lg:hidden z-50 ${sidebarButtonColor} fixed right-4 bottom-4 bg-black rounded-full w-16 h-16 flex items-center justify-center`}>
                <RiAlignJustify size={22} color='white' />
            </button>
        </>
    )
}

const MenuItem = ({ icon, text, route }) => {
    return (
        <li className='flex md:flex-col flex-row items-center ml-4 md:ml-0 space-y-2 py-2'>
            <Link to={route} className='flex md:flex-col flex-row items-center'>
                <img src={icon} alt={text} className='w-6 h-6 object-contain' />
                <span className='font-roboto text-white text-sm ml-2 md:ml-0'>{text}</span>
            </Link>
        </li>
    );
};


export default Sidebar