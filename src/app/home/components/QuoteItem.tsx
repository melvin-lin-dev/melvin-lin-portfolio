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
        <div className="mx-auto sm:p-4 lg:p-6 bg-white flex flex-col" onMouseEnter={handleQuoteEnter} onMouseLeave={handleQuoteLeave}>
            <div className="flex-1">
                <QuoteIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500" />
                <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 sm:pl-10 md:pl-16">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 italic tracking-wider leading-[1.45]">{quote.text}</p>
                    <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-900 font-semibold text-right tracking-wider">— {quote.by}</p>
                </div>
            </div>
            <p className="mt-4 md:mt-5 text-xs sm:text-base md:text-lg text-gray-500">{quote.why}</p>
        </div>
    );
}
