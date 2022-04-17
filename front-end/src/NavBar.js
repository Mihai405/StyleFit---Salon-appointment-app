import logo from "./logo.png";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-image">
            <img src="logo.png" width="150px" height="150px" className="d-inline-block align-top navbar-image" alt="Logo" />
        </div>
        <div className="navbar-services">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Lorem</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Lorem</a>
                </li>
            </ul>
        </div>
        <div className="auth ">
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <a className="nav-link" href="#">Log In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
