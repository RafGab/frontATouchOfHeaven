import logo from '../../assets/logo/logo.png'; 

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