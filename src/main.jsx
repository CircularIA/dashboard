import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store'; // Importa el store que configuraste
import axios from 'axios';
import Cookies from 'js-cookie';
import './index.css'

// Obtén el token de la cookie
const token = Cookies.get('token');

// Configura Axios para enviar automáticamente el token en las cabeceras
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
)
