import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MEMORIES_URL } from '../../url';
import './recuerdosList.css';

const RecuerdosList = () => {
  const [recuerdos, setRecuerdos] = useState([]); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    axios.get(MEMORIES_URL, FormData)
      .then(response => {
        if (Array.isArray(response.data)) {
          setRecuerdos(response.data);
        } else {
          setRecuerdos([]);
        }
      })
      .catch(error => {
        console.error('Error fetching recuerdos:', error);
        setError('Error fetching recuerdos');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (recuerdos.length === 0) {
    return <p>No hay recuerdos almacenados.</p>;
  }

  return (
    <div>
      <h2>Tus recuerdos</h2>
      <ul>
        {recuerdos.map(recuerdo => (
          <li key={recuerdo.id}>
            <h3>{recuerdo.title}</h3>
            {recuerdo.photo && <img src={recuerdo.photo} alt={recuerdo.title} style={{ maxWidth: '300px' }} />}
            {recuerdo.video && <video controls src={recuerdo.video} style={{ maxWidth: '300px' }} />}
            {recuerdo.document && <a href={recuerdo.document} download>Descargar {recuerdo.title}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecuerdosList;