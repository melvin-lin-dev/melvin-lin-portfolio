import { IconWrapper } from "@/components/icon/lucide/IconWrapper";

type FloatingFieldProps = {
    type?: "text" | "email" | "textarea";
    id?: string;
    name: string;
    label: string;
    iconName?: string;
    rows?: number; // only for textarea
    required?: boolean;
};

export default function FloatingField({ type = "text", id, name, label, iconName, rows = 4, required = true }: FloatingFieldProps) {
    if (!id) id = name;

    let iconClass = "top-1/2";

    if (type === "textarea") {
        iconClass = "top-5.5";
    }

    return (
        <div className="relative z-0 w-full group">
            {type === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    className="block py-3 pl-9 pr-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer resize-none"
                    placeholder=" "
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    className="block py-2.5 pl-9 pr-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                    placeholder=" "
                    required={required}
                />
            )}

            {iconName && (
                <span className={`absolute ${iconClass} left-0 -translate-y-1/2 text-gray-400 dark:text-gray-500 px-2 pointer-events-none peer-focus:text-teal-600 peer-focus:dark:text-teal-500`}>
                    <IconWrapper name={iconName} className="w-5 h-5" />
                </span>
            )}

            <label
                htmlFor={name}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-9 origin-[0] peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
    );
}
