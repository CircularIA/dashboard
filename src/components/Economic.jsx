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

const orangeColors = [
    '#FBC946', // Naranja más claro
    '#FFB200',
    '#E4570D'  // Naranja más oscuro
];

const data01 = [
    { name: 'Enero', 'Inversión en circularidad': 157342 },
    { name: 'Febrero', 'Inversión en circularidad': 283921 },
    { name: 'Marzo', 'Inversión en circularidad': 168504 },
    { name: 'Abril', 'Inversión en circularidad': 276830 },
    { name: 'Mayo', 'Inversión en circularidad': 192467 },
    { name: 'Junio', 'Inversión en circularidad': 254109 },
    { name: 'Julio', 'Inversión en circularidad': 231578 },
    { name: 'Agosto', 'Inversión en circularidad': 172394 },
    { name: 'Septiembre', 'Inversión en circularidad': 289123 },
    { name: 'Octubre', 'Inversión en circularidad': 203456 },
    { name: 'Noviembre', 'Inversión en circularidad': 203456 },
    { name: 'Diciembre', 'Inversión en circularidad': 203456 },
]

const data02 = [
    { name: 'Residuos compostables', value: 250 },
    { name: 'Residuos reciclados', value: 300 },
    { name: 'Residuos no reciclables', value: 300 },
];

export default class Example extends PureComponent {
    state = {
        isExpanded: false,
        isExpanded2: false,
    }
    handleToggleExpand = () => {
        this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
    }
    handleToggleExpand2 = () => {
        this.setState(prevState => ({ isExpanded2: !prevState.isExpanded2 }));
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
                <Card id='1' title='Inversión en circularidad' color='orange'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            {/* Círculo verde */}
                            <div className={`w-36 h-36 lg:w-40 lg:h-40 bg-custom-dark-orange rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-3xl text-white font-bold">$250,000</span>
                                    <p className="text-xs w-[99%] text-white">De inversión promedio en circuularidad</p>
                                </div>
                            </div>

                            {/* Contenedor con borde gris */}
                            <div className="border-2 border-gray-400 p-2 w-4/5 rounded-lg"> {/* Redondear el contenedor */}
                                <div className="flex text-sm items-center mb-2 justify-between">
                                    <span className='text-xs lg:text-base font-bold'>Promedio Mensual</span>
                                    <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={this.handleToggleExpand2} />
                                </div>
                                {this.state.isExpanded2 && (
                                    <>
                                        <hr className="border-gray-400 my-2" />
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex text-sm items-center mb-2">
                                                <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>+4%</span>
                                                <img src={increase} alt="decrease" className="w-5 h-5 lg:w-10 lg:h-10" />
                                            </div>
                                            <div className="flex text-sm items-center">
                                                <span className='text-xs lg:text-base'>Promedio de industria</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Mitad derecha */}
                        <div className="w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data01}
                                >
                                    <XAxis dataKey="name" hide={true} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc="$" />} />
                                    <Bar dataKey="Inversión en circularidad" stackId="a" fill={orangeColors[1]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card id='2' title='Porcentaje de Residuos' color='orange'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie dataKey="value" data={data02} cx="50%" cy="50%">
                                {data02.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={orangeColors[index % orangeColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card id='3' title='Porcentaje de Residuos' color='orange'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie dataKey="value" data={data02} cx="50%" cy="50%">
                                {data02.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={orangeColors[index % orangeColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card id='4' title='Porcentaje de Residuos' color='orange'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie dataKey="value" data={data02} cx="50%" cy="50%">
                                {data02.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={orangeColors[index % orangeColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                {/* Más tarjetas aquí */}
            </div>
        );
    }
}
