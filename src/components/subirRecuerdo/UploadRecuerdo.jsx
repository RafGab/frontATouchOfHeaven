import React, { useState } from 'react';
import axios from 'axios';

const UploadRecuerdo = () => {
  const [file, setFile] = useState(null);
  const [titulo, setTitulo] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('archivo', file);

    try {
      await axios.post('/api/recuerdos/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Recuerdo subido con éxito');
    } catch (error) {
     
      alert('Error subiendo el archivo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Subir Recuerdo</h2>
      <input type="text" value={titulo} onChange={handleTituloChange} placeholder="Título del recuerdo" required />
      <input type="file" onChange={handleFileChange} required />
      <button type="submit">Subir Recuerdo</button>
    </form>
  );
};

export default UploadRecuerdo;
