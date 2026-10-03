import ReadingPage from "../components/ReadingPage/ReadingPage";
import TarotSpread from "../components/TarotSpread/TarotSpread";

export default function Love() {

    return (
        <ReadingPage
            title="Lectura de Amor"
            description="Explora tus vínculos, emociones y relaciones a través del tarot."
        >

            <TarotSpread
                positions={[
                    "Tu energía",
                    "La otra persona",
                    "Evolución de la relación"
                ]}
            />

        </ReadingPage>
    );
}
