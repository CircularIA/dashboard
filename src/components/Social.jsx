/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { LineChart, Line } from 'recharts'
import CustomTooltip from './CustomTooltip'
import Card from './Card'
import see from '../assets/see.svg'
import decrease from '../assets/decrease.svg'
import increase from '../assets/increase.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import icon6 from '../assets/icon6.svg'

const blueColors = [
    '#40B7FF', // Azul más claro
    '#2D7DD1',
    '#1D36AE'  // Azul más oscuro
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
    { name: '1', hours: 100 },
    { name: '2', hours: 500 },
    { name: '3', hours: 700 },
    { name: '4', hours: 1500 },
    { name: '5', hours: 2400 },
    { name: '6', hours: 2700 },
    { name: '7', hours: 2600 },
    { name: '8', hours: 2800 },
    { name: '9', hours: 2900 },
    { name: '10', hours: 3100 },
    { name: '11', hours: 3300 },
    { name: '12', hours: 3200 },
];

const data03 = [
    { name: 'Cadena de suministros', value: 16 },
    { name: 'Agua', value: 13 },
    { name: 'Energía', value: 11 },
    { name: 'Emisiones', value: 15 },
    { name: 'Valorización de residuos', value: 9 },
];

export default class Example extends PureComponent {
    renderCustomAxisTick = ({ x, y, payload }) => {
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">{payload.value}</text>
            </g>
        );
    };
    renderLegend() {
        const width = window.innerWidth;
        if (width <= 768) { // Tamaño para sm y md
            return <Legend height={36} />;
        } else {
            return <Legend layout="vertical" verticalAlign="middle" align="right" />;
        }
    }
    state = {
        expandedSections: {
            section1: false,
            section2: false,
            section3: false,
            section4: false,
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
    render() {
        return (
            <div className='flex flex-wrap mx-0 py-0 md:mx-4 md:py-4'>
                <Card id='1' title='Empleo verde' color='blue'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-[45%] flex flex-col items-center justify-center">
                            {/* Círculo azul */}
                            <div className={`w-36 h-36 lg:w-40 lg:h-40 bg-custom-dark-blue rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-4xl text-white font-bold">5</span>
                                    <span className='text-2xl sm:texl-4xl text-white'> % </span>
                                    <p className="text-sm w-[99%] text-white">Aumento de empleo</p>
                                </div>
                            </div>

                            {/* Contenedor con borde gris */}
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
                                                <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>8%</span>
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
                        <div className="w-[55%]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data01}
                                >
                                    <XAxis dataKey="name" hide={true} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc={<>tCO<sup>2</sup>e</>} />} />
                                    <Bar dataKey="Emisiones por tonelada" stackId="a" fill={blueColors[2]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card id='2' title='Instancias de cultura/empleado' color='blue'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-[45%] flex flex-col items-center justify-center">
                            {/* Círculo azul */}
                            <div className={`w-36 h-36 lg:w-40 lg:h-40 bg-custom-light-blue rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-4xl text-white font-bold">3,5</span>
                                    <p className="text-sm w-[99%] text-white">de horas por empleado</p>
                                </div>
                            </div>

                            {/* Contenedor con borde gris */}
                            <div className="border-2 border-gray-400 p-2 w-4/5 rounded-lg"> {/* Redondear el contenedor */}
                                <div className="flex text-sm items-center mb-2 justify-between">
                                    <span className='text-xs lg:text-base font-bold'>Promedio Mensual</span>
                                    <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section2')} />
                                </div>
                                {this.state.expandedSections.section2 && (
                                    <>
                                        <hr className="border-gray-400 my-2" />
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex text-sm items-center mb-2">
                                                <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>26%</span>
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
                        <div className="w-[55%]">
                            <ResponsiveContainer width="100%" aspect={4.0 / 3.0} className={'flex items-center'}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data02}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <Tooltip />
                                    <Line dataKey="hours" stroke="#40B7FF" strokeWidth={4} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card id='3' title='Porcentaje de mujeres' color='blue'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-[45%] flex flex-col items-center justify-center">
                            {/* Círculo azul */}
                            <div className={`w-36 h-36 lg:w-40 lg:h-40 bg-custom-mid-blue rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-4xl text-white font-bold">35</span>
                                    <span className='text-2xl sm:texl-4xl text-white'> % </span>
                                    <p className="text-sm w-[99%] text-white">Empleados son mujeres</p>
                                </div>
                            </div>

                            {/* Contenedor con borde gris */}
                            <div className="border-2 border-gray-400 p-2 w-4/5 rounded-lg"> {/* Redondear el contenedor */}
                                <div className="flex text-sm items-center mb-2 justify-between">
                                    <span className='text-xs lg:text-base font-bold'>Promedio Mensual</span>
                                    <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section3')} />
                                </div>
                                {this.state.expandedSections.section3 && (
                                    <>
                                        <hr className="border-gray-400 my-2" />
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex text-sm items-center mb-2">
                                                <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>5%</span>
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
                        <div className="w-[55%]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data01}
                                >
                                    <XAxis dataKey="name" hide={true} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc={<>tCO<sup>2</sup>e</>} />} />
                                    <Bar dataKey="Emisiones por tonelada" stackId="a" fill={blueColors[2]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card id='4' title='Social explícito' color='blue'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="p-4">
                            <div className="flex flex-wrap h-full text-center">
                                <div className="w-1/3 h-1/2 text-sm flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#1D36AE]'>
                                        <span className='text-lg lg:text-5xl font-bold'>11</span>
                                        <img src={icon1} className='w-6 h-6 lg:w-12 lg:h-12 p-1'></img>
                                    </div>
                                    <span className='text-xs font-medium'>Alumnos/estudiantes apoyados</span>
                                </div>
                                <div className="w-1/3 h-1/2 text-sm p-2 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#40B7FF]'>
                                        <span className='text-lg lg:text-5xl font-bold'>20</span>
                                        <img src={icon2} className='w-6 h-6 lg:w-12 lg:h-12 p-1'></img>
                                    </div>
                                    <span className='text-xs font-medium'>Dueñas de casa apoyadas</span>
                                </div>
                                <div className="w-1/3 h-1/2 text-sm flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#0E6DD1]'>
                                        <span className='text-lg lg:text-5xl font-bold'>40M</span>
                                        <img src={icon3} className='w-6 h-6 lg:w-12 lg:h-12 p-1'></img>
                                    </div>
                                    <span className='text-xs font-medium mr-1'>Actividades mensuales para apoyar instituciones</span>
                                </div>
                                <div className="w-1/3 h-1/2 text-sm p-2 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#2648E8]'>
                                        <span className='text-lg lg:text-5xl font-bold'>15</span>
                                        <img src={icon4} className='w-6 h-6 lg:w-12 lg:h-12 p-1'></img>
                                    </div>
                                    <span className='text-xs font-medium'>Emprendimientos apoyados</span>
                                </div>
                                <div className="w-1/3 h-1/2 text-sm p-2 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#43E5FF]'>
                                        <span className='text-lg lg:text-5xl font-bold'>8</span>
                                        <img src={icon5} className='w-6 h-6 lg:w-12 lg:h-12 p-1'></img>
                                    </div>
                                    <span className='text-xs font-medium'>Proyectos de innovación sostenibles</span>
                                </div>
                                <div className="w-1/3 h-1/2 text-sm p-2 flex items-center justify-center flex-col">
                                    <div className='flex items-center text-[#1D36AE]'>
                                        <span className='text-lg lg:text-5xl font-bold'>34</span>
                                        <img src={icon6} className='w-6 h-6 lg:w-12 lg:h-12 p-1'></img>
                                    </div>
                                    <span className='text-xs font-medium'>Empleados de comunas en riesgo según índice social</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card id='5' title='Sinergia industrial' color='blue' fullWidth>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-[75%] flex flex-col items-center justify-center">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    layout="vertical"
                                    data={data03}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 15, // Ajuste el margen izquierdo según sea necesario
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" domain={[0, 'dataMax']} hide={false} />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        tick={{ textAnchor: 'start', fill: '#000', fontSize: 12 }} // ajusta dx para mover el texto hacia la izquierda
                                        tickLine={false}
                                        width={180} // ajusta el ancho según sea necesario para acomodar tus etiquetas
                                        tickMargin={180} // Ajusta el margen del tick si es necesario
                                    />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#40B7FF" radius={[5, 5, 5, 5]} barSize={10}>
                                        {
                                            data03.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={blueColors[index % blueColors.length]} />
                                            ))
                                        }
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Mitad derecha */}
                        <div className="w-[25%] flex flex-col items-center justify-center">
                            {/* Contenedor con borde gris */}
                            <div className="border-2 border-gray-400 p-2 w-4/5 rounded-lg"> {/* Redondear el contenedor */}
                                <div className="flex text-sm items-center mb-2 justify-between">
                                    <span className='text-xs lg:text-base font-bold'>Histórico</span>
                                    <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section4')} />
                                </div>
                                {this.state.expandedSections.section4 && (
                                    <>
                                        <hr className="border-gray-400 my-2" />
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="flex text-sm items-center mb-2">
                                                <div className="text-center">
                                                    <p className='font-bold font-start'>Emisiones por tonelada producida</p>
                                                    <span className="text-blue-600 text-2xl sm:text-4xl font-bold">228</span>
                                                    <span className='text-2xl sm:texl-4xl'> tCO<sup>2</sup>e</span>
                                                    <p className="text-sm w-[99%]">Unidad producida</p>
                                                </div>
                                            </div>
                                            <div className="flex text-sm items-center mb-2">
                                                <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>5%</span>
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
                    </div>
                </Card>
            </div>
        );
    }
}
