import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Enero',
      social: 4000,
      ambiental: 2400,
      economico: 2400,
    },
    {
      name: 'Febrero',
      social: 3000,
      ambiental: 1398,
      economico: 2210,
    },
    {
      name: 'Marzo',
      social: 2000,
      ambiental: 9800,
      economico: 2290,
    },
    {
      name: 'Abril',
      social: 2780,
      ambiental: 3908,
      economico: 2000,
    },
    {
      name: 'Mayo',
      social: 1890,
      ambiental: 4800,
      economico: 2181,
    },
    {
      name: 'Junio',
      social: 2390,
      ambiental: 3800,
      economico: 2500,
    },
    {
      name: 'Julio',
      social: 3490,
      ambiental: 4300,
      economico: 2100,
    },
    {
        name: 'Agosto',
        social: 3490,
        ambiental: 2300,
        economico: 1100,
    },
    {
        name: 'Septiembre',
        social: 3490,
        ambiental: 4300,
        economico: 2100,
    },
    {
        name: 'Octubre',
        social: 3490,
        ambiental: 2300,
        economico: 1100,
    }, 
    {
        name: 'Noviembre',
        social: 3490,
        ambiental: 4300,
        economico: 2100,
    }, 
    {
        name: 'Diciembre',
        social: 3490,
        ambiental: 2300,
        economico: 1100,
    }
  ];


function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={10}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#000" />
            <YAxis stroke="#000" />
            <Tooltip />
            <Legend />
            <Bar dataKey="social" stackId='a'  fill='#2D7DD2' />
            <Bar dataKey="ambiental" stackId='a'  fill='#00B971' />
            <Bar dataKey="economico" stackId='a'  fill='#F3A430' />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent