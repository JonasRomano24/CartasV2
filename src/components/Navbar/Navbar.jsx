import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="logo">
                Cartas
            </Link>

            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/#lecturas">Lecturas</Link>
                <Link to="/#nosotros">Nosotros</Link>
                <Link to="/#contacto">Contacto</Link>
            </nav>
        </header>
    );
}