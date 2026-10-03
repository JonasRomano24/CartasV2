import ReadingPage from "../components/ReadingPage/ReadingPage";
import TarotSpread from "../components/TarotSpread/TarotSpread";

export default function ThreeCards() {
    return (
        <ReadingPage
            title="Tres Cartas"
            description="Una lectura clásica para observar cómo se relacionan tu pasado, tu presente y la energía que se proyecta hacia el futuro."
        >
            <TarotSpread
                positions={[
                    "Pasado",
                    "Presente",
                    "Futuro"
                ]}
            />
        </ReadingPage>
    );
}
