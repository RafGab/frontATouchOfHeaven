// src/router/index.jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RecuerdosList from '../components/listaRecuerdo/RecuerdosList'; // Asegúrate de que este componente esté implementado correctamente
import React from 'react';
import InitialView from '../components/inicialView/InitialView';
import Layout from '../Layout/layout';

// Definimos las rutas
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/initial' />  // Redirige a una vista inicial o el listado
      },
      {
        path: '/initial',  // Ruta para la vista inicial si existe
        element: <InitialView />,
      },
      {
        path: '/recuerdoslist', // Ruta para la lista de recuerdos
        element: <RecuerdosList />,  // Ahora renderiza RecuerdosList correctamente
      },
    ],
  },
]);

export default router;
