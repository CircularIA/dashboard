/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/dashboard-logo.svg'
import { Link } from 'react-router-dom';
//Components of React
import { Collapse, Icon, Menu, MenuItem as MenuItemMUI } from '@mui/material';

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
    const [openPerfil, setOpenPerfil] = useState(false);
    const [openFunciones, setOpenFunciones] = useState(false);
    const [openContacto, setOpenContacto] = useState(false);
    const handleClickPerfil = () => {
        console.log("entra a esta funcion")
        setOpenPerfil(!openPerfil);
    }
    const handleClickFunciones = () => {
        setOpenFunciones(!openFunciones);
    }
    const handleClickContacto = () => {
        setOpenContacto(!openContacto)
    }
    // linear-gradient(0deg, #0DFF6E 20%, #00B971 60%, #008A55 80%)


    return (
        <>
            <div className={`fixed inset-0 bg-black transition-opacity lg:hidden z-40 ${showMenu ? "opacity-50" : "opacity-0 pointer-events-none"}`} />
            <div className={`bg-custom-gradient custom-shadow h-full flex flex-col lg:static fixed w-[35%] z-50 md:w-[15%] lg:w-[100%] transition-all duration-300 ${showMenu ? "left-0" : "-left-full"} overflow-y-scroll lg:overflow-hidden`}>
                <div className='flex justify-center p-5'>
                    <img src={logo} alt='Logo' className='w-17 h-17 object-cover' />
                </div>
                <ul className='lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow'>
                    <div onClick={handleClickPerfil}>
                        <MenuItem icon={profileIcon} text='Perfil' />
                    </div>
                    <Collapse in={openPerfil} timeout={'auto'} unmountOnExit>
                        <ul className='lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow pl-1 shadow-xl hover:bg-custom-pallete-400 transition duration-300 ease-in-out'>
                            <MenuItem icon={dashboardIcon} text={'Configuracion'} route={'/perfil'} />
                            <MenuItem icon={dashboardIcon} text={'Cerrar Sesión'} route={'/'} />
                        </ul>
                    </Collapse>
                    <MenuItem icon={dashboardIcon} text='Dashboard' route='/' />
                    <div onClick={handleClickFunciones}>
                        <MenuItem icon={functionsIcon} text='Funciones' />
                    </div>
                    <Collapse in={openFunciones} timeout={'auto'} unmountOnExit>
                        <ul className='lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow pl-1 shadow-xl hover:bg-custom-pallete-400 transition duration-300 ease-in-out'>
                            <MenuItemMini icon={dashboardIcon} text={'Seleccionador'} route={'/seleccionador'} />
                            <MenuItemMini icon={dashboardIcon} text={'H.Carbono'} route={'/huellacarbono'} />
                            <MenuItemMini icon={dashboardIcon} text={'Simulador'} route={'/estrategia'} />
                        </ul>
                    </Collapse>
                    <MenuItem icon={evaluationIcon} text='Evaluación' route='/evaluacion' />
                    <div onClick={handleClickContacto}>
                        <MenuItem icon={contactIcon} text='Contacto' />
                    </div>
                    {/* <Menu open = {openContacto} onClose={handleClickContacto}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItemMUI>Sobre Nosotros</MenuItemMUI>
                        <MenuItemMUI>Reportar Problema</MenuItemMUI>
                    </Menu> */}
                    <Collapse in={openContacto} timeout={'auto'} unmountOnExit>
                        <ul className='lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow'>
                            <MenuItem icon={dashboardIcon} text={'Sobre Nosotros'} route={'/'} />
                            <MenuItem icon={dashboardIcon} text={'Reportar Problema'} route={'/'} />
                        </ul>
                    </Collapse>
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
        <li className='flex md:flex-col flex-row items-center ml-4 md:ml-0 space-y-2 py-2'>
            <Link to={route} className='flex md:flex-col flex-row items-center'>
                <img src={icon} alt={text} className='w-6 h-6 object-contain' />
                <span className='font-roboto text-white text-sm ml-2 md:ml-0'>{text}</span>
            </Link>
        </li>
    );
};

const MenuItemMini = ({ icon, text, route }) => {
    return (
        <li className='flex md:flex-col flex-row items-center ml-4 md:ml-0 space-y-2 py-2'>
            <Link to={route} className='flex md:flex-col flex-row items-center'>
                <img src={icon} alt={text} className='w-5 h-5 object-contain' />
                <span className='font-roboto text-white text-sm ml-2 md:ml-0'>{text}</span>
            </Link>
        </li>
    );
};


export default Sidebar