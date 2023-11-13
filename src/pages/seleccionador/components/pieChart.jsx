import { PieChart, Pie, Sector, Cell, Legend } from "recharts";


function PieChartComponent({ porcentaje, tipo }) {
    const data = [{
        porcentaje: porcentaje,
        tipo: tipo
    }]

    const handleColor = () => {
        if (tipo == 'AMBIENTAL'){
            return '#00B971'
        } else if (tipo == 'SOCIAL'){
            return '#2D7DD2'
        } else if (tipo == 'ECONOMICO'){
            return '#F3A430'
        }
    }
    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                cx={100}
                cy = {100}
                innerRadius={60}
                outerRadius={80}
                fill={handleColor()}
                paddingAngle={5}
                dataKey={'porcentaje'}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={handleColor()} />
                ))}
            </Pie>
        </PieChart>
    )
}

export default PieChartComponent