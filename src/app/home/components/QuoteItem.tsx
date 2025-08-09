import type { Quote } from "@/lib/modules/quote/models/quote.model";
import { QuoteIcon } from "lucide-react";
import type { ReactElement } from "react";

type QuoteItemProps = {
    quote: Quote;
    handleQuoteEnter: () => void;
    handleQuoteLeave: () => void;
};

export default function QuoteItem({ quote, handleQuoteEnter, handleQuoteLeave }: QuoteItemProps): ReactElement {
    return (
        <div className="mx-auto p-6 bg-white flex flex-col" onMouseEnter={handleQuoteEnter} onMouseLeave={handleQuoteLeave}>
            <div className="flex-1">
                <QuoteIcon className="w-12 h-12 text-yellow-500" />
                <div className="mt-4 space-y-3 pl-16">
                    <p className="text-3xl text-gray-800 italic tracking-wider leading-[1.45]">{quote.text}</p>
                    <p className="text-xl text-gray-900 font-semibold text-right tracking-wider">— {quote.by}</p>
                </div>
            </div>
            <p className="mt-5 text-lg text-gray-500">{quote.why}</p>
        </div>
    );
}
