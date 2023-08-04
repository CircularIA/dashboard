/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogIn from '../assets/LogIn.png';
import Logo from '../assets/Logo.svg';
import axios from 'axios';

const Register = () => {
    const [error, setError] = useState(null); // Error de autenticación
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        password: '',
    });
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

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Erase confirmPassword from formData
        delete formData.confirmPassword;

        // Realizar la petición a través de axios
        try {
            console.log(formData)
            const { data: res } = await axios.post('http://localhost:5000/api/users/', formData, { withCredentials: true });
            console.log(res);
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response);
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className='w-full h-screen flex'>
            <div className='sm:block hidden custom-max-width w-full relative flex flex-col'>
                <div className='absolute top-[0%] left-[7%] lg:left-[20%] flex flex-col'>
                    <img src={Logo} className='w-80 h-80' alt='Logo' />
                </div>
                <div className='h-screen'>
                    <img src={LogIn} className='h-full w-full' alt='Background' />
                </div>
            </div>
            <div className='w-screen bg-[#f5f5f5] flex flex-col items-center justify-center'>
                <div className='max-w-xl w-full px-6 lg:px-0'>
                    <h1 className='text-4xl text-roboto font-bold text-center mb-4'>¡Necesitamos tu información!</h1>
                    <form className='w-full flex flex-col'>
                        <label className='text-primary text-roboto text-left mt-4'>Nombre completo:</label>
                        <input
                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='text'
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <label className='text-primary text-roboto text-left'>Nombre de la empresa:</label>
                        <input
                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='text'
                            name='companyName'
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                        <label className='text-primary text-roboto text-left'>Correo:</label>
                        <input
                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='text'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label className='text-primary text-roboto text-left'>Contraseña:</label>
                        <input
                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label className='text-primary text-roboto text-left'>Confirmar contraseña:</label>
                        <input
                            className='input-field w-full h-8 mb-6 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                            type='password'
                            name='confirmPassword'
                            onChange={handleChange}
                            required
                        />
                        <button
                            className='button-login'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>

                        <p className='signup-text'>
                            ¿Ya tienes una cuenta? <a href='/login'>Inicia Sesión</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
