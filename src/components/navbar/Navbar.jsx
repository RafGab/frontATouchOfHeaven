import LogoPink from "../logo/LogoPink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <div className="logo">
          <LogoPink />
        </div>
        <div>
          <h1>Tu Lugar Seguro</h1>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Subir Recuerdo</Link>
            </li>
            <li>
              <Link to="/recuerdos">Ver Recuerdos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
