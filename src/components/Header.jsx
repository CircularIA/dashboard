/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react'
import { Skeleton } from '@mui/material';

import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../reducers/themeReducer';
import { setBranch } from '../reducers/userSlice';

const SearchIcon = ({ fill }) => (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.2308" cy="22.7692" r="22.7692" fill={fill} />
        <path d="M26.212 13.5191C22.6755 9.98266 16.9404 9.98266 13.404 13.5191C9.86757 17.0555 9.86757 22.7906 13.404 26.3271C16.5368 29.4599 21.3955 29.8135 24.9204 27.3957L29.3294 32.3274C30.079 33.1692 31.382 33.2038 32.1777 32.4081L32.2931 32.2928C33.0888 31.4971 33.0542 30.194 32.2123 29.4445L27.2806 25.0355C29.7023 21.5068 29.3448 16.6519 26.212 13.5191ZM24.0132 24.1283C21.6915 26.4501 17.9244 26.4501 15.6027 24.1283C13.281 21.8066 13.281 18.0395 15.6027 15.7178C17.9244 13.3961 21.6915 13.3961 24.0132 15.7178C26.3388 18.0434 26.335 21.8066 24.0132 24.1283Z" fill="#FEFDFE" />
    </svg>

);

const NotificationIcon = ({ fill }) => (
    <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.3092 24.3571L27.359 21.1199C26.9495 20.3983 26.579 19.0332 26.579 18.2337V13.2999C26.579 8.71707 23.8878 4.75831 20.0071 2.90569C18.993 1.11157 17.1209 0 14.9757 0C12.8501 0 10.939 1.15057 9.92497 2.96419C6.12222 4.85582 3.48955 8.77557 3.48955 13.2999V18.2337C3.48955 19.0332 3.11903 20.3983 2.7095 21.1004L0.73987 24.3571C-0.0401809 25.6637 -0.215692 27.1068 0.27184 28.4329C0.739871 29.7394 1.85144 30.7535 3.29454 31.241C7.07779 32.5281 11.056 33.1522 15.0342 33.1522C19.0125 33.1522 22.9907 32.5281 26.774 31.2605C28.1391 30.812 29.1922 29.7784 29.6992 28.4329C30.2062 27.0873 30.0697 25.6052 29.3092 24.3571Z" fill={fill} />
        <path d="M20.5136 35.1218C19.6945 37.3839 17.5299 39.0025 14.9947 39.0025C13.4541 39.0025 11.933 38.3785 10.8605 37.2669C10.2364 36.6819 9.76838 35.9018 9.49536 35.1023C9.74888 35.1413 10.0024 35.1608 10.2754 35.1998C10.7239 35.2583 11.192 35.3168 11.66 35.3558C12.7716 35.4533 13.9027 35.5118 15.0337 35.5118C16.1453 35.5118 17.2569 35.4533 18.349 35.3558C18.7585 35.3168 19.168 35.2973 19.558 35.2388C19.8701 35.1998 20.1821 35.1608 20.5136 35.1218Z" fill={fill} />
    </svg>
)

const panels = [
    { value: 'ambiental', label: 'Panel Ambiental' },
    { value: 'social', label: 'Panel Social' },
    { value: 'economic', label: 'Panel Económico' }
];

const Header = ({ currentTheme, companyInfo }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    console.log("theme", theme)

    const themeColors = {
        ambiental: '#00B971', // Colores que coinciden con tus temas
        social: '#1a73e8',
        economic: '#ff9800',
    };

    const currentColor = themeColors[currentTheme];

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
    const [loading, setLoading] = useState(false);
    //Have to obtain the current branch from redux
    const currentBranch = useSelector((state) => state.user.branch.index)
    //Have to transform branches to the format of sucursals
    const [sucursals, setSucursals] = useState([]);
    const handleBranchChange = (selectedOption) => {
        console.log(selectedOption)
        dispatch(setBranch(selectedOption))
    }
    useEffect(() => {
        if (Object.keys(companyInfo).length > 0){
            console.log("companyInfo", companyInfo)
            const sucursals = companyInfo.companies.branches.map((branch, index) => ({
                value: 'Sucursal ' + index,
                id: branch._id,
                index: index,
                label: 'Sucursal ' + branch.name,
            }));
            console.log(sucursals)
            setSucursals(sucursals);
            setLoading(true);
        }
    },[companyInfo]) 
    return (
        <header className='flex flex-col md:flex-row items-center justify-between rounded-md custom-shadow p-4 mx-4 md:mx-8'>
            <div className='flex items-center w-1/3'>
                {
                    loading ? <span className='text-lg font-semibold'>{companyInfo.companies.name}</span> : <Skeleton variant="text" width={200} height={30} />
                }
            </div>
            <div className='flex items-center justify-center w-full p-2'>
                <Select
                    options={sucursals}
                    //Define as default value the current branch
                    value={sucursals[currentBranch]}
                    onChange = {handleBranchChange}
                    styles={customStyles}
                    className='w-full'
                />
            </div>
            <div className='flex items-center justify-center w-full p-2'>
                <Select
                    options={panels}
                    value={panels.find(panel => panel.value === theme)}
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
                    <SearchIcon fill={currentColor}/>
                    <div className='border-l-2 border-gray-400 h-10 mx-4'></div> {/* Ajuste aquí */}
                    <NotificationIcon fill={currentColor}/>
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    companyInfo: {}
}

export default Header;
