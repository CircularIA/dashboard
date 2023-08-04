/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogIn from '../assets/LogIn.png';
import Logo from '../assets/Logo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../reducers/authSlice';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const navigate = useNavigate(); // Obtener la función navigate
    // Manejar los cambios en los campos de entrada
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Enviar los datos al servidor al enviar el formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Realizar la petición a través de axios
        try {
            const { data: res } = await axios.post('http://localhost:5000/api/auth/', formData, { withCredentials: true });
            console.log(res);

            // Almacenar el token en el store de Redux usando la acción setToken
            dispatch(setToken(res.data));
            console.log(token)

            // Realizar la redirección a la página de inicio después del inicio de sesión exitoso
            navigate('/');
        } catch (error) {
            console.log(error.response);
            // Aquí puedes mostrar un mensaje de error al usuario si el inicio de sesión falla
        }
    };

    return (
        <div className='w-full h-screen flex'>
            <div className='w-screen bg-[#f5f5f5] flex flex-col items-center justify-center'>
                <div className='max-w-xl w-full px-6 lg:px-0'>
                    <h1 className='text-4xl text-roboto font-bold text-center mb-10'>¡Bienvenido!</h1>
                    <form className='w-full flex flex-col'>
                        <label className='text-primary text-roboto text-left mt-8'>Correo:</label>
                        <input
                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='text'
                            name='email'
                            required
                            onChange={handleChange}
                        />
                        <label className='text-primary text-roboto text-left'>Contraseña:</label>
                        <input
                            className='input-field w-full h-8 mb-6 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='password'
                            name='password'
                            required
                            onChange={handleChange}
                        />

                        <button
                            className='button-login'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Iniciar sesión
                        </button>

                        <p className='signup-text'>
                            ¿No tienes una cuenta aún? <a href='/register'>Registrate</a>
                        </p>
                    </form>
                </div>
            </div>
            <div className='sm:block hidden custom-max-width w-full relative flex flex-col'>
                <div className='absolute top-[0%] left-[20%] flex flex-col'>
                    <img src={Logo} className='w-80 h-80' alt='Logo' />
                </div>
                <div className='h-full'>
                    <img src={LogIn} className='h-full w-full object-cover' alt='Background' />
                </div>
            </div>
        </div>
    );
};

export default Login;
