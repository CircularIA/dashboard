/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState} from 'react';
import Ilustration from './Ilustration';
import porcentajeSalida from '../assets/ilustraciones/ilustracion1_1.png'
import porcentajeResiduos from '../assets/ilustraciones/ilustracion1_2.png'
import tazaValorizacion1 from '../assets/ilustraciones/ilustracion2_1.png'
import tazaValorizacion2 from '../assets/ilustraciones/ilustracion2_2.png'
import ecoEquivalencias from '../assets/ilustraciones/ilustracion3.png'
import emisionesUnidad from '../assets/ilustraciones/ilustracion5.png'
import emisiones1 from '../assets/ilustraciones/ilustracion6_1.png'
import emisiones2 from '../assets/ilustraciones/ilustracion6_2.png'
import emisiones3 from '../assets/ilustraciones/ilustracion6_3.png'
import emisiones4 from '../assets/ilustraciones/ilustracion6_4.png'
import emisiones5 from '../assets/ilustraciones/ilustracion6_5.png'
import emisiones6 from '../assets/ilustraciones/ilustracion6_6.png'
import huellaproveedores1 from '../assets/ilustraciones/ilustracion7_1.png'
import huellaproveedores2 from '../assets/ilustraciones/ilustracion7_2.png'
import huellaresiduos1 from '../assets/ilustraciones/ilustracion8_1.png'
import huellaresiduos2 from '../assets/ilustraciones/ilustracion8_2.png'
import energiaunidad from '../assets/ilustraciones/ilustracion9.png'
import aguaunidad from '../assets/ilustraciones/ilustracion11_1.png'
import aguaempleado from '../assets/ilustraciones/ilustracion11_2.png'
import entradaaguacircular from '../assets/ilustraciones/ilustracion12_1.png'
import salidaaguacircular from '../assets/ilustraciones/ilustracion12_2.png'
import suministroslocales from '../assets/ilustraciones/ilustracion13.png'
import huellasuministros from '../assets/ilustraciones/ilustracion14.png'

const InfoIcon = ({ stroke, onClick }) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className='cursor-pointer'>
        <g id="&#240;&#159;&#166;&#134; icon &#34;info circle&#34;">
            <g id="Group">
                <path id="Vector" d="M11 0.999997C5.5 0.999996 0.999999 5.5 0.999998 11C0.999998 16.5 5.5 21 11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 0.999997 11 0.999997Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M11 14.9999L11 9.99994" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M11.0056 7.00006L10.9923 7.00006" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
    </svg>
);


const infoColor = {
    green: '#0DFF6E', // Reemplaza con el color específico que deseas
    blue: '#40B7FF', // Reemplaza con el color específico que deseas
    orange: '#FBC946', // Reemplaza con el color específico que deseas
};


const Card = ({ id, title, color, children, fullWidth, panelType }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Esta función determina qué imagen usar basada en el id
    const getInfoForId = (id, panelType) => {
        const key = `${panelType}-${id}`; // Construye una clave única basada en el panelType y el id
        console.log(key)
        const infoMap = {
            'valorización-1': [{
                image: porcentajeSalida,
                title: "Pizarra de conceptos: Porcentaje circularidad de salida"
            },{
                image: porcentajeResiduos,
                title: 'Pizarra de conceptos: Porcentaje de residuos'
            }],
            'valorización-2': [{
                image: tazaValorizacion1,
                title: 'Pizarra de conceptos: Taza de valorización'
            },{
                image: tazaValorizacion2,
                title: 'Pizarra de conceptos: Taza de valorización'
            }],
            'valorización-3': [{
                image: ecoEquivalencias,
                title: 'Pizarra de conceptos: Ecoequivalencias'
            }],
            'emisiones-1': [{
                image: emisionesUnidad,
                title: 'Pizarra de conceptos: Emisiones por unidad'
            }],
            'emisiones-2': [{
                image:emisiones1,
                title: 'Pizarra de conceptos: Emisiones'
            },{
                image:emisiones2,
                title: 'Pizarra de conceptos: Emisiones'
            },
            {
                image:emisiones3,
                title: 'Pizarra de conceptos: Emisiones'
            },
            {
                image:emisiones4,
                title: 'Pizarra de conceptos: Emisiones'
            },
            {
                image:emisiones5,
                title: 'Pizarra de conceptos: Emisiones'
            },
            {
                image:emisiones6,
                title: 'Pizarra de conceptos: Emisiones'
            }],
            'emisiones-3':[{
                image:huellaproveedores1,
                title: 'Pizarra de conceptos: Huella asociada a proveedores'
            },{
                image:huellaproveedores2,
                title: 'Pizarra de conceptos: Huella asociada a proveedores'
            }],
            'emisiones-4':[{
                image:huellaresiduos1,
                title: 'Pizarra de conceptos: Huella asociada a residuos'
            },{
                image:huellaresiduos2,
                title: 'Pizarra de conceptos: Huella asociada a residuos'
            }],
            'energía-1':[{
                image:energiaunidad,
                title: 'Pizarra de conceptos: Energía / Unidad'
            }],
            'agua-1':[{
                image: aguaunidad,
                title: 'Pizarra de conceptos: Agua por unidad producida'
            },{
                image: aguaempleado,
                title: 'Pizarra de conceptos: Agua / Empleado'
            }],
            'agua-2':[{
                image: entradaaguacircular,
                title: 'Pizarra de conceptos: Entrada de Agua Circular'
            },{
                image: salidaaguacircular,
                title: 'Pizarra de conceptos: Salida de Agua Circular'
            }],
            'cadena-suministro-1':[{
                image: suministroslocales,
                title: 'Pizarra de conceptos: Suministros Locales'
            }],
            'cadena-suministro-2':[{
                image: huellasuministros,
                title: 'Pizarra de conceptos: Huella de carbono de suministros'
            }],
            // Agrega más combinaciones de panelType y id como sea necesario
        };
    111
        return infoMap[key] || [{
            image: 'default_image.webp', // imagen por defecto si no hay una específica
            title: 'No implementado'
        }];
    };
    


    // Manejador para abrir el modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Manejador para cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const infoItems = getInfoForId(id, panelType);

    // Aplicar una clase condicional basada en la prop fullWidth
    return(
        <div className={`p-4 ${fullWidth ? 'sm:w-full' : 'w-full sm:w-1/2'}`}>
            <div className='mt-4 items-center custom-shadow rounded-lg p-4'>
                <div className='flex items-center mb-3'>
                    <h3 className={`text-roboto tracking-tighter text-2xl font-medium ${color}-text mr-2`}>{id}.- {title}</h3>
                    <InfoIcon stroke={infoColor[color]} onClick={handleOpenModal} />
                </div>
                <div className='h-80 overflow-hidden'>
                    {children}
                </div>
            </div>
            {isModalOpen && (
                    <Ilustration 
                    infoItems={infoItems}
                    onClose={handleCloseModal} 
                />
                )}
        </div>
    )
}

export default Card;
