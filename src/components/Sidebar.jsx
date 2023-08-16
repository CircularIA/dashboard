/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/dashboard-logo.svg'
import { Link } from 'react-router-dom';

// Íconos
import profileIcon from '../assets/profile-icon.svg';
import dashboardIcon from '../assets/dashboard-icon.svg';
import functionsIcon from '../assets/functions-icon.svg';
import contactIcon from '../assets/contact-icon.svg';
import evaluationIcon from '../assets/evaluation-icon.svg';
import helpIcon from '../assets/help-icon.svg';
import { RiAlignJustify } from "react-icons/ri";

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className={`fixed inset-0 bg-black transition-opacity lg:hidden z-40 ${showMenu ? "opacity-50" : "opacity-0 pointer-events-none"}`} />
            <div className={`h-screen bg-custom-gradient custom-shadow h-full flex flex-col lg:static fixed w-[35%] z-50 md:w-[15%] lg:w-[100%] transition-all duration-300 ${showMenu ? "left-0" : "-left-full"}`}>
                <div className='flex justify-center p-5'>
                    <img src={logo} alt='Logo' className='w-17 h-17 object-cover' />
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                    <MenuItem icon={profileIcon} text='Perfil' route='/perfil' />
                    <MenuItem icon={dashboardIcon} text='Dashboard' route='/' />
                    <MenuItem icon={functionsIcon} text='Funciones' route='/funciones' />
                    <MenuItem icon={contactIcon} text='Contacto' route='/contacto' />
                    <MenuItem icon={evaluationIcon} text='Evaluación' route='/evaluacion' />
                    <MenuItem icon={helpIcon} text='Ayuda' route='/ayuda' />
                </ul>
            </div>
            {/* Mobile button*/}
            <button onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? "opacity-100" : "opacity-50"} lg:hidden z-50 bg-custom-mid-green fixed right-4 bottom-4 bg-black rounded-full w-16 h-16 flex items-center justify-center`}>
                <RiAlignJustify size={22} color='white' />
            </button>
        </>
    )
}

const MenuItem = ({ icon, text, route }) => {
    return (
        <li className='flex md:flex-col flex-row items-center ml-4 md:ml-0 space-y-2 py-7'>
            <Link to={route} className='flex md:flex-col flex-row items-center'>
                <img src={icon} alt={text} className='w-6 h-6' />
                <span className='font-roboto text-white text-sm ml-2 md:ml-0'>{text}</span>
            </Link>
        </li>
    );
};


export default Sidebar