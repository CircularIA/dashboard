/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogIn from '../assets/LogIn.png'
import Logo from '../assets/Logo.svg'
import axios from 'axios'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { useRef } from 'react'
import { useCookies } from 'react-cookie'

const Login = () => {

    const navigate = useNavigate() // Obtener la función navigate
    const [loginFormVisible, setLoginFormVisible] = useState(true)
    const loginFormRef = useRef(null)
    const registerFormRef = useRef(null)
    const authUrl = `${import.meta.env.VITE_BACKEND_URL}/api/auth/`
    const usersUrl = `${import.meta.env.VITE_BACKEND_URL}/api/users/`
    const [_, setCookies] = useCookies(["access_token"])


    const toggleLoginForm = () => {
        setLoginFormVisible(!loginFormVisible)
    }

    {/* Login vars*/ }
    const [loginError, setLoginError] = useState(null)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const dispatch = useDispatch()
    // Manejar los cambios en los campos de entrada
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setLoginError(null);
    }


    // Enviar los datos al servidor al enviar el formulario
    const handleSubmit = async (event) => {
        event.preventDefault()

        // Realizar la petición a través de axios
        try {
            const { data: res } = await axios.post(authUrl, formData)
            console.log(res)

            // Almacenar el token en el store de Redux usando la acción setToken
            // dispatch(setToken(res.data))
            setCookies("access_token", res.data.token)
            window.localStorage.setItem("userId", res.data.userId)
            navigate('/')
            
            // Realizar la redirección a la página de inicio después del inicio de sesión exitoso
        } catch (error) {
            console.log(error.response)
            setLoginError(error.response.data)
            // Aquí puedes mostrar un mensaje de error al usuario si el inicio de sesión falla
        }
    }

    {/* Register vars*/ }

    const [error, setError] = useState(null) // Error de autenticación
    const [formDataRegister, setFormDataRegister] = useState({
        fullName: '',
        companyName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    // Manejar los cambios en los campos de entrada
    const handleChangeRegister = (event) => {
        const { name, value } = event.target
        setFormDataRegister({
            ...formDataRegister,
            [name]: value,
        })
        setError(null)
    }

    // Enviar los datos al servidor al enviar el formulario
    const handleSubmitRegister = async (event) => {
        event.preventDefault()

        if (formDataRegister.password !== formDataRegister.confirmPassword) {
            setError('Las contraseñas no coinciden')
            return
        }

        // Erase confirmPassword from formDataRegister
        delete formDataRegister.confirmPassword

        // Realizar la petición a través de axios
        try {
            console.log(formDataRegister)
            const { data: res } = await axios.post(usersUrl, formDataRegister, { withCredentials: true })
            console.log(res)
            toggleLoginForm()
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response)
                setError(error.response.data)
            }
        }
    }

    return (
        <>
            <SwitchTransition mode='out-in'>
                <CSSTransition
                    key={loginFormVisible ? 'login' : 'register'}
                    classNames="fade"
                    timeout={300}
                >
                    {loginFormVisible ? (
                        <div className='w-full h-screen flex'>
                            <div ref={loginFormRef} className='w-screen custom-bg flex flex-col items-center justify-center'>
                                <div className='max-w-xl w-full px-6 lg:px-0'>
                                    <h1 className='text-white sm:text-black text-4xl text-roboto font-bold text-center mb-10'>¡Bienvenido!</h1>
                                    <form className='w-full flex flex-col'>
                                        <label className='text-white sm:text-black text-primary text-roboto text-left mt-8'>Correo:</label>
                                        <input
                                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='text'
                                            name='email'
                                            required
                                            onChange={handleChange}
                                        />
                                        <label className='text-white sm:text-black text-primary text-roboto text-left'>Contraseña:</label>
                                        <input
                                            className='input-field w-full h-8 mb-6 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='password'
                                            name='password'
                                            required
                                            onChange={handleChange}
                                        />

                                        {loginError && <p className="text-red-500 mt-2 text-center">{loginError}</p>}

                                        <button
                                            className='button-login'
                                            type='submit'
                                            onClick={handleSubmit}
                                        >
                                            Iniciar sesión
                                        </button>

                                        <p className='signup-text'>
                                            ¿No tienes una cuenta aún? <a onClick={toggleLoginForm}>Registrate</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className='absolute sm:hidden left-1/2 transform -translate-x-1/2 flex flex-col'>
                                <img src={Logo} className='w-64 h-64 lg:w-80 lg:h-80 filter' alt='Logo' />
                            </div>

                            <div className='sm:block hidden custom-max-width w-full relative flex flex-col'>
                                <div className='absolute top-[0%] left-[20%] flex flex-col'>
                                    <img src={Logo} className='w-64 h-64 lg:w-80 lg:h-80' alt='Logo' />
                                </div>
                                <div className='h-full'>
                                    <img src={LogIn} className='h-full w-full object-cover' alt='Background' />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='w-full h-screen flex'>
                            <div ref={registerFormRef} className='sm:block hidden custom-max-width w-full relative flex flex-col'>
                                <div className='absolute top-[0%] left-[7%] lg:left-[20%] flex flex-col'>
                                    <img src={Logo} className='w-80 h-80' alt='Logo' />
                                </div>
                                <div className='h-screen'>
                                    <img src={LogIn} className='h-full w-full' alt='Background' />
                                </div>
                            </div>
                            <div className='w-screen custom-bg flex flex-col items-center justify-center'>
                                <div className='max-w-xl w-full px-6 lg:px-0'>
                                    <h1 className='text-white sm:text-black text-4xl text-roboto font-bold text-center mb-4'>Ingresa tus datos de registro:</h1>
                                    <form className='w-full flex flex-col'>
                                        <label className='text-white sm:text-black text-primary text-roboto text-left mt-4'>Nombre completo:</label>
                                        <input
                                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='text'
                                            name='fullName'
                                            value={formDataRegister.fullName}
                                            onChange={handleChangeRegister}
                                            required
                                        />
                                        <label className='text-white sm:text-black text-primary text-roboto text-left'>Nombre de la empresa:</label>
                                        <input
                                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='text'
                                            name='companyName'
                                            value={formDataRegister.companyName}
                                            onChange={handleChangeRegister}
                                            required
                                        />
                                        <label className='text-white sm:text-black text-primary text-roboto text-left'>Correo:</label>
                                        <input
                                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='text'
                                            name='email'
                                            value={formDataRegister.email}
                                            onChange={handleChangeRegister}
                                            required
                                        />
                                        <label className='text-white sm:text-black text-primary text-roboto text-left'>Contraseña:</label>
                                        <input
                                            className='input-field w-full h-8 mb-4 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='password'
                                            name='password'
                                            value={formDataRegister.password}
                                            onChange={handleChangeRegister}
                                            required
                                        />
                                        <label className='text-white sm:text-black text-primary text-roboto text-left'>Confirmar contraseña:</label>
                                        <input
                                            className='input-field w-full h-8 mb-6 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                                            type='password'
                                            name='confirmPassword'
                                            onChange={handleChangeRegister}
                                            required
                                        />

                                        {error && <p className="text-red-100 sm:text-red-500 mt-2 text-center">{error}</p>}

                                        <button
                                            className='button-login'
                                            type='submit'
                                            onClick={handleSubmitRegister}
                                        >
                                            Enviar
                                        </button>

                                        <p className='signup-text'>
                                            ¿Ya tienes una cuenta? <a onClick={toggleLoginForm}>Inicia Sesión</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}

export default Login
