import logo from '../../assets/logo/logo.png'; 
import React from 'react';

const LogoPink = ({ src = logo, alt ="" }) => {
  return (
    <div>
      <img  
        src={src} 
        alt={alt} 
      />
      <p 
        id="logo-description" 
        className="sr-only" 
      >
        {alt}
      </p>
    </div>
  );
};

export default LogoPink;