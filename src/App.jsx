/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
//Components
import Login from './pages/Login'
import ResetPasswordView from './pages/ResetPasswordView.jsx'
import Dashboard from './pages/Dashboard'
import Setting from './pages/setting/setting'
import HuellaCarbono from './pages/huella-carbono/register'
import Estrategia from './pages/estrategia/estrategia'
import Seleccionador from './pages/seleccionador/main'
import Simulador from './pages/simulador/Simulador.jsx'
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

//Api routes
import { companyRoutes } from './api/config.js'
import InitialQuest from './pages/cuestionario/InitialQuest.jsx'

function AppLayout({ noHeader, animateClass, companyInfo }) {
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
        {!noHeader && <Header currentTheme={theme} companyInfo={companyInfo} />}
        <Outlet />
      </main>
    </div>
  );
}

function ProtectedRoute() {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [companyInfo, setCompanyInfo] = useState({}) // [companyInfo, setCompanyInfo
  const [loading, setLoading] = useState(true)
  const location = useLocation();
  const noHeader_routes = ['perfil', 'ingreso','seleccionador']
  const noHeader = noHeader_routes.some(ruta => location.pathname.includes(ruta));
  useEffect(() => {
    // Poner el loader en false después de 1 segundo
    const timer = setTimeout(() => {
      if (cookies.access_token) {
        const decodedToken = jwtDecode(cookies.access_token)
        const currentTimeStamp = Math.floor(Date.now() / 1000) // Convertir a segundos
        if (decodedToken.exp <= currentTimeStamp) {
          // Si el token ha expirado, elimina el token y el userId
          removeCookie("access_token")
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
  //Get the whole company info
  useEffect(() => {
    axios.get(companyRoutes.getCompanyInfo, {
      headers: {
        'Authorization': `Bearer ${cookies.access_token}`
      }
    })
      .then((response) => {
        console.log(response.data)
        setCompanyInfo(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  if (loading) return (
    <div className="custom-loader-container">
      <div className="custom-loader"></div>
    </div>
  );
  if (isAuthenticated === null) return <div className="custom-loader"></div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route path='/' element={<AppLayout noHeader={noHeader} animateClass={animateClass} companyInfo={companyInfo} />} >
        <Route index element={<Dashboard companyInfo={companyInfo} />} />
        <Route path='perfil' element={<Setting companyInfo={companyInfo} />} /> {/* TODO: Cambiar a /configuracion */}
        <Route path='seleccionador' element={<Seleccionador />} />
        <Route path='evaluacion' element={<Evaluation />} />
        <Route path='huellacarbono' element={<HuellaCarbono companyInfo={companyInfo} />} />
        <Route path='estrategia' element={<Estrategia companyInfo={companyInfo} />} />
        <Route path='ingreso' element={<Simulador companyInfo={companyInfo} />} />
      </Route>
      <Route path="/welcome" element={<InitialQuest />} />
    </Routes>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password/:recoveryPassToken" element={<ResetPasswordView />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ProtectedRoute />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
