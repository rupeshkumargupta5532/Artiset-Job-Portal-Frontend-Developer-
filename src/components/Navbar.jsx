import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BriefcaseIcon = () => (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <nav className={`w-full px-6 md:px-12 py-5 flex justify-between items-center z-50 transition-all ${isHome ? 'absolute top-0 left-0 bg-transparent text-white' : 'bg-white shadow-sm text-gray-800'}`}>
            <div className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-[#6b4cff] to-[#4c7cff] p-2 rounded-xl shadow-lg shadow-indigo-500/30">
                    <BriefcaseIcon />
                </div>
                <h1 className="text-2xl font-bold tracking-tight">
                    <span className={isHome ? "text-white" : "text-slate-800"}>Job</span>
                    <span className="text-[#8c74ff]">Portal</span>
                </h1>
            </div>

            <div className="hidden md:flex gap-8 items-center font-medium">
                <Link to="/" className="hover:text-purple-400 transition">Home</Link>
                <Link to="/jobs" className="hover:text-purple-400 transition">Jobs</Link>
                <a href="#" className="hover:text-purple-400 transition">Contact</a>
                <button className={`px-6 py-2.5 rounded-full font-semibold transition ${isHome ? 'bg-gradient-to-r from-[#6b4cff] to-[#4c7cff] text-white shadow-lg shadow-purple-500/40 hover:opacity-90' : 'bg-[#6b4cff] text-white hover:bg-[#5a40de]'}`}>
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setOpen(!open)} className="md:hidden opacity-80 hover:opacity-100 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Dropdown */}
            {open && (
                <div className="absolute top-[76px] left-0 w-full bg-[#1e144a] text-white flex flex-col items-center gap-6 py-8 md:hidden shadow-xl border-t border-white/10">
                    <Link to="/" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-purple-400">Home</Link>
                    <Link to="/jobs" onClick={() => setOpen(false)} className="text-lg font-medium hover:text-purple-400">Jobs</Link>
                    <a href="#" className="text-lg font-medium hover:text-purple-400">Contact</a>
                    <button className="bg-gradient-to-r from-[#6b4cff] to-[#4c7cff] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-purple-500/40 mt-2">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;