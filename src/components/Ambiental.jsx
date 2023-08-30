/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import infoAmbiental from '../assets/info-ambiental.svg';

const Card = ({ id, title, children }) => (
    <div className='w-full sm:w-1/2 p-4'>
        {/* <div className='border p-4 rounded custom-shadow'> */}
        <div className='mt-4 items-center custom-shadow rounded-lg p-4'>
            <div className='flex items-center mb-4'>
                <h3 className='text-roboto tracking-tighter text-2xl font-medium green-text'>{id}.- {title}</h3>
                <img src={infoAmbiental} alt='info' className='ml-4' />
            </div>
            <div className='h-64 overflow-hidden'> {/* Altura fija para el contenedor del gráfico */}
                {children}
            </div>
        </div>
    </div>
);

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

export default class Example extends PureComponent {
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
                <Card id='1' title='Porcentaje de Residuos'>
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
                <Card id='2' title='Taza de valorización'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data02}
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
                <Card id='3' title='Porcentaje de Residuos'>
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
                <Card id='4' title='Porcentaje de Residuos'>
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
                {/* Más tarjetas aquí */}
            </div>
        );
    }
}
