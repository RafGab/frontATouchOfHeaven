import React, { useState } from 'react';
import axios from 'axios';

const DeleteRecuerdo = () => {
  const [recuerdoId, setRecuerdoId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/recuerdos/${recuerdoId}`);
      alert('Recuerdo eliminado');
    } catch (error) {
      console.error('Error eliminando el recuerdo:', error);
      alert('Error eliminando el recuerdo');
    }
  };

  return (
    <div>
      <h2>Eliminar Recuerdo</h2>
      <input
        type="text"
        placeholder="ID del recuerdo"
        value={recuerdoId}
        onChange={(e) => setRecuerdoId(e.target.value)}
      />
      <button onClick={handleDelete}>Eliminar Recuerdo</button>
    </div>
  );
}

export default DeleteRecuerdo;
