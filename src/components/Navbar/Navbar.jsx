import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <h2 className="logo">Cartas</h2>

            <nav>
                <a href="#">Inicio</a>
                <a href="#">Lecturas</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
            </nav>
        </header>
    );
}