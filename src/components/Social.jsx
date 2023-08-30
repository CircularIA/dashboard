import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import infoSocial from '../assets/info-social.svg';

const Card = ({ id, title, children }) => (
    <div className='w-full sm:w-1/2 p-4'>
        {/* <div className='border p-4 rounded custom-shadow'> */}
        <div className='mt-4 items-center custom-shadow rounded-lg p-4'>
            <div className='flex items-center mb-4'>
                <h3 className='text-roboto tracking-tighter text-2xl font-medium blue-text'>{id}.- {title}</h3>
                <img src={infoSocial} alt='info' className='ml-4' />
            </div>
            <div className='h-64 overflow-hidden'> {/* Altura fija para el contenedor del gráfico */}
                {children}
            </div>
        </div>
    </div>
);

const blueColors = [
    '#40B7FF', // Verde más claro
    '#2D7DD1',
    '#1D36AE'  // Verde más oscuro
];

const data01 = [
    { name: 'Residuos compostables', value: 250 },
    { name: 'Residuos reciclados', value: 300 },
    { name: 'Residuos no reciclables', value: 300 },
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
                                    <Cell key={`cell-${index}`} fill={blueColors[index % blueColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card id='2' title='Porcentaje de Residuos'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie dataKey="value" data={data01} cx="50%" cy="50%">
                                {data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={blueColors[index % blueColors.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            {this.renderLegend()} {/* Llama a la función para renderizar la leyenda */}
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card id='3' title='Porcentaje de Residuos'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie dataKey="value" data={data01} cx="50%" cy="50%">
                                {data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={blueColors[index % blueColors.length]} />
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
                                    <Cell key={`cell-${index}`} fill={blueColors[index % blueColors.length]} />
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
