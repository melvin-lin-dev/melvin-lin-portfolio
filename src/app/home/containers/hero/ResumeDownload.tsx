import ThreeDimensionButton from "@/common/components/buttons/three-dimension-button/ThreeDimensionButton";
import { Download } from "lucide-react";
import { useState } from "react";

export default function ResumeDownload() {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);

        const res = await fetch("/resume.pdf");
        const blob = await res.blob();

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = "/resume.pdf";
        a.download = "Resume - Melvin Lin - Software Engineer.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

        setIsLoading(false);
    };

    return (
        <ThreeDimensionButton
            tag="a"
            color="gray"
            title="Resume"
            className="rounded-lg sm:rounded-xl flex items-center"
            paddingClassName="p-3"
            isLoading={isLoading}
            loaderMode="replace"
            loaderClassName="mx-1 w-5.5 h-5.5 sm:w-6 sm:h-6 border-2"
            onClick={handleDownload}
        >
            <Download className="mx-1 w-5.5 h-5.5 sm:w-6 sm:h-6" />
        </ThreeDimensionButton>
    );
}
