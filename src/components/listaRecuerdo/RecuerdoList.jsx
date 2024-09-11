import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecuerdosList = () => {
  const [recuerdos, setRecuerdos] = useState([]);

  useEffect(() => {
    // Petición al backend para obtener los recuerdos
    axios.get('/api/recuerdos/')
      .then(response => {
        setRecuerdos(response.data);
      })
      .catch(error => {
        console.error('Error fetching recuerdos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Recuerdos Almacenados</h2>
      <ul>
        {recuerdos.map(recuerdo => (
          <li key={recuerdo.id}>
            <h3>{recuerdo.titulo}</h3>
            {recuerdo.tipo === 'imagen' && <img src={recuerdo.url} alt={recuerdo.titulo} />}
            {recuerdo.tipo === 'video' && <video controls src={recuerdo.url} />}
            {recuerdo.tipo === 'audio' && <audio controls src={recuerdo.url} />}
            {recuerdo.tipo === 'documento' && <a href={recuerdo.url}>Descargar {recuerdo.titulo}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecuerdosList;
