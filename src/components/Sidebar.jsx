/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from '../assets/dashboard-logo.svg'
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
// Íconos
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import profileIcon from '../assets/profile-icon.svg';
import dashboardIcon from '../assets/dashboard-icon.svg';
import signOutIcon from '../assets/signOutIcon.svg'
import configIcon from '../assets/configIcon.svg'
import strategyIcon from '../assets/strategyIcon.svg'
import carbonFootprintIcon from '../assets/carbonFootprintIcon.svg'
import inputDataIcon from '../assets/inputDataIcon.svg'
import selectorIcon from '../assets/selectorIcon.svg'
import functionsIcon from '../assets/functions-icon.svg';
import evaluationIcon from '../assets/evaluation-icon.svg';
import helpIcon from '../assets/help-icon.svg';
import { RiAlignJustify } from "react-icons/ri";
import { useCookies } from 'react-cookie'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Sidebar = ({ theme }) => {
    const [openPanel, setOpenPanel] = useState(null);
    const [open, setOpen] = useState(false);
    const [cookies, removeCookie] = useCookies(["access_token"]);
    const [showMenu, setShowMenu] = useState(false)
    const sidebarGradientClass =
        theme === 'ambiental' ? 'bg-sidebar-gradient-green' :
            theme === 'social' ? 'bg-sidebar-gradient-blue' :
                'bg-sidebar-gradient-orange';

    const sidebarButtonColor =
        theme === 'ambiental' ? 'bg-custom-mid-green' :
            theme === 'social' ? 'bg-custom-mid-blue' :
                'bg-custom-mid-orange';
    const [openPerfil, setOpenPerfil] = useState(false);
    const [openFunciones, setOpenFunciones] = useState(false);
    const handleClickPerfil = () => {
        setOpenPanel(openPanel !== 'perfil' ? 'perfil' : null);
    }

    const handleClickFunciones = () => {
        setOpenPanel(openPanel !== 'funciones' ? 'funciones' : null);
    }

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSession = () => {
        removeCookie("access_token");
        setOpen(true)
    }


    return (
        <>
            <div className={`fixed inset-0 bg-black transition-opacity lg:hidden z-40 ${showMenu ? "opacity-50" : "opacity-0 pointer-events-none"}`} />
            <div className={`h-screen ${sidebarGradientClass} custom-shadow h-full flex flex-col lg:static fixed w-[35%] z-50 md:w-[15%] lg:w-[100%] ${showMenu ? "left-0" : "-left-full"} overflow-y-scroll lg:overflow-hidden`}>
                <Link to={"/"} className='flex justify-center p-5'>
                    <img src={logo} alt='Logo' className='w-17 h-17 object-cover' />
                </Link>
                <ul className='pt-12 pb-12 lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow'>
                    <div onClick={handleClickPerfil} className='w-full'>
                        <MenuItem icon={profileIcon} text='Perfil' isCollapsible={true} isOpen={openPerfil} />
                    </div>
                    <Collapse in={openPanel === 'perfil'} timeout={'auto'} unmountOnExit>
                        <ul className='lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow pl-1 shadow-xl hover:bg-custom-pallete-400 transition duration-300 ease-in-out'>
                            <MenuItem icon={configIcon} text={'Configuración'} route={'/perfil'} />
                            <div onClick={handleSession}>
                                <MenuItem icon={signOutIcon} text={'Cerrar Sesión'} />
                            </div>
                        </ul>
                    </Collapse>
                    <MenuItem icon={dashboardIcon} text='Dashboard' route='/' />
                    <div onClick={handleClickFunciones}>
                        <MenuItem icon={functionsIcon} text='Funciones' isCollapsible={true} isOpen={openFunciones} />
                    </div>
                    <Collapse in={openPanel === 'funciones'} timeout={'auto'} unmountOnExit>
                        <ul className='lg:pt-4 lg:pb-8 flex flex-col justify-between flex-grow pl-1 shadow-xl hover:bg-custom-pallete-400 transition duration-300 ease-in-out'>
                            <MenuItemMini icon={selectorIcon} text={'Seleccionador'} route={'/seleccionador'} />
                            {/* <MenuItemMini icon={carbonFootprintIcon} text={'H.Carbono'} route={'/huellacarbono'} /> */}
                            {/* <MenuItemMini icon={strategyIcon} text={'Estrategia'} route={'/estrategia'} /> */}
                            <MenuItemMini icon={inputDataIcon} text={'Ingreso de datos'} route={'/ingreso'} />
                        </ul>
                    </Collapse>
                    {/* <MenuItem icon={evaluationIcon} text='Evaluación' route='/evaluacion' /> */}
                    <MenuItem icon={helpIcon} text='Ayuda' route='/ayuda' />
                </ul>
            </div>
            {/* Mobile button*/}
            <button onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? "opacity-100" : "opacity-50"} lg:hidden z-50 ${sidebarButtonColor} fixed right-4 bottom-4 bg-black rounded-full w-16 h-16 flex items-center justify-center`}>
                <RiAlignJustify size={22} color='white' />
            </button>
            <Snackbar open={open} autoHideDuration={80000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ backgroundColor: '#008A55' }}>
                    Cerrando sesión
                </Alert>
            </Snackbar>

        </>
    )
}

const MenuItem = ({ icon, text, route, isOpen, isCollapsible }) => {
    return (
        <li className='relative flex items-center space-y-2 py-2'>
            <Link to={route ?? '#'} className='flex items-center justify-center w-full'>
                <div className='flex flex-col items-center'>
                    {
                        typeof icon === 'string'
                            ? <img src={icon} alt={text} className='w-6 h-6 object-contain' />
                            : React.cloneElement(icon, { className: 'w-6 h-6 text-white' })
                    }
                    <span className='font-roboto text-white text-sm'>{text}</span>
                </div>
            </Link>
            {isCollapsible && (
                <div className='absolute right-3 bottom-6 flex items-center'>
                    {isOpen ? <BiChevronUp className='text-white' /> : <BiChevronDown className='text-white' />}
                </div>
            )}
        </li>
    );
};


const MenuItemMini = ({ icon, text, route }) => {
    return (
        <li className='flex md:flex-col flex-row items-center ml-4 md:ml-0 space-y-2 py-2'>
            <Link to={route} className='flex md:flex-col flex-row items-center'>
                {
                    typeof icon === 'string'
                        ? <img src={icon} alt={text} className='w-6 h-6 object-contain' />
                        : React.cloneElement(icon, { className: 'w-6 h-6 text-white' })
                }
                <span className='font-roboto text-white text-sm ml-2 md:ml-0'>{text}</span>
            </Link>
        </li>
    );
};

export default Sidebar