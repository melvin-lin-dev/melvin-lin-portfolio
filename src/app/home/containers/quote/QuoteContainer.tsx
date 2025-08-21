"use client";

import Animate from "@/components/framer-motion/Animate";
import quotes from "@/lib/modules/quote/constants/quotes";
import { popIn } from "@/utils/framer-motion/motions";
import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import QuoteItem from "../../components/QuoteItem";
import styles from "./quote-container.module.scss";

export default function QuoteContainer(): ReactElement {
    const [rotateDegree, setRotateDegree] = useState(0);
    const rotateDegreeRef = useRef(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const rotateCube = () => {
        setRotateDegree((prev) => {
            const next = prev + 90;
            rotateDegreeRef.current = next;
            return next;
        });
    };

    const startTimer = useCallback(() => {
        clearTimer();
        timeoutRef.current = setTimeout(() => {
            rotateCube();
            startTimer();
        }, quotes[(rotateDegreeRef.current / 90) % 4].time);
    }, []);

    const clearTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const handleQuoteEnter = () => {
        setIsPaused(true);
        clearTimer();
    };

    const handleQuoteLeave = () => {
        setIsPaused(false);
        startTimer();
    };

    const handleQuoteClick = () => {
        clearTimer();
        rotateCube();
        startTimer();
    };

    useEffect(() => {
        startTimer();
        return () => clearTimer();
    }, [startTimer]);

    return (
        <Animate variants={popIn} className={styles.quoteSection}>
            <div className="container relative">
                <div
                    style={{ transform: `translate(-50%, -50%) rotateX(${rotateDegree}deg)` }}
                    className={`${styles.box3d} bg-white select-none`}
                    onMouseEnter={handleQuoteEnter}
                    onMouseLeave={handleQuoteLeave}
                    onClick={handleQuoteClick}
                >
                    {quotes.map((quote) => (
                        <QuoteItem key={quote.text} quote={quote} isPaused={isPaused} />
                    ))}
                </div>
            </div>
        </Animate>
    );
}
