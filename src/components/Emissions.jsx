/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { LineChart, Line, PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
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
    { id: 1, name: 'Enero', 'Emisiones 1': 4100, 'Emisiones 2': 4200, 'Emisiones 3': 4600, 'Emisiones 4': 4800 },
    { id: 2, name: 'Febrero', 'Emisiones 1': 4000, 'Emisiones 2': 4300, 'Emisiones 3': 4500, 'Emisiones 4': 4700 },
    { id: 3, name: 'Marzo', 'Emisiones 1': 4200, 'Emisiones 2': 4100, 'Emisiones 3': 4750, 'Emisiones 4': 4900 },
    { id: 4, name: 'Abril', 'Emisiones 1': 4300, 'Emisiones 2': 4200, 'Emisiones 3': 4800, 'Emisiones 4': 5000 },
    { id: 5, name: 'Mayo', 'Emisiones 1': 4400, 'Emisiones 2': 4000, 'Emisiones 3': 4900, 'Emisiones 4': 5200 },
    { id: 6, name: 'Junio', 'Emisiones 1': 4100, 'Emisiones 2': 4100, 'Emisiones 3': 4700, 'Emisiones 4': 5100 },
    { id: 7, name: 'Julio', 'Emisiones 1': 4200, 'Emisiones 2': 4400, 'Emisiones 3': 4800, 'Emisiones 4': 5150 },
    { id: 8, name: 'Agosto', 'Emisiones 1': 4000, 'Emisiones 2': 4300, 'Emisiones 3': 4600, 'Emisiones 4': 5250 },
    { id: 9, name: 'Septiembre', 'Emisiones 1': 4100, 'Emisiones 2': 4200, 'Emisiones 3': 4550, 'Emisiones 4': 5100 },
    { id: 10, name: 'Octubre', 'Emisiones 1': 4300, 'Emisiones 2': 4100, 'Emisiones 3': 4700, 'Emisiones 4': 4950 },
    { id: 11, name: 'Noviembre', 'Emisiones 1': 4400, 'Emisiones 2': 4200, 'Emisiones 3': 4800, 'Emisiones 4': 5000 },
    { id: 12, name: 'Diciembre', 'Emisiones 1': 4200, 'Emisiones 2': 4300, 'Emisiones 3': 4900, 'Emisiones 4': 5300 },
];

const data03 = [
    { name: 'Huella de carbono de proveedores', value: 250 },
    { name: 'Huella hídrica de proveedores', value: 300 },
    { name: 'Huella de energía de proveedores', value: 300 },
];

const data04 = [
    { name: 'Huella de carbono de residuos', value: 150 },
    { name: 'Huella hídrica de residuos', value: 300 },
    { name: 'Huella de residuos no reciclables', value: 250 },
];

