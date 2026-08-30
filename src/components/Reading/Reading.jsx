import "./Reading.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cards } from "../../data/cards";
import TarotCard from "../TarotCard/TarotCard";
import Deck from "../Deck/Deck";

export default function Reading() {

    const [selectedCard, setSelectedCard] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);

    const drawCard = () => {

        if (isShuffling || isDrawing) return;

        setSelectedCard(null);
        setIsShuffling(true);

        setTimeout(() => {

            setIsShuffling(false);
            setIsDrawing(true);

            const random =
                cards[Math.floor(Math.random() * cards.length)];

            setTimeout(() => {

                setSelectedCard(random);
                setIsDrawing(false);

            }, 900);

        }, 1200);

    };

    return (

        <section className="reading">

            <h2>Realiza tu lectura</h2>

            {isShuffling && (
                <div className="shuffle-message">
                    🔮 Barajando las cartas...
                </div>
            )}

            {!selectedCard && !isDrawing && (

                <>
                    <Deck
                        onDraw={drawCard}
                        isShuffling={isShuffling}
                    />

                    <p className="instruction">
                        Haz clic sobre el mazo para descubrir tu carta
                    </p>
                </>

            )}

            <AnimatePresence>

                {isDrawing && (

                    <motion.div
                        className="drawing-card"

                        initial={{
                            x: 0,
                            y: 0,
                            rotate: 0,
                            opacity: 1
                        }}

                        animate={{
                            x: 320,
                            y: -20,
                            rotate: 15,
                            scale: 1.05
                        }}

                        exit={{
                            opacity: 0
                        }}

                        transition={{
                            duration: .9
                        }}
                    >

                        <Deck />

                    </motion.div>

                )}

            </AnimatePresence>

            <AnimatePresence>

                {selectedCard && (

                    <>

                        <motion.div

                            className="card-glow"

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}

                        />

                        <motion.div

                            initial={{
                                opacity: 0,
                                rotateY: 180,
                                scale: .5
                            }}

                            animate={{
                                opacity: 1,
                                rotateY: 0,
                                scale: 1
                            }}

                            transition={{
                                duration: .8
                            }}

                        >

                            <TarotCard
                                title={selectedCard.title}
                                symbol={selectedCard.symbol}
                                number={selectedCard.number}
                            />

                        </motion.div>

                        <motion.div

                            className="meaning"

                            initial={{
                                opacity: 0,
                                y: 30
                            }}

                            animate={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: .4,
                                duration: .8
                            }}

                        >

                            <h3>{selectedCard.title}</h3>

                            <p>{selectedCard.meaning}</p>

                        </motion.div>

                        <button
                            className="draw-button"
                            onClick={() => setSelectedCard(null)}
                        >
                            Volver al mazo
                        </button>

                    </>

                )}

            </AnimatePresence>

        </section>

    );

}