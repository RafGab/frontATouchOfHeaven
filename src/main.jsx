import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Aquí puedes incluir tus estilos globales
import { RouterProvider } from 'react-router-dom';
import router from './router/index'; // Rutas que crearemos en el siguiente paso


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);