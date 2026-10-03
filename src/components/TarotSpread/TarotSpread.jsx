import "./TarotSpread.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cards } from "../../data/cards";
import TarotCard from "../TarotCard/TarotCard";
import Deck from "../Deck/Deck";
import { getContextualMeaning } from "../../utils/contextualMeaning";

export default function TarotSpread({ positions }) {
    const [selectedCards, setSelectedCards] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);

    const drawCard = () => {
        if (
            isShuffling ||
            isDrawing ||
            currentPosition >= positions.length
        ) {
            return;
        }

        setIsShuffling(true);

        setTimeout(() => {
            setIsShuffling(false);
            setIsDrawing(true);

            const availableCards = cards.filter(
                (card) =>
                    !selectedCards.some(
                        (selected) => selected.id === card.id
                    )
            );

            const randomCard =
                availableCards[
                    Math.floor(Math.random() * availableCards.length)
                ];

            setTimeout(() => {
                setSelectedCards((prev) => [
                    ...prev,
                    randomCard
                ]);

                setCurrentPosition((prev) => prev + 1);
                setIsDrawing(false);
            }, 900);
        }, 1200);
    };

    const resetReading = () => {
        setSelectedCards([]);
        setCurrentPosition(0);
        setIsShuffling(false);
        setIsDrawing(false);
    };

    const readingComplete =
        selectedCards.length === positions.length;

    return (
        <section className="tarot-spread">

            <div className="spread-progress">
                <span>
                    {readingComplete
                        ? "Tirada completada"
                        : `Carta ${currentPosition + 1} de ${positions.length}`
                    }
                </span>
            </div>

            <div className="spread-cards">

                {positions.map((position, index) => {

                    const card = selectedCards[index];

                    return (
                        <div
                            className={`spread-slot ${
                                card ? "revealed" : ""
                            }`}
                            key={position}
                        >

                            <h3>{position}</h3>

                            {!card ? (

                                <motion.div
                                    className="hidden-card"
                                    animate={
                                        index === currentPosition &&
                                        !isDrawing
                                            ? {
                                                scale: [1, 1.03, 1]
                                            }
                                            : {}
                                    }
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity
                                    }}
                                >
                                    <div className="hidden-card-border">

                                        <div className="hidden-card-inner">
                                            <span>✦</span>
                                        </div>

                                    </div>
                                </motion.div>

                            ) : (

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        rotateY: 180,
                                        scale: 0.5
                                    }}
                                    animate={{
                                        opacity: 1,
                                        rotateY: 0,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.8
                                    }}
                                >
                                    <TarotCard
                                        title={card.title}
                                        symbol={card.symbol}
                                        number={card.number}
                                    />
                                </motion.div>

                            )}

                            {card && (
                                <motion.div
                                    className="spread-meaning"
                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.4
                                    }}
                                >
                                    <h4>{card.title}</h4>

                                    <p>
                                        {getContextualMeaning(
                                            card,
                                            position
                                        )}
                                    </p>
                                </motion.div>
                            )}

                        </div>
                    );
                })}

            </div>

            {!readingComplete && (
                <>
                    {isShuffling && (
                        <div className="shuffle-message">
                            🔮 Barajando las cartas...
                        </div>
                    )}

                    {!isShuffling && !isDrawing && (
                        <>
                            <Deck
                                onDraw={drawCard}
                                isShuffling={isShuffling}
                            />

                            <p className="spread-instruction">
                                Haz clic sobre el mazo para descubrir:

                                <strong>
                                    {positions[currentPosition]}
                                </strong>
                            </p>
                        </>
                    )}

                    <AnimatePresence>
                        {isDrawing && (
                            <motion.div
                                className="spread-drawing-card"
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    rotate: -10
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0
                                }}
                                exit={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 0.8
                                }}
                            >
                                <Deck />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}

            {readingComplete && (
                <motion.div
                    className="spread-complete"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                >
                    <h2>
                        ✨ Lectura completada
                    </h2>

                    <p>
                        Las cartas han revelado el mensaje de tu tirada.
                    </p>

                    <button
                        className="draw-button"
                        onClick={resetReading}
                    >
                        Nueva lectura
                    </button>
                </motion.div>
            )}

        </section>
    );
}
