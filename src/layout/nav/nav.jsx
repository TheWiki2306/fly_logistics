import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="py-4">
            <div className="w-auto h-0.5 bg-white rounded-2xl mb-4"></div>
            <div className="flex justify-between items-center text-blue-100">
                <Link to="/">
                    <div className="text-blue-100 italic text-2xl">
                        Fly<strong className="text-gray-500 not-italic">Logistics</strong>
                    </div>
                </Link>

                <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <motion.div className="w-4 h-1 bg-white mb-1 rounded" animate={{ rotate: menuOpen ? 45 : 0 }} />
                    <motion.div
                        className={`w-8 h-1 bg-white mb-1 rounded ${
                            menuOpen ? "opacity-0" : "opacity-100"
                        }`}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: menuOpen ? 0 : 1 }}
                    />
                    <motion.div className="w-4 h-1 bg-white rounded" animate={{ rotate: menuOpen ? -45 : 0 }} />
                </div>

                <div className="hidden md:flex gap-8 items-center">
                    <div className="flex gap-12 items-center">
                        <Link to="/">
                            <li className="list-none text-normal group relative">
                                Home
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full">
                                </span>
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className="list-none text-normal group relative">
                                About
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full">
                                </span>
                            </li>
                        </Link>
                        <li className="list-none text-normal group relative">
                            Contact
                            <span
                                className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-400 transition-all duration-300 group-hover:w-full">
                            </span>
                        </li>
                    </div>
                    <Link to="/booking">
                        <div className="bg-gray-400 px-5 pt-2 pb-3 rounded-xl border-0 transition-all duration-300 hover:bg-gray-500 hover:scale-105">
                            <p className="text-white font-semibold">Get Started</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col mt-4 space-y-4 text-center md:hidden">
                    <Link to="/" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link to="/about" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link to="/contact" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                        Contact
                    </Link>
                    <Link to="/booking" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                        <div className="bg-gray-400 px-5 pt-2 pb-3 rounded-xl border-0 transition-all duration-300 hover:bg-gray-500">
                            Get Started
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}
