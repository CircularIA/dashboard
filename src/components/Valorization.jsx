/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import see from '../assets/see.svg'
import savedWater from '../assets/saved-water.svg'
import savedTrees from '../assets/saved-trees.svg'
import peopleEmissions from '../assets/people-emissions.svg'
import houseConsume from '../assets/house-consume.svg'
import decrease from '../assets/decrease.svg'
import Card from './Card'
import CustomTooltip from './CustomTooltip';

const greenColors = [
    '#0DFF6E', // Verde más claro
    '#00B971',
    '#006C42'  // Verde más oscuro
];

const data01 = [
    { name: 'Residuos compostables', value: 250 },
    { name: 'Residuos reciclados', value: 300 },
    { name: 'Residuos no reciclables', value: 300 },
];

const data02 = [
    { name: '01', 'Disposición en basurales': 2800, 'Reciclaje': 2300, 'Compostaje': 3600 },
    { name: '02', 'Disposición en basurales': 1258, 'Reciclaje': 2600, 'Compostaje': 2900 },
    { name: '03', 'Disposición en basurales': 9100, 'Reciclaje': 2500, 'Compostaje': 2200 },
    { name: '04', 'Disposición en basurales': 3708, 'Reciclaje': 2100, 'Compostaje': 2980 },
    { name: '05', 'Disposición en basurales': 4600, 'Reciclaje': 2281, 'Compostaje': 1790 },
    { name: '06', 'Disposición en basurales': 4200, 'Reciclaje': 2400, 'Compostaje': 2190 },
    { name: '07', 'Disposición en basurales': 4000, 'Reciclaje': 2000, 'Compostaje': 3290 },
    { name: '08', 'Disposición en basurales': 4500, 'Reciclaje': 2300, 'Compostaje': 3190 },
    { name: '09', 'Disposición en basurales': 3900, 'Reciclaje': 2200, 'Compostaje': 3590 },
    { name: '10', 'Disposición en basurales': 4200, 'Reciclaje': 2150, 'Compostaje': 3090 },
    { name: '11', 'Disposición en basurales': 4300, 'Reciclaje': 2050, 'Compostaje': 2990 },
    { name: '12', 'Disposición en basurales': 4400, 'Reciclaje': 2100, 'Compostaje': 3090 },
];

const data03 = [
    { name: 'Enero', 'Residuos de empleados': 7 },
    { name: 'Febrero', 'Residuos de empleados': 46 },
    { name: 'Marzo', 'Residuos de empleados': 25 },
    { name: 'Abril', 'Residuos de empleados': 32 },
    { name: 'Mayo', 'Residuos de empleados': 25 },
    { name: 'Junio', 'Residuos de empleados': 19 },
    { name: 'Julio', 'Residuos de empleados': 12 },
    { name: 'Agosto', 'Residuos de empleados': 12 },
    { name: 'Septiembre', 'Residuos de empleados': 12 },
    { name: 'Octubre', 'Residuos de empleados': 13 },
    { name: 'Noviembre', 'Residuos de empleados': 7 },
    { name: 'Diciembre', 'Residuos de empleados': 6 },

]

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
                <Card id='1' title='Porcentaje de Residuos' color='green'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie dataKey="value" data={data01} cx="50%" cy="50%">
                                {data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={greenColors[index % greenColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card id='2' title='Taza de valorización' color='green'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data02}
                            className='mt-3'
                        >
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                            <Bar dataKey="Disposición en basurales" stackId="a" fill={greenColors[2]} barSize={10} />
                            <Bar dataKey="Reciclaje" stackId="a" fill={greenColors[1]} barSize={10} />
                            <Bar dataKey="Compostaje" stackId="a" fill={greenColors[0]} radius={[5, 5, 0, 0]} barSize={10} />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
                <Card id='3' title='Ecoequivalencia' color='green'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-1/2 p-4">
                            <div className="flex flex-wrap h-full text-center">
                                <div className="w-1/2 h-1/2 text-sm border-b-2 border-r-2 border-gray-400 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#006C42]'>
                                        <img src={savedWater} className='w-8 h-8 lg:w-16 lg:h-16 p-1'></img>
                                        <span className='text-md lg:text-3xl font-bold'>4lts</span>
                                    </div>
                                    <span className='text-xs font-medium'>Agua ahorrada</span>
                                </div>
                                <div className="w-1/2 h-1/2 text-sm p-2 border-b-2 border-gray-400 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#006C42]'>
                                        <img src={savedTrees} className='w-8 h-8 lg:w-16 lg:h-16 p-1'></img>
                                        <span className='text-md lg:text-3xl font-bold'>8</span>
                                    </div>
                                    <span className='text-xs font-medium'>Árboles salvados</span>
                                </div>
                                <div className="w-1/2 h-1/2 text-sm p-2 border-r-2 border-gray-400 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#006C42]'>
                                        <img src={houseConsume} className='w-8 h-8 lg:w-16 lg:h-16 p-1'></img>
                                        <span className='text-md lg:text-3xl font-bold'>6</span>
                                    </div>
                                    <span className='text-xs font-medium mr-1'>Consumo anual de energía equivalente</span>
                                </div>
                                <div className="w-1/2 h-1/2 text-sm p-2 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#006C42]'>
                                        <img src={peopleEmissions} className='w-8 h-8 lg:w-16 lg:h-16 p-1'></img>
                                        <span className='text-md lg:text-3xl font-bold'>10</span>
                                    </div>
                                    <span className='text-xs font-medium'>Emisiones anuales de persona</span>
                                </div>
                            </div>
                        </div>

                        {/* Mitad derecha */}
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            {/* Círculo verde */}
                            <div className={`w-36 h-36 lg:w-48 lg:h-48 bg-custom-dark-green rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-4xl text-white font-bold">1T</span>
                                    <p className="text-sm w-[99%] text-white">Compostaje y reciclaje</p>
                                </div>
                            </div>

                            {/* Contenedor con borde gris */}
                            <div className="border-2 border-gray-400 p-2 w-4/5 rounded-lg"> {/* Redondear el contenedor */}
                                <div className="flex text-sm items-center mb-2 justify-between">
                                    <span className='text-xs lg:text-base font-bold'>Ecoequivalencias de:</span>
                                    <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={this.handleToggleExpand} />
                                </div>
                                {this.state.isExpanded && (
                                    <>
                                        <hr className="border-gray-400 my-2" />
                                        <div className="flex text-sm items-center">
                                            <input type="checkbox" className="mr-2 custom-checkbox" />
                                            <span className='text-xs lg:text-base'>Compostaje</span>
                                        </div>
                                        <div className="flex text-sm items-center mt-2">
                                            <input type="checkbox" className="mr-2 custom-checkbox" />
                                            <span className='text-xs lg:text-base'>Reciclaje</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>

                <Card id='4' title='Valorización de residuos de empleados' color='green'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            {/* Círculo verde */}
                            <div className={`w-36 h-36 lg:w-40 lg:h-40 bg-custom-dark-green rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-4xl text-white font-bold">18Kg</span>
                                    <p className="text-sm w-[99%] text-white">De residuos por empleado</p>
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
                                                <span className='text-red-500 text-xl lg:text-3xl font-bold mr-2'>-4%</span>
                                                <img src={decrease} alt="decrease" className="w-5 h-5 lg:w-10 lg:h-10"/>
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
                                    data={data03}
                                >
                                    <XAxis dataKey="name" hide={true} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc='Kg'/>} />
                                    <Bar dataKey="Residuos de empleados" stackId="a" fill={greenColors[2]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                {/* Más tarjetas aquí */}
            </div>
        );
    }
}
