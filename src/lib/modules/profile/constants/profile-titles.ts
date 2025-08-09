import type { ProfileRole } from "../../../shared/types/profile-role";
import type { ProfileTitle } from "../../../shared/types/profile-title";

export const profileTitles: ProfileTitle[] = [
    { text: "Software Engineer", category: "role" },
    { text: "Full Stack Developer", category: "role" },
    { text: "Frontend Engineer", category: "role" },
    { text: "Backend Engineer", category: "role" },
    { text: "Web Developer", category: "role" },

    { text: "Problem Solver", category: "mindset" },
    { text: "Lifelong Learner", category: "mindset" },
    { text: "Flow-based Thinker", category: "mindset" },
    { text: "Detail-Oriented Developer", category: "mindset" },
    { text: "Curious Developer", category: "mindset" },

    { text: "UI/UX Enthusiast", category: "design" },
    { text: "Design-Oriented Developer", category: "design" },
    { text: "Interactive UI Builder", category: "design" },

    { text: "Clean Code Advocate", category: "philosophy" },
];

export const profileRoleColors: Record<ProfileRole, string> = {
    role: "text-blue-600",
    mindset: "text-green-600",
    design: "text-pink-600",
    philosophy: "text-purple-600",
};
