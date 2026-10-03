import "./ReadingGrid.css";
import {
    FaHeart,
    FaBriefcase,
    FaSun,
    FaCoins,
    FaLayerGroup
} from "react-icons/fa";
import { Link } from "react-router-dom";

const readings = [
    {
        icon: <FaSun />,
        title: "Carta del Día",
        text: "Descubre la energía que te acompaña hoy.",
        path: "/daily"
    },
    {
        icon: <FaHeart />,
        title: "Amor",
        text: "Explora tus vínculos y emociones.",
        path: "/love"
    },
    {
        icon: <FaBriefcase />,
        title: "Trabajo",
        text: "Obtén orientación sobre tu camino profesional.",
        path: "/work"
    },
    {
        icon: <FaCoins />,
        title: "Dinero",
        text: "Conoce las energías relacionadas con la abundancia.",
        path: "/money"
    },
    {
        icon: <FaLayerGroup />,
        title: "Tres Cartas",
        text: "Pasado, presente y futuro.",
        path: "/three-cards"
    }
];

export default function ReadingGrid() {
    return (
        <section className="reading-section" id="lecturas">

            <h2>Tipos de Lectura</h2>

            <div className="reading-grid">

                {readings.map((reading) => (
                    <Link
                        to={reading.path}
                        className="reading-card"
                        key={reading.title}
                    >
                        <div className="icon">
                            {reading.icon}
                        </div>

                        <h3>{reading.title}</h3>

                        <p>{reading.text}</p>
                    </Link>
                ))}

            </div>

        </section>
    );
}