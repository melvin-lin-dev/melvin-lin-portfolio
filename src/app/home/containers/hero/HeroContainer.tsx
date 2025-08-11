import { profileRoleColors, profileTitles } from "@/lib/modules/profile/constants/profile-titles";
import { useEffect, useRef, useState, type ReactElement } from "react";
import { FaDownload, FaLocationPin } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Contact3DContainer from "./contact-3d-container/Contact3DContainer";
import Cube3DContainer from "./cube-3d-container/Cube3DContainer";

export default function HeroContainer(): ReactElement {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const applyCenterGradient = (el: HTMLDivElement) => {
        el.style.backgroundImage = "radial-gradient(circle at center, #00D492 25%, #00D3F2 65%)";
        el.style.backgroundSize = "175% 175%";
    };

    const applyMouseGradient = (el: HTMLDivElement, x: number, y: number) => {
        el.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, #00D492 25%, #00D3F2 50%)`;
        el.style.backgroundSize = `100% 100%`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        applyCenterGradient(e.currentTarget);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        applyMouseGradient(el, x, y);
    };

    useEffect(() => {
        if (sectionRef.current) {
            applyCenterGradient(sectionRef.current);
        }
    }, []);

    const [textColor, setTextColor] = useState("");

    const sequence = profileTitles.flatMap((item) => ["", () => setTextColor(profileRoleColors[item.category]), item.text, 1500]);

    return (
        <section ref={sectionRef} className="h-[80vh] text-white transition-all duration-[.4s] bg-center" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="container h-full py-20 flex">
                <div className="self-center">
                    <Cube3DContainer />
                    <div>
                        <div className="space-y-6">
                            <h1 className="text-7xl font-bold tracking-wider">Melvin Lin</h1>
                            <div className={`py-1.5 px-3 inline-block bg-white/70 rounded-lg text-3xl ${textColor}`}>
                                <TypeAnimation sequence={sequence} wrapper="span" speed={50} repeat={Infinity} />
                            </div>
                        </div>
                        <div className="mt-8 mb-12 space-y-4 text-[22px]">
                            <div className="flex items-center space-x-3">
                                <FaLocationPin />
                                <p>Indonesia (Willing to Relocate Overseas)</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="w-5 h-5 bg-green-400 rounded-full border-2 border-white" aria-label="Available"></span>
                                <p>Available Immediately</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#quote-section" role="button" className="btn btn-secondary py-6 px-8 rounded-full text-xl">
                                Discover More
                            </a>
                            <a href="" download title="Resume" className="py-6 btn btn-white rounded-full text-xl">
                                <FaDownload />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 hidden md:flex flex items-center justify-center">
                    <Contact3DContainer />
                </div>
            </div>
        </section>
    );
}
