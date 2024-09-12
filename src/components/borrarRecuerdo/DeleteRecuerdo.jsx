import React, { useState } from 'react';
import axios from 'axios';
import './deleteRecuerdo.css'; 

const DeleteRecuerdo = () => {
  const [recuerdoId, setRecuerdoId] = useState('');

  const handleDelete = async () => {
    if (!recuerdoId) {
      alert('Por favor, introduce el ID del recuerdo');
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/api/memories/${recuerdoId}/`);
      alert('Recuerdo eliminado');
      setRecuerdoId('');  
    } catch (error) {
      console.error('Error eliminando el recuerdo:', error);
      alert('Error eliminando el recuerdo');
    }
  };

  return (
    <div className="delete-container">
  
      <input
        type="text"
        placeholder="ID del recuerdo"
        value={recuerdoId}
        onChange={(e) => setRecuerdoId(e.target.value)}
        className="input-id"
      />
      <button onClick={handleDelete} className="delete-button">
        Eliminar Recuerdo
      </button>
    </div>
  );
};

export default DeleteRecuerdo;
