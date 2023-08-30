/* eslint-disable no-unused-vars */
import React from 'react'
import search from '../assets/search.svg'
import notification from '../assets/notification.svg'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../reducers/themeReducer';

const sucursals = [
    { value: 'sucursal1', label: 'Sucursal 1 Santiago Sur' },
    { value: 'sucursal2', label: 'Sucursal 2 Santiago Centro' },
    { value: 'sucursal3', label: 'Sucursal 3 Santiago Norte' }
];

const panels = [
    { value: 'ambiental', label: 'Panel Ambiental' },
    { value: 'social', label: 'Panel Social' },
    { value: 'economic', label: 'Panel Económico' }
];

const Header = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const themeColors = {
        ambiental: '#00B971', // Colores que coinciden con tus temas
        social: '#1a73e8',
        economic: '#ff9800',
    };

    const currentColor = themeColors[theme];


    const customStyles = {
        control: (provided) => ({
            ...provided,
            boxShadow: 'none',
            borderColor: 'lightgray',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? currentColor
                : state.isFocused
                    ? 'lightgray'
                    : null,
        }),
    };

    const handleThemeChange = (selectedOption) => {
        dispatch(changeTheme(selectedOption.value));
    };
    return (
        <header className='flex flex-col md:flex-row items-center justify-between rounded-md custom-shadow p-4 mx-4 md:mx-8'>
            <div className='flex items-center w-1/3'>
                <span className='text-lg font-semibold'>Hola, notCo</span>
            </div>
            <div className='flex items-center justify-center w-full p-2'>
                <Select
                    options={sucursals}
                    defaultValue={sucursals[0]}
                    styles={customStyles}
                    className='w-full'
                />
            </div>
            <div className='flex items-center justify-center w-full p-2'>
                <Select
                    options={panels}
                    defaultValue={panels[0]}
                    onChange={handleThemeChange}
                    styles={customStyles}
                    className='w-full'
                />
            </div>
            <div className='flex items-center justify-start md:justify-end w-full p-2'>
                <input
                    type='text'
                    placeholder='Buscar...'
                    className='border rounded w-[62%] border-gray-300'
                />

                <div className='flex items-center border-l pl-4'>
                    <img src={search} alt='Icon 1' className='w-8 h-8 cursor-pointer' />
                    <div className='border-l-2 border-gray-400 h-10 mx-4'></div> {/* Ajuste aquí */}
                    <img src={notification} alt='Icon 2' className='w-8 h-8 cursor-pointer' />
                </div>
            </div>
        </header>
    );
};

export default Header;
