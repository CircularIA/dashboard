/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import WelcomeImg from '../../assets/welcome.svg';
import imagebg1 from '../../assets/imagebg-1.png';
import imagebg2 from '../../assets/imagebg-2.png';
import imagebg3 from '../../assets/imagebg-3.png';
import imagebg4 from '../../assets/imagebg-4.png';
import imagebg5 from '../../assets/imagebg-5.png';
import imagebg6 from '../../assets/imagebg-6.png';
import imagebg7 from '../../assets/imagebg-7.png';
import logometric1_6 from '../../assets/logo-metric1-6.svg'
import thanks_bg from '../../assets/bg-thanks.svg'

const InitialQuest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedOption, setSelectedOption] = useState('');
    const [textResponse, setTextResponse] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    const [selectedOptions3, setSelectedOptions3] = useState([]);
    const [selectedOptions4, setSelectedOptions4] = useState([]);

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };
    const handlePreviousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    const handleUniqueOptionClick = (option, selectedOption, setSelectedOption) => {
        if (selectedOption === option) {
            setSelectedOption('');
        } else {
            setSelectedOption(option);
        }
    };

    const handleOptionClick = (option, selectedOptions, setSelectedOptions) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleTextChange = (event) => {
        setTextResponse(event.target.value);
    };

    return (
        <div>
            <CSSTransition
                in={currentQuestion === 1}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-screen  flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full'>
                                    <img src={WelcomeImg} className='w-100 h-100 mx-auto mt-10' alt='Logo' />
                                    <h1 className='text-xl text-roboto font-bold text-center mt-5 mb-5'>¡BIENVENIDO/A CIRCULARIA!</h1>
                                    <p className='text-roboto text-center'>
                                        Antes de empezar queremos conocer tus prácticas sustentables y tus ideas para cuidar el medio ambiente. Comparte tus acciones, desde pequeños gestos hasta cambios significativos. Juntos podemos crear conciencia y marcar la diferencia. ¡Gracias por unirte a nosotros en este importante viaje hacia un futuro más verde y sostenible!</p>
                                    <div className='flex justify-center mb-5'>
                                        <button className='button-login' type='submit' style={{ width: '50%' }} onClick={handleNextQuestion}>
                                            ¡Empezar!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 2}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>¿CUÁL ES TU INDUSTRIA?</h1>
                                    <button className={`button-cuestionary ${selectedOption === 'a' ? 'selected' : ''}`} type='submit' onClick={() => handleUniqueOptionClick('a', selectedOption, setSelectedOption)}>
                                        Gestión de residuos
                                    </button>
                                    <button className={`button-cuestionary ${selectedOption === 'b' ? 'selected' : ''}`} type='submit' onClick={() => handleUniqueOptionClick('b', selectedOption, setSelectedOption)}>
                                        Manufacturera
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg1} className='h-full w-full object-cover' alt='Imagen' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>


            <CSSTransition
                in={currentQuestion === 3}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>¿CUÁNTOS EMPLEADOS EXISTEN EN TU EMPRESA?</h1>
                                    <textarea
                                        className="text-area w-full h-32"
                                        maxLength="2000"
                                        value={textResponse}
                                        onChange={handleTextChange}>
                                    </textarea>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg2} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 4}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>DEFINA LAS PRIORIDADES AMBIENTALES EN UN PERIODO DE 5 AÑOS</h1>
                                    <button className={`button-cuestionary ${selectedOptions.includes('a') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('a', selectedOptions, setSelectedOptions)}>
                                        Reducir consumo de agua
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions.includes('b') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('b', selectedOptions, setSelectedOptions)}>
                                        Alcanzar y mantener estado de zero waste
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions.includes('c') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('c', selectedOptions, setSelectedOptions)}>
                                        Reducir huella de carbono 1er alcance
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions.includes('d') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('d', selectedOptions, setSelectedOptions)}>
                                        Reducir huella de carbono 2do alcance
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions.includes('e') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('e', selectedOptions, setSelectedOptions)}>
                                        Reducir huella de carbono 3er alcance
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions.includes('f') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('f', selectedOptions, setSelectedOptions)}>
                                        Ser reconocidos como una empresa
                                        comprometida con la sostenibilidad
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg3} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 5}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>¿QUÉ TIPO DE MAQUINARIA PERTENECE A SU ORGANIZACIÓN?</h1>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('a') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('a', selectedOptions2, setSelectedOptions2)}>
                                        Camiones de transporte
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('b') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('b', selectedOptions2, setSelectedOptions2)}>
                                        Maquinaria que procesa residuos
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('c') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('c', selectedOptions2, setSelectedOptions2)}>
                                        Maquinaria con uso de gas
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('d') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('d', selectedOptions2, setSelectedOptions2)}>
                                        Maquinarias refrigerantes
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('e') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('e', selectedOptions2, setSelectedOptions2)}>
                                        Vehículos para uso de colaboradores
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('f') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('f', selectedOptions2, setSelectedOptions2)}>
                                        Grúas
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions2.includes('g') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('g', selectedOptions2, setSelectedOptions2)}>
                                        Maquinaria de construcción
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg4} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 6}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start mb-5'>¿QUÉ PROYECTOS DE ECONOMÍA CIRCULAR EMPLEA O HA EMPLEADO SU EMPRESA?</h1>
                                    <button className={`button-cuestionary ${selectedOptions3.includes('a') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('a', selectedOptions3, setSelectedOptions3)}>
                                        Culturización de empleados
                                        en aspectos de sostenibilidad
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions3.includes('b') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('b', selectedOptions3, setSelectedOptions3)}>
                                        Optimización de transporte
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions3.includes('c') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('c', selectedOptions3, setSelectedOptions3)}>
                                        Reducción de agua
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg5} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 7}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start'>¿QUÉ INDICADORES CALCULA SU EMPRESA HASTA EL MOMENTO?</h1>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('a') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('a', selectedOptions4, setSelectedOptions4)}>
                                        Huella de carbono 1 y 2 alcance
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('b') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('b', selectedOptions4, setSelectedOptions4)}>
                                        Huella de carbono 3er alcance
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('c') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('c', selectedOptions4, setSelectedOptions4)}>
                                        Consumo de energía
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('d') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('d', selectedOptions4, setSelectedOptions4)}>
                                        Huella hídrica
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('e') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('e', selectedOptions4, setSelectedOptions4)}>
                                        Indices de inversión en EC
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('f') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('f', selectedOptions4, setSelectedOptions4)}>
                                        Índices de ingresos por EC
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('g') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('g', selectedOptions4, setSelectedOptions4)}>
                                        Tasa de valorización y reciclaje
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('h') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('h', selectedOptions4, setSelectedOptions4)}>
                                        Indicadores sociales
                                    </button>
                                    <button className={`button-cuestionary ${selectedOptions4.includes('i') ? 'selected' : ''}`} type='submit' onClick={() => handleOptionClick('i', selectedOptions4, setSelectedOptions4)}>
                                        Indicadores de Economía Circular de APL
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg6} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 8}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="bg-gray-500 ">
                    <div className='contenedor'>
                        <div className='w-full flex'>
                            <div className='w-1/2 flex flex-col items-center justify-center'>
                                <div className='max-w-4xl w-full px-20'>
                                    <h1 className='text-xl text-roboto font-bold text-start'>¿EN SU EMPRESA EXISTE UN DEPARTAMENTO DE INNOVACIÓN Y/O DESARROLLO?</h1>
                                    <button className={`button-cuestionary ${selectedOption2 === 'a' ? 'selected' : ''}`} type='submit' onClick={() => handleUniqueOptionClick('a', selectedOption2, setSelectedOption2)}>
                                        Si
                                    </button>
                                    <button className={`button-cuestionary ${selectedOption2 === 'b' ? 'selected' : ''}`} type='submit' onClick={() => handleUniqueOptionClick('b', selectedOption2, setSelectedOption2)}>
                                        No
                                    </button>
                                </div>
                            </div>
                            <div className='w-1/2 flex items-end justify-end'>
                                <img src={imagebg7} className='h-full w-full object-cover' alt='Imagen2' />
                            </div>
                        </div>
                    </div>
                    <div className='navigation-buttons'>
                        <button className='navigation-button' onClick={handlePreviousQuestion}>
                            &#x22C0; {/* Flecha estilo "V" hacia arriba */}
                        </button>
                        <button className='navigation-button' onClick={handleNextQuestion}>
                            &#x22C1; {/* Flecha estilo "Λ" hacia abajo */}
                        </button>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 9}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="">
                    <div className={`${window.innerWidth > 768 ? 'contenedor' : ''}`}>
                        <div className='h-screen w-full flex'>
                            <div className='w-full flex flex-col items-center justify-center'>
                                <h1 className='text-xl text-center text-roboto font-bold text-start mb-5'>
                                    ¿Confirma el envío de sus respuestas?
                                </h1>
                                <button className='button-login text-xs sm:text-sm md:text-base' style={{ width: '50%' }} onClick={handleNextQuestion}>
                                    Sí, deseo proceder con el envío de mis respuestas.
                                </button>
                                <button className='button-login text-xs sm:text-sm md:text-base' style={{ width: '50%' }} onClick={handlePreviousQuestion}>
                                    No, prefiero revisar mis respuestas antes de enviarlas.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={currentQuestion === 10}
                timeout={500}
                classNames='question-transition'
                unmountOnExit
            >
                <div className="min-h-screen min-w-full flex items-stretch">
                    <div className={`${window.innerWidth > 768 ? 'contenedor flex items-stretch' : 'flex items-stretch'}`}>
                        <div className='min-h-screen min-w-full flex items-stretch'>
                            <div className='w-full flex flex-col items-center justify-center relative'>
                                <img src={thanks_bg} className='min-h-full min-w-full object-cover absolute inset-0' alt='Imagen de fondo' />
                                <div className='z-10 flex flex-col items-center justify-center'>
                                    <img src={logometric1_6} className='absolute top-0 mt-5 lg:mt-10' alt='Logo' />
                                    <p className='md:absolute text-xl sm:text-2xl md:text-4xl text-center p-6 text-roboto text-white font-bold mt-20 mb-5'>
                                        En nombre de CircularIA te agradecemos por haberte dado el tiempo de responder nuestra encuesta.
                                    </p>
                                    <p className='md:absolute bottom-20 lg:bottom-40 text-white sm:text-lg text-center'>
                                        Serás redireccionado en 3...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};

export default InitialQuest;
