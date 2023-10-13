/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { BarChart, Bar, XAxis } from 'recharts'
import see from '../assets/see.svg'
import decrease from '../assets/decrease.svg'
import increase from '../assets/increase.svg'
import Card from './Card'
import CustomTooltip from './CustomTooltip'

const greenColors = [
    '#0DFF6E', // Verde más claro
    '#00B971',
    '#006C42'  // Verde más oscuro
];
const data01 = [
    { name: 'Enero', 'Emisiones por tonelada': 218 },
    { name: 'Febrero', 'Emisiones por tonelada': 230 },
    { name: 'Marzo', 'Emisiones por tonelada': 234 },
    { name: 'Abril', 'Emisiones por tonelada': 221 },
    { name: 'Mayo', 'Emisiones por tonelada': 227 },
    { name: 'Junio', 'Emisiones por tonelada': 229 },
    { name: 'Julio', 'Emisiones por tonelada': 222 },
    { name: 'Agosto', 'Emisiones por tonelada': 233 },
    { name: 'Septiembre', 'Emisiones por tonelada': 235 },
    { name: 'Octubre', 'Emisiones por tonelada': 226 },
    { name: 'Noviembre', 'Emisiones por tonelada': 231 },
    { name: 'Diciembre', 'Emisiones por tonelada': 120 },
]

const data02 = [
    { name: 'Energía renovable total', value: 250 },
    { name: 'Energía solar', value: 300 },
    { name: 'Energía eólica', value: 300 },
];

export default class Example extends PureComponent {
    state = {
        expandedSections: {
            section1: false,
            section2: false,
        }
    }

    handleToggleExpand = (sectionKey) => {
        this.setState(prevState => ({
            expandedSections: {
                ...prevState.expandedSections,
                [sectionKey]: !prevState.expandedSections[sectionKey]
            }
        }));
    }

    renderLegend() {
        const width = window.innerWidth;
        if (width <= 768) { // Tamaño para sm y md
            return <Legend height={36} />;
        } else {
            return <Legend layout="vertical" verticalAlign="middle" align="right" />;
        }
    }
    render() {
        return (
            <div className='flex flex-wrap mx-0 py-0 md:mx-4 md:py-4'>
                <Card id='1' title='Consumo de energía / unidad' color='green'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data01}
                                >
                                    <XAxis dataKey="name" hide={true} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc="kWh" />} />
                                    <Bar dataKey="Emisiones por tonelada" stackId="a" fill={greenColors[1]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Mitad derecha */}
                        <div className="w-1/2 flex flex-col">
                            <div className='flex flex-col h-1/2 w-full justify-end items-start px-8 py-2'>
                                <span className='font-bold text-sm'>Promedio mes de Enero</span>
                                <div>
                                    <span className='text-green-600 text-3xl font-bold mr-2'>0.25</span>
                                    <span className='text-sm mr-2'>kilovatios hora (kWh)</span>
                                </div>
                            </div>
                            {/* Contenedor con borde gris */}
                            <div className='flex h-1/2 w-full justify-center items-center'>
                                <div className="border-2 border-gray-400 p-2 w-4/5 rounded-lg"> {/* Redondear el contenedor */}
                                    <div className="flex text-sm items-center mb-2 justify-between">
                                        <span className='text-xs lg:text-base font-bold'>Promedio Mensual</span>
                                        <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section1')} />
                                    </div>
                                    {this.state.expandedSections.section1 && (
                                        <>
                                            <hr className="border-gray-400 my-2" />
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="flex text-sm items-center mb-2">
                                                    <span className='text-red-500 text-xl lg:text-3xl font-bold mr-2'>-38%</span>
                                                    <img src={decrease} alt="decrease" className="w-5 h-5 lg:w-10 lg:h-10" />
                                                </div>
                                                <div className="flex text-sm items-center">
                                                    <span className='text-xs lg:text-base'>Menor al promedio de industria</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </Card>
                <Card id='2' title='Porcentaje de energía renovable' color='green'>
                    <div className="flex h-full">
                        <div className='w-1/2'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie dataKey="value" data={data02} cx="50%" cy="50%">
                                        {data02.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={greenColors[index % greenColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='w-full flex flex-col h-1/2 items-start justify-center p-4'>
                                <div><span style={{ color: greenColors[0], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data02[0].name}</span></div>
                                <div><span style={{ color: greenColors[1], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data02[1].name}</span></div>
                                <div><span style={{ color: greenColors[2], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data02[2].name}</span></div>
                            </div>
                            <div className='w-full flex flex-col h-1/2 items-start justify-start p-4'>
                                <div className="border-2 border-gray-400 p-2 rounded-lg w-full mr-5"> {/* Redondear el contenedor */}
                                    <div className="flex text-sm items-center mb-2 justify-between">
                                        <span className='text-xs lg:text-base font-bold'>Promedio de industria</span>
                                        <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section2')} />
                                    </div>
                                    {this.state.expandedSections.section2 && (
                                        <>
                                            <hr className="border-gray-400 my-2" />
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="flex text-sm items-center mb-2">
                                                    <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>+5%</span>
                                                    <img src={increase} alt="decrease" className="w-5 h-5 lg:w-10 lg:h-10" />
                                                </div>
                                                <div className="flex text-sm items-center">
                                                    <span className='text-xs lg:text-base'>Mayor al promedio de industria</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
