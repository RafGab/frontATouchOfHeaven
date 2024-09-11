import LogoPink from "../logo/LogoPink";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <div className="logo">
          <LogoPink />
        </div>
        <div>
          <h1 className="title">Más cerca de los que queremos¡</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
