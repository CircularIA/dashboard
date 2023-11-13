/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const InfoIcon = ({ stroke }) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="&#240;&#159;&#166;&#134; icon &#34;info circle&#34;">
            <g id="Group">
                <path id="Vector" d="M11 0.999997C5.5 0.999996 0.999999 5.5 0.999998 11C0.999998 16.5 5.5 21 11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 0.999997 11 0.999997Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M11 14.9999L11 9.99994" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M11.0056 7.00006L10.9923 7.00006" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
    </svg>
);

const infoColor = {
    green: '#0DFF6E', // Reemplaza con el color específico que deseas
    blue: '#40B7FF', // Reemplaza con el color específico que deseas
    orange: '#FBC946', // Reemplaza con el color específico que deseas
};

const Card = ({ id, title, color, children, fullWidth }) => (
    // Aplicar una clase condicional basada en la prop fullWidth
    <div className={`p-4 ${fullWidth ? 'sm:w-full' : 'w-full sm:w-1/2'}`}>
        <div className='mt-4 items-center custom-shadow rounded-lg p-4'>
            <div className='flex items-center mb-3'>
                <h3 className={`text-roboto tracking-tighter text-2xl font-medium ${color}-text mr-2`}>{id}.- {title}</h3>
                <InfoIcon stroke={infoColor[color]} />
            </div>
            <div className='h-80 overflow-hidden'>
                {children}
            </div>
        </div>
    </div>
);

export default Card;
