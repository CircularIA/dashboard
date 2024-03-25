import PropTypes from 'prop-types';
import faqImage from '../../assets/faq.webp';
import { useState } from 'react';

function Main({ companyInfo }) {
  const [showHelpForm, setShowHelpForm] = useState(false)
  // Función para manejar el clic del botón
  const handleHelpClick = () => {
    setShowHelpForm(true);
  };

  const selectOptions = [
    { value: 'consulta', text: 'Consulta' },
    { value: 'sugerencia', text: 'Sugerencia' },
    { value: 'reclamo', text: 'Reclamo' },
    { value: 'error', text: 'Reportar un Error' },
    { value: 'otro', text: 'Otro' },
  ];

  return (
    <>
      {!showHelpForm ? (
        <div className='animate__animated animate__fadeIn flex justify-center items-center p-2 sm:p-10 bg-gray-100 min-h-screen'>
          <div className='bg-white rounded-lg custom-shadow w-full max-w-6xl mx-auto overflow-hidden'>
            <div className='flex flex-col items-center lg:items-start'>
              {/* Contenedor para la imagen */}
              <div className='flex-1 flex justify-center p-4'>
                <img src={faqImage} alt="FAQ" className='h-auto w-[55%] sm:w-[35%]' />
              </div>

              {/* Contenedor para las preguntas */}
              <div className='flex-1 p-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-0 sm:px-8 py-4'>
                  {/* Pregunta 1 */}
                  <div>
                    <h3 className='text-green-600 font-semibold text-sm sm:text-base'>1. ¿Qué pasa si quiero proponer un indicador?</h3>
                    <p className='text-sm sm:text-base'>Mandar solicitud de ayuda y un ejecutivo se pondrá en contacto con usted.</p>
                  </div>
                  {/* Pregunta 2 */}
                  <div>
                    <h3 className='text-green-600 font-semibold text-sm sm:text-base'>2. ¿Qué pasa si necesito modificar una formula para poder calcular un indicador?</h3>
                    <p className='text-sm sm:text-base'>Mandar solicitud de ayuda y un ejecutivo se pondrá en contacto con usted.</p>
                  </div>
                  {/* Pregunta 3 */}
                  <div>
                    <h3 className='text-green-600 font-semibold text-sm sm:text-base'>3. ¿Qué pasa si no entiendo como calcular un indicador en mi caso?</h3>
                    <p className='text-sm sm:text-base'>Mandar solicitud de ayuda y un ejecutivo se pondrá en contacto con usted.</p>
                  </div>
                  {/* Pregunta 4 */}
                  <div>
                    <h3 className='text-green-600 font-semibold text-sm sm:text-base'>4. ¿Qué pasa si necesito asesoría en como medir una variable?</h3>
                    <p className='text-sm sm:text-base'>Mandar solicitud de ayuda y un ejecutivo se pondrá en contacto con usted.</p>
                  </div>
                </div>

                <div className='flex flex-col items-center'>
                  <hr className='my-4 border-gray-300 w-[95%]' />
                  <h2 className='font-bold text-center mb-2 text-sm sm:text-base'>
                    ¿Tu duda no está aquí?
                  </h2>
                  <button onClick={handleHelpClick} className='bg-[#00B971] text-sm sm:text-base text-white font-bold py-2 px-4 rounded-md w-[50%] sm:w-[30%]'>
                    Solicitar ayuda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='animate__animated animate__fadeIn flex justify-center items-center p-2 sm:p-10 bg-gray-100 min-h-screen'>
          <div className='bg-white rounded-lg custom-shadow w-full max-w-6xl mx-auto overflow-hidden'>
            <div className='flex flex-col animate__animated animate__fadeIn p-8'>
              <h2 className='font-bold text-start mb-4'>
                ¿Tu duda no está aquí?
              </h2>
              <p className='text-start mb-4 text-sm md:text-base'>
                Estamos aquí para escucharte. Si tienes consultas, sugerencias, reclamos, informar errores, dudas o necesitas realizar cambios en tus indicadores (añadir, modificar o eliminar), por favor déjanos saber. Estamos comprometidos a brindar la mejor experiencia posible y resolver cualquier inquietud que puedas tener.
              </p>
              <div className='w-full mb-4'>
                <label htmlFor='category' className='block text-sm font-bold text-gray-700'>Escribe en relación a:</label>
                <select id='category' name='category' className='mt-1 block w-full md:w-2/5 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                  {selectOptions.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className='w-full mb-4'>
                <label htmlFor='category' className='block text-sm font-bold text-gray-700'>Tu mensaje:</label>
                <textarea id='message' name='message' rows='6' className='mt-1 block w-full py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md' />
              </div>
              <div className='flex justify-center sm:justify-end'>
                <button onClick={handleHelpClick} className='bg-[#00B971] text-white font-bold py-2 px-4 rounded-md w-[50%] sm:w-[10%] md:w-[30%]'>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Main.propTypes = {
  companyInfo: PropTypes.object.isRequired,
}

export default Main;
