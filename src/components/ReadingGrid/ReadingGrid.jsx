import "./ReadingGrid.css";
import { FaHeart, FaBriefcase, FaSun, FaCoins, FaLayerGroup } from "react-icons/fa";

const readings = [
    {
        icon: <FaSun />,
        title: "Carta del Día",
        text: "Descubre la energía que te acompaña hoy."
    },
    {
        icon: <FaHeart />,
        title: "Amor",
        text: "Explora tus vínculos y emociones."
    },
    {
        icon: <FaBriefcase />,
        title: "Trabajo",
        text: "Obtén orientación sobre tu camino profesional."
    },
    {
        icon: <FaCoins />,
        title: "Dinero",
        text: "Conoce las energías relacionadas con la abundancia."
    },
    {
        icon: <FaLayerGroup />,
        title: "Tres Cartas",
        text: "Pasado, presente y futuro."
    }
];

export default function ReadingGrid() {
    return (
        <section className="reading-section">

            <h2>Tipos de Lectura</h2>

            <div className="reading-grid">

                {readings.map((reading) => (
                    <div className="reading-card" key={reading.title}>

                        <div className="icon">
                            {reading.icon}
                        </div>

                        <h3>{reading.title}</h3>

                        <p>{reading.text}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}