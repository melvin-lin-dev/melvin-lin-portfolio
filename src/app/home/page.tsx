import { FaLinkedin } from "react-icons/fa6";

export default function Home() {
    return (
        <>
            <section>
                <div className="container">
                    <h1 className="text-6xl">Melvin Lin</h1>
                    <h4 className="mt-4 mb-8">Problem Solver...</h4>
                    <ul className="flex space-x-2">
                        {[...Array(5)].map((_, index) => (
                            <li key={index}>
                                <a href="" className="inline-block p-4 rounded-full bg-gray-200">
                                    <FaLinkedin />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button type="button" className="py-2 px-4 rounded-full bg-gray-200 mt-4">
                        Discover More
                    </button>
                </div>
            </section>
        </>
    );
}
