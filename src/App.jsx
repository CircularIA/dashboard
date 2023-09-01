/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Setting from './pages/setting/setting'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Poner el loader en false después de 1 segundo
    const timer = setTimeout(() => setLoading(false), 1000)
    const verifyUrl = `${import.meta.env.VITE_BACKEND_URL}/api/verify`

    // Verificar la autenticación al cargar la aplicación
    axios.get(verifyUrl, { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(res.data)
      })
      .catch((error) => {
        console.log('Error verifying authentication:', error)
        setIsAuthenticated(false)
      })

    // Limpiar el temporizador si el componente se desmonta antes de que se cumpla el tiempo
    return () => clearTimeout(timer)
  }, [])

  if (loading) return (
    <div className="custom-loader-container">
      <div className="custom-loader"></div>
    </div>
  )
  if (isAuthenticated === null) return <div className="custom-loader"></div>
  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <Outlet />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="ayuda" element={<Setting />} />
          {/* Aquí puedes agregar más rutas protegidas */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
