//Recursos
import ImagenFlujos from '../../../assets/Iconos/Flujos.svg'
import ImagenAgua from '../../../assets/Iconos/Agua.svg'
import ImagenEmisiones from '../../../assets/Iconos/Emisiones.svg'
import ImagenEnergia from '../../../assets/Iconos/Energia.svg'
import ImagenEficiencia from '../../../assets/Iconos/Eficiencia.svg'
import ImagenOrganizacional from '../../../assets/Iconos/Organizacional.svg'

export const tiposAmbiental = [
    {
        nombre: 'Flujos',
        imagen: ImagenFlujos,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Emisiones',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Energia',
        imagen: ImagenEnergia,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Eficiencia',
        imagen: ImagenEficiencia,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Agua',
        imagen: ImagenAgua,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Organizacional',
        imagen: ImagenOrganizacional,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    }
]
export const tiposEconomico = [
    {
        nombre: 'Ingreso Circ.',
        imagen: ImagenFlujos,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Inversion Circ.',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Ahorro',
        imagen: ImagenAgua,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    }
]

export const tiposSocial = [
    {
        nombre: 'Empleos',
        imagen: ImagenFlujos,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Educacion',
        imagen: ImagenAgua,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Seguridad',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Sinergía',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    },
    {
        nombre: 'Interno',
        imagen: ImagenEmisiones,
        descripcion: 'Indicadores relacionados con el nivel de circularidad de los flujos de entrada y salida'
    }
]

export const opcionesTarjetas = {
    Flujos: [
        { id: 1 , nombre: 'Porcentaje de valorización ciclo biológico' },
        { id: 2 , nombre: 'Porcentaje de valorización ciclo técnico' },
        { id: 3 , nombre: 'Porcentaje circularidad de entrada' },
        { id: 4 , nombre: 'Porcentaje circularidad de salida' },
    ],
    Emisiones: [
        { id: 1 , nombre: 'Cantidad de metano que se convierte en energía' },
        { id: 2 , nombre: 'Emisiones en CO2eq que produce cada proceso y la planta' },
        { id: 3 , nombre: 'TonCO2eq/ton dispuesta' },
        { id: 4 , nombre: 'Emisiones evitadas: TonCO2eq/ton valorizada vs. disposición, factores de emisión' },
    ],
    'Ingreso Circ.': [
        { id: 1 , nombre: 'Expresa el valor que una compañía genera por unidad de flujo lineal.' },
        { id: 2 , nombre: 'Cierre del loop: Relación objetiva y cuantitativa con impacto financiero.' },
        { id: 3 , nombre: 'Es la suma de los CTI ingresos por productos para calcular el total de la compañía.' },
        { id: 4 , nombre: 'Es el porcentaje de ingresos proveniente de actividades circulares en relación al total de ingresos' },
    ],
    Empleos: [
        { id: 1 , nombre: 'Cantidad de metano que se convierte en energía' },
        { id: 2 , nombre: 'Emisiones en CO2eq que produce cada proceso y la planta' },
        { id: 3 , nombre: 'TonCO2eq/ton dispuesta' },
        { id: 4 , nombre: 'Emisiones evitadas: TonCO2eq/ton valorizada vs. disposición, factores de emisión' },
    ],
    // ... otras opciones para las demás tarjetas
};