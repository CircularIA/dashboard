/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { LineChart, Line, PieChart, Pie, Legend, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts'
import { BarChart, Bar, XAxis } from 'recharts'
import see from '../assets/see.svg'
import decrease from '../assets/decrease.svg'
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
    { id: 1, name: 'Enero', 'Agua de entrada': 4100, 'Agua de salida': 4200 },
    { id: 2, name: 'Febrero', 'Agua de entrada': 4000, 'Agua de salida': 4300 },
    { id: 3, name: 'Marzo', 'Agua de entrada': 4200, 'Agua de salida': 4100 },
    { id: 4, name: 'Abril', 'Agua de entrada': 4300, 'Agua de salida': 4200 },
    { id: 5, name: 'Mayo', 'Agua de entrada': 4400, 'Agua de salida': 4000 },
    { id: 6, name: 'Junio', 'Agua de entrada': 4100, 'Agua de salida': 4100 },
    { id: 7, name: 'Julio', 'Agua de entrada': 4200, 'Agua de salida': 4400 },
    { id: 8, name: 'Agosto', 'Agua de entrada': 4000, 'Agua de salida': 4300 },
    { id: 9, name: 'Septiembre', 'Agua de entrada': 4100, 'Agua de salida': 4200 },
    { id: 10, name: 'Octubre', 'Agua de entrada': 4300, 'Agua de salida': 4100 },
    { id: 11, name: 'Noviembre', 'Agua de entrada': 4400, 'Agua de salida': 4200 },
    { id: 12, name: 'Diciembre', 'Agua de entrada': 4200, 'Agua de salida': 4300 },
];


export default class Example extends PureComponent {
    state = {
        expandedSections: {
            section1: false,
            section2: false,
            section3: false,
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
        const minY = Math.min(...data02.map(item =>
            Math.min(item['Agua de entrada'], item['Agua de salida'])
        )) - 100;

        const maxY = Math.max(...data02.map(item =>
            Math.max(item['Agua de entrada'], item['Agua de salida'])
        )) + 100;
        return (
            <div className='flex flex-wrap mx-0 py-0 md:mx-4 md:py-4'>
                <Card id='1' title='Consumo de agua / empleado' color='green' panelType='agua'>
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
                                    <Tooltip content={<CustomTooltip desc='Lts diarios/empleado' />} />
                                    <Bar dataKey="Emisiones por tonelada" stackId="a" fill={greenColors[2]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Mitad derecha */}
                        <div className="w-1/2 flex flex-col">
                            <div className='flex flex-col h-1/2 w-full justify-end items-start ml-8 py-2'>
                                <span className='font-bold text-sm'>Promedio mes de Enero</span>
                                <div>
                                    <span className='text-green-600 text-3xl font-bold mr-2'>150</span>
                                    <span className='text-sm mr-2'>litros por empleado por día</span>
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
                <Card id='2' title='Agua circular' color='green' panelType='agua'>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                        {/* Sección del Gráfico (60%) */}
                        <div style={{ flex: 0.6 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={data02}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="2 2" />
                                    <XAxis dataKey="id" />
                                    <Tooltip />
                                    <YAxis domain={[minY, maxY]} hide={true} />
                                    <Line type="monotone" dataKey='Agua de entrada' stroke={greenColors[0]} strokeWidth={3} />
                                    <Line type="monotone" dataKey='Agua de salida' stroke={greenColors[2]} strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Sección Inferior (40%) */}
                        <div style={{ flex: 0.4, display: 'flex', flexDirection: 'row' }}>
                            <div className='w-1/2'>
                                <div className='flex w-full justify-center items-center'>
                                    <div className="border-2 border-gray-400 p-2 w-[90%] rounded-lg"> {/* Redondear el contenedor */}
                                        <div className="flex text-sm items-center mb-2 justify-between">
                                            <span className='text-xs lg:text-base font-bold'>Agua de entrada</span>
                                            <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section2')} />
                                        </div>
                                        {this.state.expandedSections.section2 && (
                                            <>
                                                <hr className="border-gray-400 my-2" />
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="flex text-sm items-end mb-2">
                                                        <span className='text-green-600 text-xl lg:text-4xl font-bold mr-2'>10000</span>
                                                        <span className='text-sm mr-2'>litros</span>
                                                    </div>
                                                    
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <div className='flex w-full justify-center items-center'>
                                    <div className="border-2 border-gray-400 p-2 w-[90%] rounded-lg"> {/* Redondear el contenedor */}
                                        <div className="flex text-sm items-center mb-2 justify-between">
                                            <span className='text-xs lg:text-base font-bold'>Agua de salida</span>
                                            <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section3')} />
                                        </div>
                                        {this.state.expandedSections.section3 && (
                                            <>
                                                <hr className="border-gray-400 my-2" />
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="flex text-sm items-end mb-2">
                                                        <span className='text-green-600 text-xl lg:text-4xl font-bold mr-2'>8000</span>
                                                        <span className='text-sm mr-2'>litros</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </Card>

            </div>
        );
    }
}
