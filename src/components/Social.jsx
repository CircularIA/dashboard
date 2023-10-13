/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Card from './Card'

const blueColors = [
    '#40B7FF', // Azul más claro
    '#2D7DD1',
    '#1D36AE'  // Azul más oscuro
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
                <Card id='1' title='Porcentaje de Residuos' color="blue">
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
                <Card id='2' title='Porcentaje de Residuos' color="blue">
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
                <Card id='3' title='Porcentaje de Residuos' color="blue">
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
                <Card id='4' title='Porcentaje de Residuos' color="blue">
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
