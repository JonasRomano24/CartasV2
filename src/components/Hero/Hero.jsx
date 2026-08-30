import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Descubre el mensaje
                    <span> que las cartas tienen para ti</span>
                </h1>

                <p>
                    Conecta con tu intuición y encuentra una nueva perspectiva
                    a través de lecturas únicas.
                </p>

                <button>
                    Comenzar lectura
                </button>

            </div>


            <div className="hero-card">

                <div className="card-back">
                    ✨
                </div>

            </div>

        </section>
    );
}