// src/router/index.jsx
import { createBrowserRouter } from 'react-router-dom';
import RecuerdosList from '../components/RecuerdosList';
import UploadRecuerdo from '../components/UploadRecuerdo';
import DeleteRecuerdo from '../components/DeleteRecuerdo';
import Navbar from '../components/Navbar'; // Si quieres mostrar siempre el Navbar
import React from 'react';

// Definimos las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <RecuerdosList />
      </>
    ),
  },
  {
    path: "/upload",
    element: (
      <>
        <Navbar />
        <UploadRecuerdo />
      </>
    ),
  },
  {
    path: "/delete",
    element: (
      <>
        <Navbar />
        <DeleteRecuerdo />
      </>
    ),
  },
]);

export default router;
