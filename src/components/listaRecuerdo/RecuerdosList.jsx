import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecuerdosList = () => {
  const [recuerdos, setRecuerdos] = useState([]); // Inicializa como array vacío
  const [error, setError] = useState(null); // Manejo de errores

  useEffect(() => {
    // Petición al backend para obtener los recuerdos
    axios.get('/api/recuerdos/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setRecuerdos(response.data); // Asegura que el dato es un array
        } else {
          setRecuerdos([]); // Si no es un array, establece recuerdos como array vacío
        }
      })
      .catch(error => {
        console.error('Error fetching recuerdos:', error);
        setError('Error fetching recuerdos'); // Almacena el error
      });
  }, []);

  // Muestra el mensaje de error si lo hay
  if (error) {
    return <p>{error}</p>;
  }

  // Si no hay recuerdos disponibles, muestra un mensaje
  if (recuerdos.length === 0) {
    return <p>No hay recuerdos almacenados.</p>;
  }

  return (
    <div>
      <h2>Recuerdos Almacenados</h2>
      <ul>
        {recuerdos.map(recuerdo => (
          <li key={recuerdo.id}>
            <h3>{recuerdo.titulo}</h3>
            {recuerdo.tipo === 'imagen' && <img src={recuerdo.url} alt={recuerdo.titulo} style={{ maxWidth: '300px' }} />}
            {recuerdo.tipo === 'video' && <video controls src={recuerdo.url} style={{ maxWidth: '300px' }} />}
            {recuerdo.tipo === 'audio' && <audio controls src={recuerdo.url} />}
            {recuerdo.tipo === 'documento' && <a href={recuerdo.url} download>Descargar {recuerdo.titulo}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecuerdosList;

