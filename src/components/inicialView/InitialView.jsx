import RecuerdosList from "../listaRecuerdo/RecuerdosList";
import UploadRecuerdo from "../subirRecuerdo/UploadRecuerdo";
import DeleteRecuerdo from "../borrarRecuerdo/DeleteRecuerdo";
import React from "react";
import './initialView.css';  

const InitialView = () => {
  return (
    <main className="initial-view-container">
      
      <section className="recuerdos-section">
        <h2>Lista de Recuerdos</h2>
        <RecuerdosList />
      </section>

    
      <section className="upload-section">
        <h2>Subir un Recuerdo</h2>
        <UploadRecuerdo />
      </section>

     
      <section className="delete-section">
        <h2>Eliminar un Recuerdo</h2>
        <DeleteRecuerdo />
      </section>
    </main>
  );
};

export default InitialView;
