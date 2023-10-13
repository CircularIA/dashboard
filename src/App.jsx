/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Setting from './pages/setting/setting'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import jwtDecode from 'jwt-decode'
import Evaluation from './pages/evaluation/evaluation'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { changeTheme } from './reducers/themeReducer';

function AppLayout({ noHeader, animateClass }) {
  const theme = useSelector((state) => state.theme.theme);
  const defaultTheme = 'ambiental'
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTheme(defaultTheme));
  }, [location, dispatch, defaultTheme]);

  return (
    <div className={`animate__animated ${animateClass} flex grid lg:grid-cols-11 xl:grid-cols-12 h-screen w-screen`}>
      <Sidebar theme={theme} />
      <main className='lg:col-span-10 xl:col-span-11 overflow-y-scroll'>
        {!noHeader && <Header currentTheme={theme} />}
        <Outlet />
      </main>
    </div>
  );
}

function ProtectedRoute() {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation();
  const noHeader = location.pathname.includes('ayuda');

  useEffect(() => {
    // Poner el loader en false después de 1 segundo
    const timer = setTimeout(() => {
      if (cookies.access_token) {
        const decodedToken = jwtDecode(cookies.access_token)
        const currentTimeStamp = Math.floor(Date.now() / 1000) // Convertir a segundos
        if (decodedToken.exp <= currentTimeStamp) {
          // Si el token ha expirado, elimina el token y el userId
          removeCookie("access_token")
          localStorage.removeItem("userId")
          setIsAuthenticated(false)
        } else {
          setIsAuthenticated(true)
        }
      } else {
        setIsAuthenticated(false)
      }
      setLoading(false);
    }, 1000);

    // Limpiar el temporizador si el componente se desmonta antes de que se cumpla el tiempo
    return () => clearTimeout(timer);
  }, [cookies.access_token, removeCookie]);
  const [animateClass, setAnimateClass] = useState('');
  let theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    setAnimateClass('animate__fadeIn'); // Aplicar la animación en cada cambio de tema

    const timer = setTimeout(() => {
      setAnimateClass(''); // Eliminar la animación después de un período de tiempo
    }, 500); // Ajustar este valor según la duración de la animación

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [theme]);

  if (loading) return (
    <div className="custom-loader-container">
      <div className="custom-loader"></div>
    </div>
  );
  if (isAuthenticated === null) return <div className="custom-loader"></div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <AppLayout noHeader={noHeader} animateClass={animateClass}>
      <Outlet />
    </AppLayout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="ayuda" element={<Setting />} />
          <Route path='evaluacion' element={<Evaluation />} />
          {/* Aquí puedes agregar más rutas protegidas */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App
