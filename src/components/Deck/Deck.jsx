import "./Deck.css";
import { motion } from "framer-motion";

export default function Deck({ onDraw, isShuffling }) {
    return (
        <div className="deck-container" onClick={onDraw}>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    className="deck-card"
                    style={{
                        top: index * 2,
                        left: index * 2,
                        zIndex: index,
                    }}
                    animate={
                        isShuffling
                            ? {
                                x: [0, -8, 8, -6, 6, 0],
                                rotate: [-4, 4, -3, 3, 0],
                                scale: [1, 1.03, 0.99, 1],
                            }
                            : {}
                    }
                    transition={{
                        duration: 0.9,
                        ease: "easeInOut",
                    }}
                >
                    <div className="deck-border">
                        <div className="deck-inner">
                            <div className="moon">☾</div>

                            <div className="center-symbol">
                                ✦
                            </div>

                            <div className="stars">
                                ✦ ✧ ✦
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}