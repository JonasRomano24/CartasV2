import ReadingPage from "../components/ReadingPage/ReadingPage";
import TarotSpread from "../components/TarotSpread/TarotSpread";

export default function Money() {
    return (
        <ReadingPage
            title="Lectura de Dinero"
            description="Explora tu situación económica, tus recursos, posibles oportunidades y aquello que puede influir en tu estabilidad material."
        >
            <TarotSpread
                positions={[
                    "Situación económica",
                    "Ingresos",
                    "Gastos",
                    "Obstáculo",
                    "Consejo"
                ]}
            />
        </ReadingPage>
    );
}
