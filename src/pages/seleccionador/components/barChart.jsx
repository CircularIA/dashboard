import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const monthName = (month) => {
  if (month === '01' || month === '1') {
    return 'Enero'
  } else if (month === '02' || month === '2') {
    return 'Febrero'
  } else if (month === '03' || month === '3') {
    return 'Marzo'
  } else if (month === '04') {
    return 'Abril'
  } else if (month === '05') {
    return 'Mayo'
  } else if (month === '06') {
    return 'Junio'
  } else if (month === '07') {
    return 'Julio'
  } else if (month === '08') {
    return 'Agosto'
  } else if (month === '09') {
    return 'Septiembre'
  } else if (month === '10') {
    return 'Octubre'
  } else if (month === '11') {
    return 'Noviembre'
  } else if (month === '12') {
    return 'Diciembre'
  }
}

const montNumber = (month) => {
  if (month === 'Enero') {
    return 1
  } else if (month === 'Febrero') {
    return 2
  } else if (month === 'Marzo') {
    return 3
  } else if (month === 'Abril') {
    return 4
  } else if (month === 'Mayo') {
    return 5
  } else if (month === 'Junio') {
    return 6
  } else if (month === 'Julio') {
    return 7
  } else if (month === 'Agosto') {
    return 8
  } else if (month === 'Septiembre') {
    return 9
  } else if (month === 'Octubre') {
    return 10
  } else if (month === 'Noviembre') {
    return 11
  } else if (month === 'Diciembre') {
    return 12
  }
}

const colors = ['#2D7DD2', '#00B971', '#F3A430', '#FF0000', '#000000', '#0000FF', '#00FFFF', '#FF00FF', '#FFFF00', '#808080', '#800000', '#808000', '#008000', '#800080', '#008080', '#000080']

function BarChartComponent({dats, indicatorName}) {
  console.log("data Input", dats)
  console.log("indicatorName", indicatorName)
  const [data, setData] = useState([])
  useEffect(() => {
    //Transform dats to the format of the bar chart
    const aux = dats.map((dat) => {
      //Transform first letter to uppercase
      const month = dat.month.charAt(0).toUpperCase() + dat.month.slice(1)
      //Si el valor es -1, no se tiene en cuenta
      if (dat.value !== -1) {
        return {
          month: month,
          value: dat.value
        }
      }
    })
    //Remove the undefined values
    const aux2 = aux.filter((dat) => dat !== undefined)

    console.log("aux2", aux2)
    setData(aux2)
  }, [dats])
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
            <XAxis dataKey="month" stroke="#000" />
            <YAxis stroke="#000" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Valor del indicador" fill= '#00B971' />
            {/* <Bar dataKey="social" stackId='a'  fill='#2D7DD2' />
            <Bar dataKey="ambiental" stackId='a'  fill='#00B971' />
            <Bar dataKey="economico" stackId='a'  fill='#F3A430' /> */}
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent