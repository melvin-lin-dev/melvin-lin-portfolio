export const formatMonthYear = (dateString: string) => {
    if (dateString === "Present") return dateString;

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "Invalid Date";

    return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
    }).format(new Date(date));
};

export const formatDate = (dateString: string) => {
    if (dateString === "Present") return dateString;

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "Invalid Date";

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(date);
};

export const isDateStringComplete = (dateString: string) => {
    if (!dateString) return false;

    if (dateString.toLowerCase() === "present") return false;

    const completeDateRegex = [/^\d{4}-\d{2}-\d{2}$/, /^\d{1,2}\s+\w+\s+\d{4}$/, /^\w+\s+\d{1,2},\s+\d{4}$/];

    if (completeDateRegex.some((regex) => regex.test(dateString.trim()))) {
        const date = new Date(dateString);
        return !isNaN(date.getTime());
    }

    if (dateString.includes("-") && dateString.split("-").length < 3) {
        return false;
    }

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return false;

    const hasDay = dateString.split(" ").some((part) => !isNaN(parseInt(part)));
    const hasYear = date.getFullYear() > 1000;

    const month = date.getMonth();
    const year = date.getFullYear();

    const testDate = new Date(year, month, 1);
    if (date.getTime() === testDate.getTime()) {
        const yearOnlyCheck = new Date(year, 0, 1).getTime();
        const monthOnlyCheck = new Date(year, month, 1).getTime();

        if (date.getTime() === yearOnlyCheck || date.getTime() === monthOnlyCheck) {
            if (dateString.match(/[A-Z][a-z]+/i) && dateString.match(/\d{4}/)) {
                return false;
            }
        }
    }

    return hasDay && hasYear && date.getMonth() >= 0 && date.getMonth() <= 11;
};
