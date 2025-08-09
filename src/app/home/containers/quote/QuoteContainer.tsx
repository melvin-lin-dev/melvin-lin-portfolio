import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import styles from "./quote-container.module.scss";
import quotes from "@/lib/modules/quote/constants/quotes";
import QuoteItem from "../../components/QuoteItem";

export default function QuoteContainer(): ReactElement {
    const [rotateDegree, setRotateDegree] = useState(0);
    const rotateDegreeRef = useRef(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startTimer = useCallback(() => {
        clearTimer();
        timeoutRef.current = setTimeout(() => {
            setRotateDegree((prev) => {
                const next = prev + 90;
                rotateDegreeRef.current = next;
                return next;
            });
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
        clearTimer();
    };

    const handleQuoteLeave = () => {
        startTimer();
    };

    useEffect(() => {
        startTimer();
        return () => clearTimer();
    }, [startTimer]);

    return (
        <section id="quote-section" className={`${styles.quoteSection} py-28`}>
            <div className="container relative">
                <div style={{ transform: `translate(-50%, -50%) rotateX(${rotateDegree}deg)` }} className={styles.box3d}>
                    {quotes.map((quote) => (
                        <QuoteItem key={quote.text} quote={quote} handleQuoteEnter={handleQuoteEnter} handleQuoteLeave={handleQuoteLeave} />
                    ))}
                </div>
            </div>
        </section>
    );
}
