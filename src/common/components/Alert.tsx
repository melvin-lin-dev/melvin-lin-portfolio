import { Check, CircleCheck, CircleX, X } from "lucide-react";
import type { ReactElement } from "react";

export type AlertType = "success" | "failed";

type AlertProps = {
    type: AlertType;
    message: string;
    hidden?: string | null;
    onClose?: () => void;
};

export default function Alert({ type, message, hidden = null, onClose }: AlertProps): ReactElement {
    const alertType = type == "success" ? "green" : "red";

    const bgColor = `bg-${alertType}-100`;
    const color = `text-${alertType}-500`;

    const darkBgColor = `dark:bg-${alertType}-800`;
    const darkColor = `dark:text-${alertType}-200`;

    return (
        <div className="flex items-center w-full p-4 -mt-2 mb-6 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert" hidden={type != hidden}>
            <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8 ${color} ${bgColor} rounded-lg ${darkBgColor} ${darkColor}`}>{type == "success" ? <CircleCheck /> : <CircleX />}</div>
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
        </div>
    );
}
