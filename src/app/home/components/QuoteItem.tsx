import type { Quote } from "@/lib/modules/quote/models/quote.model";
import { Pause, QuoteIcon } from "lucide-react";
import type { ReactElement } from "react";

type QuoteItemProps = {
    quote: Quote;
    isPaused: boolean;
};

export default function QuoteItem({ quote, isPaused }: QuoteItemProps): ReactElement {
    return (
        <div className="mx-auto p-5 md:p-6 bg-white flex flex-col">
            <div className="flex-1">
                <QuoteIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500" />
                <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 sm:pl-10 md:pl-16">
                    <p className="min-w-[400px]:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 italic tracking-wider leading-[1.45]">{quote.text}</p>
                    <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-900 font-semibold text-right tracking-wider">— {quote.by}</p>
                </div>
            </div>
            <div className="flex items-end justify-between space-x-3 sm:space-x-4">
                <p className="mt-4 md:mt-5 text-xs sm:text-base md:text-lg text-gray-500">{quote.why}</p>
                <div className={`relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 border sm:border-2 border-emerald-600 rounded-full transition-opacity ${isPaused ? "opacity-100" : "opacity-0"} `}>
                    <Pause className="absolute top-1/2 left-1/2 -translate-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-emerald-600" />
                </div>
            </div>
        </div>
    );
}
