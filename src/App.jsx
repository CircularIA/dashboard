/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Setting from './pages/setting/setting';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Verificar la autenticación al cargar la aplicación
    axios.get('http://localhost:5000/api/verify', { withCredentials: true })
      .then((res) => {
        setIsAuthenticated(res.data);
      })
      .catch((error) => {
        console.log('Error verifying authentication:', error);
        setIsAuthenticated(false);
      });
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="perfil" element={<Setting />} />
          {/* Aquí puedes agregar más rutas protegidas */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
