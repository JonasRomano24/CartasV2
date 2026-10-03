import "./ReadingPage.css";

import Reading from "../Reading/Reading";

export default function ReadingPage({
    title,
    description,
    children
}) {

    return (
        <main className="reading-page">

            <section className="reading-intro">

                <h1>{title}</h1>

                <p>{description}</p>

            </section>

            {children || <Reading />}

        </main>
    );
}
