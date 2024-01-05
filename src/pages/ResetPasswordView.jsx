/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import ressetPassImg from "../assets/resset-password.webp"
import logo from '../assets/prosperse-icon.svg'
import axios from 'axios'; // Asegúrate de haber instalado axios

const SuccessPopupComponent = ({ message }) => {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center h-full w-full">
            <div className="animate__animated animate__fadeIn relative bg-white rounded-lg shadow-xl p-6 text-center" style={{ width: '400px', maxWidth: '90%' }}>
                <h3 className="text-2xl font-bold leading-6 mb-4">Éxito</h3>
                <p className="text-gray-500 mb-6">{message}</p>
            </div>
        </div>
    );
};

const ResetPasswordView = () => {
    const navigate = useNavigate();
    const { recoveryPassToken } = useParams();
    const decodedToken = atob(recoveryPassToken);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (password !== confirmPassword) {
            console.log('Aquí')
            setMessage('Las contraseñas no coinciden.');
            setIsLoading(false)
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/auth/resetPassword', {
                password: password,
                token: decodedToken
            });
            setMessage(response.data.message);
            setShowPopup(true); // Muestra el pop-up
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            if (error.response) {
                // Aquí se registra el mensaje de error específico en la consola
                console.log('Error del backend:', error.response.data);
                setMessage(error.response.data || 'La solicitud no es válida.');
            } else if (error.request) {
                // La solicitud fue hecha pero no hubo respuesta
                setMessage('No se recibió respuesta del servidor.');
            } else {
                setMessage('Error al enviar la solicitud.');
            }
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="resetPasswordView h-screen w-screen flex justify-center items-center">

            {showPopup ? (
                <SuccessPopupComponent
                    message="Su contraseña ha sido cambiada exitosamente."
                />
            ) : (
                <div className="box shadow-lg">
                    <div className="leftSide p-10 flex flex-col justify-center items-center w-2/5 h-full">
                        {/* Contenido de la izquierda, como una imagen o ilustración */}
                        <img src={ressetPassImg} alt="Ilustración" />
                    </div>
                    {isLoading ? (
                        <div className="rightSide p-10 w-3/5 h-full">
                            <div className="resetpass-loader-container">
                                <div className="resetpass-loader"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="rightSide p-10 w-3/5 h-full">
                            <div className="mx-auto h-20 w-20 mb-10">
                                <img src={logo} alt='Logo' className='w-20 h-20 object-cover' />
                            </div>
                            <form className="flex-col" onSubmit={handlePasswordChange}>
                                <h2 className="text-2xl font-semibold mb-5">Recuperar contraseña</h2>
                                <p className="mb-5">Por favor, establezca una nueva contraseña para su cuenta. Asegúrese de que sea segura y única.</p>
                                <label htmlFor="password" className="block text-sm font-medium mb-1">Introduzca su nueva contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="mb-4 p-2 w-full border rounded-md"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="code" className="block text-sm font-medium mb-1">Confirme su nueva contraseña</label>
                                <input
                                    type="password"
                                    id="code"
                                    className="mb-6 p-2 w-full border rounded-md"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button type="submit" className="w-full mt-6 py-2 bg-custom-mid-green text-white font-bold text-lg rounded-md">Confirmar</button>
                                <a href="/login" className="text-blue-900 text-center hover:underline block mt-5">Volver al inicio de sesión</a>
                            </form>
                            {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ResetPasswordView;
