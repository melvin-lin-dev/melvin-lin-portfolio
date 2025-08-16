import Animate from "@/components/framer-motion/Animate";
import { popIn } from "@/lib/utils/framer-motion/motions";
import { CircleCheck, CircleX, X } from "lucide-react";
import { AnimatePresence } from "motion/react";
import type { ReactElement } from "react";

export type AlertType = "success" | "failed";

type AlertProps = {
    type: AlertType;
    message: string;
    hidden?: string | null;
    onClose?: () => void;
};

export default function Alert({ type, message, hidden = null, onClose }: AlertProps): ReactElement {
    const style = {
        bgColor: type === "success" ? "bg-green-100" : "bg-red-100",
        color: type === "success" ? "text-green-500" : "text-red-500",
        darkBgColor: type === "success" ? "dark:bg-green-800" : "dark:bg-red-800",
        darkColor: type === "success" ? "dark:text-green-200" : "dark:text-red-200",
    };

    return (
        <AnimatePresence>
            {type == hidden && (
                <Animate variants={popIn} condition={true} className="flex items-center w-full p-4 -mt-2 mb-6 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
                    <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8 ${style.color} ${style.bgColor} rounded-lg ${style.darkBgColor} ${style.darkColor}`}>
                        {type == "success" ? <CircleCheck /> : <CircleX />}
                    </div>
                    <div className="ms-3 text-sm font-normal">{message}</div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        aria-label="Close"
                        onClick={onClose}
                    >
                        <span className="sr-only">Close</span>
                        <X />
                    </button>
                </Animate>
            )}
        </AnimatePresence>
    );
}
