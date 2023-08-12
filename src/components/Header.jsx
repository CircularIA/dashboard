/* eslint-disable no-unused-vars */
import React from 'react'
import search from '../assets/search.svg'
import notification from '../assets/notification.svg'
import Select from 'react-select'

const customStyles = {
    control: (provided) => ({
        ...provided,
        boxShadow: 'none', // Esto elimina la sombra
        '&:hover': {
            borderColor: 'lightgray' // Color del borde en hover
        },
        borderColor: 'lightgray' // Color del borde
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#00B971' : state.isFocused ? 'lightgray' : null
    })
};

const options = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
];

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row items-center justify-between rounded-md custom-shadow p-4 mx-8'>
            <div className='flex items-center w-1/2'>
                <span className='text-lg font-semibold'>Hola, notCo</span>
            </div>
            <div className='flex items-center justify-center w-full p-2'>
                <Select
                    options={options}
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
