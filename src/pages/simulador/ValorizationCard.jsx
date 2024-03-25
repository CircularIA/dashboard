/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const ValorizationCard = ({ id, renderTitle, title, inputData, someValueUndefined, onUpdate, onUpdateData, onSendData }) => {
    const someUndefined = inputData?.some(data => data.value === undefined || data.value === null || data.value === '');
    console.log(someUndefined)
    const buttonText = someUndefined ? "Ingresar Datos" : "Ingresar Datos"
    
    // Colores definidos sólo para indicadores ambientales
    const COLORS = [
        '#83FFAD',
        '#0DFF6E',
        '#00B971',
        '#008A55',
        '#006B43',
        '#0A4D2B'
    ];
    console.log(inputData);

    // Verificar si inputData es un arreglo y contiene elementos
    const hasData = Array.isArray(inputData) && inputData.length > 0;

    const handleInputChange = (e, dataId) => {
        const newValue = e.target.value;
        onUpdate(dataId, newValue);
        console.log(e.target.value)
    };

    // Verificación si inputData es un arreglo
    const renderInputData = hasData && inputData.map((data) => (
        <div key={data._id} className="input-data-item">
            <label htmlFor={`input-${data._id}`} className="input-label">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</label>
            <label htmlFor={`input-${data._id}`} className="input-label font-bold"> ({data.measurement})</label>
            <input
                id={`input-${data._id}`}
                type="number"
                min="0"
                step="1"
                placeholder={data.placeholder}
                className='w-full mt-1 rounded-lg'
                value={data.value}
                onChange={(e) => handleInputChange(e, data._id)}
                required
            />
        </div>
    ));

    const handleSaveData = async () => {
        // Aquí implementarías la lógica para "Ingresar datos" o "Modificar datos"
        // dependiendo del texto del botón o del estado de los datos
    };

    return (
        <div>
            <div className='flex mt-4 items-start custom-shadow rounded-lg p-3 mb-10'>
                <div className='w-1/2'>
                    {hasData && (
                        <PieChart width={550} height={350}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={inputData}
                                cx={275}
                                cy={140}
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {inputData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    )}
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-xl font-semibold'>{renderTitle}</h3>
                        <button className='p-1 bg-transparent'>⋮</button> {/* Este botón representa los tres puntos */}
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-4 mb-4'>
                        {renderInputData}
                    </div>
                </div>
            </div>
            <button 
                className='mb-4 items-center bg-custom-mid-green w-[100%] rounded-lg p-3 button-text-style'
                onClick={buttonText === 'Modificar datos' ? onUpdateData : onSendData}
                disabled={someValueUndefined}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default ValorizationCard;