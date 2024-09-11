// src/router/index.jsx
import { createBrowserRouter } from 'react-router-dom';
import RecuerdosList from '../components/listaRecuerdo/RecuerdosList';
import UploadRecuerdo from '../components/subirRecuerdo/UploadRecuerdo';
import DeleteRecuerdo from '../components/borrarRecuerdo/DeleteRecuerdo';
import Navbar from '../components/navbar/Navbar'; // Si quieres mostrar siempre el Navbar
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


