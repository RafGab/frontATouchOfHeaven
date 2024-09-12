import LogoPink from "../logo/LogoPink";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <LogoPink />
        </div>
        <h1 className="title">Más cerca de los que queremos¡</h1>
      </div>
    </nav>
  );
};

export default Navbar;
