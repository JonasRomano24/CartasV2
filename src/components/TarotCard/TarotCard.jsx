import "./TarotCard.css";
import { motion } from "framer-motion";
import { useState } from "react";


export default function TarotCard({
    title,
    symbol,
    number,
}) {

    const [style, setStyle] = useState({});

    const handleMove = (e) => {

        const card = e.currentTarget;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;

        const rotateX = -(y / rect.height - 0.5) * 20;

        setStyle({
            transform: `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)`
        });

    };

    return (

        <motion.div
            className="tarot-card"
            style={style}
            onMouseMove={handleMove}
            onMouseLeave={() => setStyle({})}
            initial={{
                opacity: 0,
                scale: 0.3,
                y: 250
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
        >

            <div className="card-border">

                <span className="corner top-left">✦</span>

                <span className="corner top-right">✦</span>

                <div className="card-content">

                    <h2>{title}</h2>

                    <div className="symbol">
                        {symbol}
                    </div>

                    <p>{number}</p>

                </div>

                <span className="corner bottom-left">✦</span>

                <span className="corner bottom-right">✦</span>

            </div>

        </motion.div>

    );

}