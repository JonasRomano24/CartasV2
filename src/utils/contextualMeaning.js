export function getContextualMeaning(card, position) {

    const meaning = card.meaning;

    const contexts = {
        "Tu energía": `
            Esta carta representa tu estado energético dentro de la situación.
            Su significado principal (${meaning.toLowerCase()}) señala aquello
            que estás expresando, sintiendo o atravesando en este momento.
        `,

        "La otra persona": `
            En esta posición, la carta representa la energía o actitud de la
            otra persona involucrada. ${meaning} Puede señalar cómo esa persona
            está viviendo la situación o qué energía aporta al vínculo.
        `,

        "Evolución de la relación": `
            Aquí la carta muestra hacia dónde puede desarrollarse la dinámica
            del vínculo si las energías actuales continúan. ${meaning} No
            representa un destino fijo, sino una tendencia que puede modificarse
            con las decisiones de ambas partes.
        `,

        "Situación actual": `
            Esta carta describe el escenario en el que te encuentras
            actualmente. ${meaning} Es la energía principal que conviene
            observar antes de tomar decisiones.
        `,

        "Obstáculo": `
            En esta posición, la carta representa aquello que puede estar
            dificultando el avance. ${meaning} Aquí su energía puede manifestarse
            de forma bloqueada, excesiva o difícil de integrar.
        `,

        "Oportunidad": `
            Esta carta señala una posibilidad que puede ser aprovechada.
            ${meaning} La oportunidad aparece cuando reconoces y utilizas
            conscientemente esta energía a tu favor.
        `,

        "Consejo": `
            Como consejo, esta carta indica una actitud o enfoque que puede
            ayudarte. ${meaning} La invitación es integrar esta energía de forma
            consciente en lugar de esperar que las circunstancias cambien por sí
            solas.
        `,

        "Situación económica": `
            En el ámbito económico, esta carta describe tu situación material
            actual. ${meaning} Puede ayudarte a identificar qué energía está
            influyendo actualmente sobre tus recursos y estabilidad.
        `,

        "Ingresos": `
            En esta posición, la carta se relaciona con la generación y entrada
            de dinero. ${meaning} Puede señalar una tendencia relacionada con
            oportunidades, trabajo, recursos o nuevas formas de obtener ingresos.
        `,

        "Gastos": `
            Aquí la carta representa la forma en que puede manifestarse la
            energía relacionada con tus gastos y utilización de recursos.
            ${meaning} Conviene observar cómo esta energía influye en tus
            decisiones materiales.
        `,

        "Pasado": `
            En el pasado, esta carta representa una experiencia o energía que
            ha influido en el camino que te llevó hasta el presente.
            ${meaning} Comprender esta influencia puede ayudarte a interpretar
            mejor la situación actual.
        `,

        "Presente": `
            Esta carta representa la energía dominante del momento actual.
            ${meaning} Es el punto desde el cual estás tomando decisiones y
            construyendo tu siguiente etapa.
        `,

        "Futuro": `
            En la posición de futuro, esta carta representa una tendencia que
            puede desarrollarse a partir de las circunstancias actuales.
            ${meaning} No es un resultado inevitable, sino una posible dirección
            si las condiciones actuales se mantienen.
        `
    };

    return contexts[position] || `
        ${meaning}
    `;
}
