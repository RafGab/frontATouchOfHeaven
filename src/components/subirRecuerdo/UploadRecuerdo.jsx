import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import { MEMORIES_URL } from '../../url';
import './uploadRecuerdos.css';

const UploadRecuerdo = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [files, setFiles] = useState({ photo: null, video: null, document: null });
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  // Manejadores de cambio para los campos de texto
  const handleTituloChange = (e) => setTitulo(e.target.value);
  const handleDescripcionChange = (e) => setDescripcion(e.target.value);
  const handleLinkChange = (e) => setLink(e.target.value);

  // Manejador genérico para los archivos
  const handleFileChange = (e) => {
    const { name, files: uploadedFiles } = e.target;
    setFiles({ ...files, [name]: uploadedFiles[0] });
  };

  // Subir el recuerdo
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Resetea errores previos

    // Validación adicional: Al menos un archivo o un enlace deben estar presentes
    if (!files.photo && !files.video && !files.document && !link) {
      setError('Debes proporcionar al menos un archivo o un enlace.');
      return;
    }

    const formData = new FormData();
    formData.append('title', titulo);
    formData.append('description', descripcion);
    if (files.photo) formData.append('photo', files.photo);
    if (files.video) formData.append('video', files.video);
    if (files.document) formData.append('document', files.document);
    if (link) formData.append('link', link);

    try {
      await axios.post(MEMORIES_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Recuerdo subido con éxito');
      
      // Resetea el formulario después del éxito
      setTitulo('');
      setDescripcion('');
      setFiles({ photo: null, video: null, document: null });
      setLink('');
    } catch (error) {
      setError('Error subiendo el archivo: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input
          type="text"
          value={titulo}
          onChange={handleTituloChange}
          placeholder="Título del recuerdo"
          required
        />

        <textarea
          value={descripcion}
          onChange={handleDescripcionChange}
          placeholder="Descripción del recuerdo"
          required
        />

        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          accept="image/*"
        />
        <input
          type="file"
          name="video"
          onChange={handleFileChange}
          accept="video/*"
        />
        <input
          type="file"
          name="document"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
        />

        <input
          type="url"
          value={link}
          onChange={handleLinkChange}
          placeholder="Enlace relacionado (opcional)"
        />

        <button type="submit">Subir Recuerdo</button>
      </form>
    </div>
  );
};

export default UploadRecuerdo;
