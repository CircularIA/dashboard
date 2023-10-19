/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import increase from '../../assets/increase.svg'
import { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaChevronRight, FaCheck } from 'react-icons/fa';

const ScoreCircle = ({ score }) => {
  let gradientId;
  let colorTop, colorBottom;

  if (score >= 70) {
    gradientId = "greenGradient";
    colorTop = "#008A55"; // DarkGreen
    colorBottom = "#0DFF6E"; // Lime
  } else if (score >= 40 && score <= 69) {
    gradientId = "yellowGradient";
    colorTop = "#FFB200"; // Gold
    colorBottom = "#FDED14"; // Yellow
  } else {
    gradientId = "redGradient";
    colorTop = "#A30A1A"; // DarkRed
    colorBottom = "#FF7C88"; // Red
  }

  return (
    <svg width="200" height="200" className="mx-auto">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: colorBottom, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: colorTop, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="3" fill={`url(#${gradientId})`} />
      <text x="100" y="110" fontSize="30" fontWeight="bold" textAnchor="middle" fill="white">{score}/100</text>
    </svg>
  );
};

const ProgressBar = ({ percentage }) => {
  let color;
  let light;

  if (percentage >= 70) { // Green
    color = "#4AD256";
    light = "rgba(74, 210, 86, 0.5)"
  } else if (percentage >= 40 && percentage <= 69) { // Yellow
    color = "#FFB200";
    light = "rgba(255, 178, 0, 0.5)"
  } else { // Red
    color = "#B52736";
    light = "#rgba(181, 39, 54, 0.5)"
  }

  return (
    <div className='w-full'>
      <div className="progress-bar-container rounded-lg h-6" style={{ backgroundColor: light }}>
        <div
          className="progress-bar-content rounded-lg"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};



const CardData = [
  {
    title: 'Valorización de residuos',
    score: 89,
    average: '+5',
    goals: [
      { goalTitle: 'Tasa de valorización', percentage: 70 },
      { goalTitle: 'Ecoequivalencias', percentage: 50 },
      { goalTitle: 'Residuos por empleado', percentage: 40 }
    ],
  },
  {
    title: 'Emisiones',
    score: 75,
    average: '+3',
    goals: [
      { goalTitle: 'Emisiones por toneladas producida promedio', percentage: 50 },
      { goalTitle: 'Emisiones Anuales', percentage: 80 },
      { goalTitle: 'Emisiones por alcance', percentage: 60 },
      { goalTitle: 'Huella asociada a residuos', percentage: 30 },
      { goalTitle: 'Huella asociada a proveedores', percentage: 40 }
    ],
  },
  {
    title: 'Energía',
    score: 60,
    average: '+5',
    goals: [
      { goalTitle: 'Consumo de energía / unidad', percentage: 30 },
      { goalTitle: 'Porcentaje de energía renovable', percentage: 60 }
    ],
  },
  {
    title: 'Agua',
    score: 27,
    average: '+5',
    goals: [
      { goalTitle: 'Consumo de agua/empleado', percentage: 30 },
      { goalTitle: 'Cadena de sumistro', percentage: 80 }
    ],
  },
  {
    title: 'Cadena de suministros',
    score: 55,
    average: '+5',
    goals: [
      { goalTitle: 'Suministros locales', percentage: 70 },
      { goalTitle: 'Huella de  carbono/unidad', percentage: 50 }
    ],
  },
];

const ProyectosData = [
  'Proyecto de Reciclaje de Plásticos',
  'Iniciativa de Energía Solar',
  'Programa de Reducción de Emisiones',
  'Proyecto de Reforestación',
  'Iniciativa de Conservación del Agua',
  'Programa de Gestión de Residuos',
  'Proyecto de Agricultura Sostenible',
  'Iniciativa de Movilidad Verde',
  'Programa de Eficiencia Energética',
  'Proyecto de Biodiversidad',
  'Iniciativa de Producción Limpia',
  'Programa de Educación Ambiental',
  'Proyecto de Compostaje',
  'Iniciativa de Economía Circular',
  'Programa de Certificación Ambiental',
  'Proyecto de Reducción de Desperdicios',
  'Iniciativa de Construcción Sostenible',
  'Programa de Conservación Marina',
  'Proyecto de Agricultura Urbana',
  'Iniciativa de Reducción de Huella de Carbono',
];

const ProveedoresData = [
  { nombre: 'Proveedor EcoTech', rango: '10.000 - 20.000 CLP' },
  { nombre: 'GreenSupplies Ltda.', rango: '15.000 - 25.000 CLP' },
  { nombre: 'EcoFriendly S.A.', rango: '12.000 - 22.000 CLP' },
  { nombre: 'SustainaCorp', rango: '18.000 - 28.000 CLP' },
  { nombre: 'CleanEnviro Solutions', rango: '20.000 - 30.000 CLP' },
  { nombre: 'BioSupply Co.', rango: '14.000 - 24.000 CLP' },
  { nombre: 'GreenPlanet Providers', rango: '16.000 - 26.000 CLP' },
  { nombre: 'EcoServe', rango: '11.000 - 21.000 CLP' },
  { nombre: 'Sustainable Supplies', rango: '17.000 - 27.000 CLP' },
  { nombre: 'EnviroCare Providers', rango: '19.000 - 29.000 CLP' },
];

const VistaDetalleMeta = ({ nombreMeta, cerrar, proyectos, proveedores, cardHeight }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedProviderIndex, setSelectedProviderIndex] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
  };

  const handleProviderClick = (index) => {
    setSelectedProviderIndex(index);
  };

  const handleClose = () => {
    cerrar();
  };

  const isOptionSelected = selectedProjectIndex !== null && selectedProviderIndex !== null;

  const [confirmationView, setConfirmationView] = useState(false);

  const handleConfirmationClick = () => {
    setConfirmationView(!confirmationView);
  };

  return (
    <div id="vistaDetalleMeta" className="p-6 rounded-md h-screen" style={{ backgroundColor: '#7ED39A' }}>
      {!confirmationView &&
        <div className='animate__animated animate__fadeIn'>
          <>
            <div className="breadcrumb flex mb-4">
              <p className="font-bold text-lg" style={{ color: '#006C42' }}>{nombreMeta} / Gestión</p>
            </div>
            <div className="flex flex-row">
              <div className="w-[97%] pr-2">
                <div className='flex px-10 justify-between'>
                  <div className="w-[48%]">
                    <div style={{ backgroundColor: '#006C42', padding: '16px', borderRadius: '8px 8px 0 0' }}>
                      <h3 className="text-xl font-bold ml-2" style={{ color: 'white' }}>Proyectos</h3>
                    </div>
                    <div
                      style={{ maxHeight: `${cardHeight * 0.6}px`, overflowY: 'auto', backgroundColor: 'white', borderRadius: '0 0 8px 8px' }}
                      className='custom-scrollbar'
                    >
                      <ul>
                        {proyectos.map((proyecto, index) => (
                          <li
                            key={index}
                            style={{
                              backgroundColor: index === selectedProjectIndex ? '#00B971' : (index % 2 === 0 ? '#D9D9D9' : 'white'),
                              color: index === selectedProjectIndex ? 'white' : 'black',
                              padding: '4px',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleProjectClick(index)}>
                            <div className='ml-5'>
                              {proyecto}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div style={{ backgroundColor: '#006C42', padding: '16px', borderRadius: '8px 8px 0 0' }}>
                      <h3 className="text-xl font-bold ml-2" style={{ color: 'white' }}>Proveedores</h3>
                    </div>
                    <div
                      style={{ maxHeight: `${cardHeight * 0.6}px`, overflowY: 'auto', backgroundColor: 'white', borderRadius: '0 0 8px 8px' }}
                      className='custom-scrollbar'
                    >
                      <ul>
                        {proveedores.map((proveedor, index) => (
                          <li
                            key={index}
                            style={{
                              backgroundColor: index === selectedProviderIndex ? '#00B971' : (index % 2 === 0 ? '#D9D9D9' : 'white'),
                              color: index === selectedProviderIndex ? 'white' : 'black',
                              padding: '4px',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleProviderClick(index)}>
                            <div className='ml-5'>
                              {proveedor.nombre}: {proveedor.rango}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[3%] flex flex-col justify-center items-center">
                <button
                  onClick={handleClose}
                  style={{
                    backgroundColor: 'white',
                    border: '2px solid #989898',
                    borderRadius: '8px',
                    color: '#989898',
                    padding: '10px',
                    marginBottom: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <FaChevronRight />
                </button>
                <button
                  onClick={isOptionSelected ? handleConfirmationClick : null}
                  style={{
                    backgroundColor: isOptionSelected ? 'white' : 'gray',
                    border: '2px solid #989898',
                    borderRadius: '8px',
                    color: isOptionSelected ? '#989898' : 'white',
                    padding: '10px',
                    marginTop: '10px',
                    cursor: isOptionSelected ? 'pointer' : 'not-allowed'
                  }}
                  disabled={!isOptionSelected}
                >
                  <FaCheck />
                </button>
              </div>
            </div>
          </>
        </div>}
      {confirmationView &&
        <div className='animate__animated animate__fadeIn'>
          <>
            <div className="confirmation-view fade-in flex flex-col">
              <div className='w-[full]' style={{ backgroundColor: '#006C42', padding: '16px', borderRadius: '8px 8px 0 0' }}>
                <h3 className="text-xl font-bold ml-2" style={{ color: 'white' }}>Proveedores</h3>
              </div>
              <div
                style={{ height: `${cardHeight * 0.6}px`, backgroundColor: 'white', borderRadius: '0 0 8px 8px' }}
              >
                <div className="p-6 text-center mt-5">
                  <p>
                    ¿Estás listo para iniciar tu proyecto de <strong>{proyectos[selectedProjectIndex]}</strong> con
                    <strong> {proveedores[selectedProviderIndex]?.nombre}</strong>?
                  </p>
                  <p>
                    Al hacer clic en ‘Confirmar’ te contactaremos y recibirás una respuesta en un plazo de 48 horas hábiles.
                  </p>
                </div>
                <div className="flex justify-center p-4">
                  <button
                    onClick={handleConfirmationClick}
                    className="bg-[#00B971] text-white font-bold mx-5 px-20 rounded-md"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmationClick}
                    className="bg-[#00B971] text-white font-bold mx-5 px-20 rounded-md"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>}
    </div>
  )
};



const Card = ({ title, score, average, goals }) => {
  const [vistaDetalle, setVistaDetalle] = useState(null);
  const [cardHeight, setCardHeight] = useState(null);
  const cardRef = useRef(null);

  const handleGestionarClick = (goalTitle) => {
    setCardHeight(cardRef.current.offsetHeight);
    setVistaDetalle(goalTitle);
  };

  return (
    <div
      ref={cardRef}
      className="cardContainer relative bg-white rounded-md custom-shadow mx-4 md:mx-8 my-4 md:my-6 overflow-hidden"
      style={vistaDetalle ? { height: `${cardHeight}px` } : {}}
    >
      <CSSTransition
        in={vistaDetalle !== null}
        timeout={500}
        classNames="slide"
        unmountOnExit
      >
        <VistaDetalleMeta
          nombreMeta={vistaDetalle}
          cerrar={() => setVistaDetalle(null)}
          proyectos={ProyectosData}
          proveedores={ProveedoresData}
          cardHeight={cardHeight}
        />
      </CSSTransition>
      <>
        <div className="bg-custom-mid-green p-5 rounded-t-md">
          <p className='text-roboto text-sm lg:text-2xl category-panel text-white'> {title} </p>
        </div>
        <div className='flex'>
          <div className="w-1/5 p-3">
            <ScoreCircle score={score} />
            <div className='flex flex-col items-center'>
              <div className="border-2 border-gray-400 p-2 rounded-lg w-[69%] flex flex-col">
                <div className="flex text-sm items-center justify-center">
                  <span className='text-sm font-bold'>Promedio de anterior*</span>
                </div>
                <hr className="border-gray-400" />
                <div className="flex flex-col justify-center items-center">
                  <div className="flex text-sm items-center">
                    <span className='text-green-600 text-xl lg:text-3xl font-bold mr-2'>{average}</span>
                    <img src={increase} alt="decrease" className="w-5 h-5 lg:w-10 lg:h-10" />
                  </div>
                  <div className="flex text-sm items-center">
                    <span className='text-sm'>mensual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/5 p-6">
            <div className="flex mb-2">
              <div className='w-[80%]'>
                <p className="text-roboto text-lg lg:text-xl text-gray-800 font-semibold">Metas</p>
              </div>
              <div className='w-[20%] px-6'>
                <p className="text-roboto text-lg lg:text-xl text-gray-800 font-semibold">Gestión</p>
              </div>
            </div>
            <hr className="border-gray-500 mb-4 w-[97%]" />
            {goals.map((goal, index) => (
              <div key={index} className="goal-container flex flex-row mb-4">
                <div className='w-4/5'>
                  <p className='text-start text-base'>{goal.goalTitle}</p>
                  <ProgressBar percentage={goal.percentage} />
                </div>
                <div className="flex justify-center items-start w-1/5">
                  <button
                    className="bg-custom-mid-green text-white font-bold p-2 rounded-xl w-[75%]"
                    onClick={() => handleGestionarClick(goal.goalTitle)}
                  >
                    Gestionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};



const CardsContainer = () => (
  <div>
    {CardData.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardsContainer;
