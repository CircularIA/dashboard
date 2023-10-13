/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'
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
    { name: 'Suministros Regionales', value: 250 },
    { name: 'Suministros Nacionales', value: 300 },
    { name: 'Suministros  Internacionales', value: 300 },
];

const data02 = [
    { id: 1, name: 'Enero', 'Emisiones por tonelada': 237 },
    { id: 2, name: 'Febrero', 'Emisiones por tonelada': 389 },
    { id: 3, name: 'Marzo', 'Emisiones por tonelada': 172 },
    { id: 4, name: 'Abril', 'Emisiones por tonelada': 356 },
    { id: 5, name: 'Mayo', 'Emisiones por tonelada': 198 },
    { id: 6, name: 'Junio', 'Emisiones por tonelada': 274 },
    { id: 7, name: 'Julio', 'Emisiones por tonelada': 321 },
    { id: 8, name: 'Agosto', 'Emisiones por tonelada': 399 },
    { id: 9, name: 'Septiembre', 'Emisiones por tonelada': 153 },
    { id: 10, name: 'Octubre', 'Emisiones por tonelada': 367 },
    { id: 11, name: 'Noviembre', 'Emisiones por tonelada': 185 },
    { id: 12, name: 'Diciembre', 'Emisiones por tonelada': 278 },
]

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
                <Card id='1' title='Suministros locales' color='green'>
                    <div className="flex h-full">
                        <div className='w-1/2'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie dataKey="value" data={data01} cx="50%" cy="50%">
                                        {data01.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={greenColors[index % greenColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='w-full flex flex-col h-1/2 items-start justify-center p-4'>
                                <div><span style={{ color: greenColors[0], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data01[0].name}</span></div>
                                <div><span style={{ color: greenColors[1], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data01[1].name}</span></div>
                                <div><span style={{ color: greenColors[2], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data01[2].name}</span></div>
                            </div>
                            <div className='w-full flex flex-col h-1/2 items-start justify-start p-4'>
                                <div className="border-2 border-gray-400 p-2 rounded-lg w-full mr-5"> {/* Redondear el contenedor */}
                                    <div className="flex text-sm items-center mb-2 justify-between">
                                        <span className='text-xs lg:text-base font-bold'>Promedio Anual</span>
                                        <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section1')} />
                                    </div>
                                    {this.state.expandedSections.section1 && (
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
                <Card id='2' title='Huella de carbono suministros/unidad' color='green'>
                    <div className="flex flex-col h-full">
                        {/* Mitad izquierda */}
                        <div className="h-[70%]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data02}
                                >
                                    <XAxis dataKey="id" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc={<>tCO<sup>2</sup>e</>}/>} />
                                    <Bar dataKey="Emisiones por tonelada" stackId="a" fill={greenColors[0]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="h-[30%] flex items-end justify-center p-6">
                            <div className='flex items-center justify-center'>
                                <span style={{ color: greenColors[0], fontSize: '30px' }}>●</span>
                                <span className='text-5xl font-bold'>6</span>
                            </div>
                            <span className='p-2'>tCO<sup>2</sup>e / unidad</span>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