export default class Example extends PureComponent {
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
            Math.min(item['Emisiones 1'], item['Emisiones 2'], item['Emisiones 3'], item['Emisiones 4'])
        )) - 100;

        const maxY = Math.max(...data02.map(item =>
            Math.max(item['Emisiones 1'], item['Emisiones 2'], item['Emisiones 3'], item['Emisiones 4'])
        )) + 100;
        return (
            <div className='flex flex-wrap mx-0 py-0 md:mx-4 md:py-4'>
                <Card id='1' title='Emisiones por tonelada producida promedio' color='green' panelType='emisiones'>
                    <div className="flex h-full">
                        {/* Mitad izquierda */}
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            {/* Círculo verde */}
                            <div className={`w-36 h-36 lg:w-40 lg:h-40 bg-custom-mid-green rounded-full flex items-center justify-center mb-3`}>
                                <div className="text-center">
                                    <span className="text-2xl sm:text-4xl text-white font-bold">228</span>
                                    <span className='text-2xl sm:texl-4xl text-white'> tCO<sup>2</sup>e</span>
                                    <p className="text-sm w-[99%] text-white">Unidad producida</p>
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
                        {/* Mitad derecha */}
                        <div className="w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data01}
                                >
                                    <XAxis dataKey="name" hide={true} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip desc={<>tCO<sup>2</sup>e</>} />} />
                                    <Bar dataKey="Emisiones por tonelada" stackId="a" fill={greenColors[2]} radius={[5, 5, 5, 5]} barSize={10} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Card>
                <Card id='2' title='Emisiones' color='green' panelType='emisiones'>
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
                                    <Line type="monotone" dataKey='Emisiones 1' stroke="#00B971" strokeWidth={3} />
                                    <Line type="monotone" dataKey='Emisiones 2' stroke="#0DFF6E" strokeWidth={3} />
                                    <Line type="monotone" dataKey='Emisiones 3' stroke="#006C42" strokeWidth={3} />
                                    <Line type="monotone" dataKey='Emisiones 4' stroke="#5AFF9C" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Sección Inferior (40%) */}
                        <div style={{ flex: 0.4, display: 'flex', flexDirection: 'row' }}>

                            {/* Leyenda (60%) */}
                            <div style={{
                                flex: 0.4,
                                paddingLeft: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center', // para centrar verticalmente
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div><span style={{ color: '#00B971', fontSize: '30px' }}>●</span> <span style={{ fontSize: '16px' }}>Emisiones 1</span></div>
                                    <div><span style={{ color: '#0DFF6E', fontSize: '30px' }}>●</span> <span style={{ fontSize: '16px' }}>Emisiones 2</span></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div><span style={{ color: '#006C42', fontSize: '30px' }}>●</span> <span style={{ fontSize: '16px' }}>Emisiones 3</span></div>
                                    <div><span style={{ color: '#5AFF9C', fontSize: '30px' }}>●</span> <span style={{ fontSize: '16px' }}>Emisiones 4</span></div>
                                </div>
                            </div>
                            <div style={{ flex: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                <div className="border-2 border-gray-400 p-2 rounded-lg w-3/5 mr-5"> {/* Redondear el contenedor */}
                                    <div className="flex text-sm items-center mb-2 justify-between">
                                        <span className='text-xs lg:text-base font-bold'>Emisiones 1</span>
                                        <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section2')} />
                                    </div>
                                    {this.state.expandedSections.section2 && (
                                        <>
                                            <hr className="border-gray-400 my-2" />
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="flex text-sm items-center mb-2">
                                                    <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>+5%</span>
                                                    <span className='text-md lg:text-xl font-base mr-2'>tCO<sup>2</sup>e</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </Card>

                <Card id='3' title='Huella asociada a proveedores' color='green' panelType='emisiones'>
                    <div className="flex h-full">
                        <div className='w-1/2'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie dataKey="value" data={data03} cx="50%" cy="50%">
                                        {data03.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={greenColors[index % greenColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='w-full flex flex-col h-1/2 items-start justify-center p-4'>
                                <div><span style={{ color: greenColors[0], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data03[0].name}</span></div>
                                <div><span style={{ color: greenColors[1], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data03[1].name}</span></div>
                                <div><span style={{ color: greenColors[2], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data03[2].name}</span></div>
                            </div>
                            <div className='w-full flex flex-col h-1/2 items-start justify-start p-4'>
                                <div className="border-2 border-gray-400 p-2 rounded-lg w-full mr-5"> {/* Redondear el contenedor */}
                                    <div className="flex text-sm items-center mb-2 justify-between">
                                        <span className='text-xs lg:text-base font-bold'>Promedio de industria</span>
                                        <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section3')} />
                                    </div>
                                    {this.state.expandedSections.section3 && (
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
                <Card id='4' title='Huella asociada a residuos' color='green' panelType='emisiones'>
                    <div className="flex h-full">
                        <div className='w-1/2'>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie dataKey="value" data={data04} cx="50%" cy="50%">
                                        {data04.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={greenColors[index % greenColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <div className='w-full flex flex-col h-1/2 items-start justify-center p-4'>
                                <div><span style={{ color: greenColors[0], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data04[0].name}</span></div>
                                <div><span style={{ color: greenColors[1], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data04[1].name}</span></div>
                                <div><span style={{ color: greenColors[2], fontSize: '30px' }}>●</span> <span style={{ fontSize: '15px' }}>{data04[2].name}</span></div>
                            </div>
                            <div className='w-full flex flex-col h-1/2 items-start justify-start p-4'>
                                <div className="border-2 border-gray-400 p-2 rounded-lg w-full mr-5"> {/* Redondear el contenedor */}
                                    <div className="flex text-sm items-center mb-2 justify-between">
                                        <span className='text-xs lg:text-base font-bold'>Promedio de industria</span>
                                        <img src={see} alt="See" className="mt-3 lg:mt-0 mr-2 cursor-pointer" onClick={() => this.handleToggleExpand('section4')} />
                                    </div>
                                    {this.state.expandedSections.section4 && (
                                        <>
                                            <hr className="border-gray-400 my-2" />
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="flex text-sm items-center mb-2">
                                                    <span className='text-red-500 text-xl lg:text-3xl font-bold mr-2'>-5%</span>
                                                    <img src={decrease} alt="decrease" className="w-5 h-5 lg:w-10 lg:h-10" />
                                                </div>
                                                <div className="flex text-sm items-center">
                                                    <span className='text-xs lg:text-base'>Menor al promedio de la industria</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                {/* Más tarjetas aquí */}
            </div>
        );
    }
}
