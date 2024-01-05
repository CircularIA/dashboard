/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef  } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { FaRegCalendarAlt } from "react-icons/fa";

const parseDateAsUTC = (dateString) => {
    return new Date(dateString);
};

const ValorizationCard = ({ title, data, dates, chartData }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [highlightedDates, setHighlightedDates] = useState([]);
    const [inputValues, setInputValues] = useState(data);
    const datePickerRef = useRef();

    const onCalendarIconClick = () => {
        datePickerRef.current.setOpen(true); // Use the `setOpen` method from react-datepicker to open the calendar
    };

    const handleInputChange = (name, newValue) => {
        // Actualizar el estado de inputValues con el nuevo valor para el input específico
        setInputValues(inputValues.map(input => {
            if (input.name === name) {
                return { ...input, value: newValue };
            }
            return input;
        }));
    };

    // Colores para la gráfica, puedes personalizar esta paleta según tus necesidades
    const COLORS = [
        '#83FFAD',
        '#0DFF6E',
        '#00B971',
        '#008A55',
        '#006B43'
    ];

    // Renderiza cada input basado en los valores de entrada actuales (inputValues)
    const renderInputs = data.map((data, index) => (
        <div key={`input-group-${index}`} className="input-group">
            <label htmlFor={`input-${index}`} className="input-label">{data.name}</label>
            <input
                id={`input-${index}`}
                type="number"
                min="0"
                step="1"
                placeholder={data.placeholder}
                className='w-full mt-1 rounded-lg'
                value={data.value}
                onChange={(e) => handleInputChange(data.name, e.target.value)}
            />
        </div>
    ));


    useEffect(() => {
        setHighlightedDates(dates.map(date => parseDateAsUTC(date)));
    }, [dates]);


    const findDataForDate = (selectedDate) => {
        // Convertir la fecha seleccionada a UTC y establecer la hora a las 16:00:00.000Z
        const selectedDateUTC = new Date(Date.UTC(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            16, 0, 0, 0
        ));
        const selectedDateString = selectedDateUTC.toISOString().split('T')[0]; // "2023-11-01"

        // Ahora compara las fechas asegurándote de que ambas estén en UTC y en el mismo formato
        return data.find(d => {
            const dataDateUTC = new Date(d.date);
            const dataDateString = dataDateUTC.toISOString().split('T')[0]; // "2023-11-01"
            console.log(selectedDateString === dataDateString)
            return selectedDateString === dataDateString;
        });
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const dataForSelectedDate = findDataForDate(date);

        setInputValues(currentInputValues => {
            if (dataForSelectedDate) {
                // Actualizar los valores de los inputs
                console.log(currentInputValues.map(input => {
                    const newValue = dataForSelectedDate[input.name] ? dataForSelectedDate[input.name].value : input.value;
                    return {
                        ...input,
                        value: newValue
                    };
                }))
                return currentInputValues.map(input => {
                    const newValue = dataForSelectedDate[input.name] ? dataForSelectedDate[input.name].value : input.value;
                    return {
                        ...input,
                        value: newValue
                    };
                });
            }
            // Si no hay datos para la fecha seleccionada, retorna los valores actuales sin cambiarlos
            console.log(currentInputValues)
            return currentInputValues;
        });
    };

    return (
        <div className='flex mt-4 items-start custom-shadow rounded-lg p-3 mb-10'>
            <div className='w-1/2'>
                {/* <PieChart width={550} height={350}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={inputValues}
                        cx={275}
                        cy={140}
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {inputValues.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart> */}
            </div>
            <div className='w-1/2 p-2'>
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <button className='p-1 bg-transparent'>⋮</button> {/* Este botón representa los tres puntos */}
                </div>
                {/* <div className='relative'>
                    <DatePicker
                        ref={datePickerRef} // Attach the ref to the DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className='react-datepicker-custom-input'
                        highlightDates={highlightedDates}
                    />
                    <FaRegCalendarAlt
                        onClick={onCalendarIconClick}
                        className="react-datepicker-calendar-icon"
                    />
                </div> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-4'>
                    {renderInputs}
                </div>
            </div>
        </div>
    );
};

export default ValorizationCard;
