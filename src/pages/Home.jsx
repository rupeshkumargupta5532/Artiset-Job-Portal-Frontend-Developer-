import { useNavigate } from "react-router-dom";
import jobsData from "../data/jobs";
import JobCard from "../components/JobCard";

const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const Home = () => {
    const navigate = useNavigate();
    const featuredJobs = jobsData.slice(0, 4);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Hero Section (Match Image 3) */}
            <div className="relative bg-gradient-to-br from-[#19153a] via-[#241c53] to-[#39287c] text-white pt-32 pb-24 px-6 md:px-16 overflow-hidden flex items-center min-h-[90vh]">
                {/* Background glow effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]"></div>
                    <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 max-w-xl">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 w-max text-sm text-purple-200">
                            <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Over 10,000+ jobs available
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9c4ff] to-[#a380ff]">Dream <br/>Job</span> Today
                        </h1>
                        
                        <p className="text-lg text-purple-200/80 leading-relaxed font-light">
                            Discover thousands of career opportunities from top companies. Your next big career move starts right here.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button
                                onClick={() => navigate("/jobs")}
                                className="flex items-center justify-center gap-2 bg-[#4c7cff] hover:bg-[#3b65db] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30"
                            >
                                <SearchIcon />
                                Browse Jobs &rarr;
                            </button>
                            <button className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-all backdrop-blur-sm">
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-10 mt-8 pt-8 border-t border-white/10">
                            <div>
                                <h4 className="text-3xl font-bold">10K+</h4>
                                <p className="text-sm text-purple-200/70 mt-1">Active Jobs</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold">8K+</h4>
                                <p className="text-sm text-purple-200/70 mt-1">Companies</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold">50K+</h4>
                                <p className="text-sm text-purple-200/70 mt-1">Hired</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Floating Cards (Image 3 aesthetics) */}
                    <div className="hidden lg:block relative h-[500px]">
                        {/* Senior Developer Card */}
                        <div className="absolute top-4 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-72 shadow-2xl transform rotate-2 animate-[float_6s_ease-in-out_infinite]">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white leading-tight">Senior Developer</h5>
                                    <p className="text-xs text-purple-200/80 mt-0.5">TechNova Inc.</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold">$160k</span>
                                <span className="bg-white/10 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">Remote</span>
                            </div>
                        </div>

                        {/* UI/UX Designer Card */}
                        <div className="absolute top-48 left-0 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-72 shadow-2xl transform -rotate-3 animate-[float_7s_ease-in-out_infinite_1s]">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
                                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white leading-tight">UI/UX Designer</h5>
                                    <p className="text-xs text-purple-200/80 mt-0.5">PixelCraft Studio</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">$120k</span>
                                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold">Full-time</span>
                            </div>
                        </div>

                        {/* Data Scientist Card */}
                        <div className="absolute bottom-4 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-72 shadow-2xl transform rotate-1 animate-[float_8s_ease-in-out_infinite_2s]">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
                                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-white leading-tight">Data Scientist</h5>
                                    <p className="text-xs text-purple-200/80 mt-0.5">InsightAI</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">$165k</span>
                                <span className="bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full text-xs font-semibold">Boston</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Jobs Section (Match Image 2) */}
            <div className="bg-[#fafafc] py-24 px-6 md:px-16 flex-1">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <span className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">
                                Hot Openings
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
                                Featured <span className="text-[#6b4cff]">Job Listings</span>
                            </h2>
                        </div>
                        <button 
                            onClick={() => navigate("/jobs")}
                            className="text-[#6b4cff] font-semibold hover:text-[#5a40de] transition flex items-center gap-1 mt-4 md:mt-0"
                        >
                            View all jobs &rarr;
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(var(--tw-rotate)); }
                    50% { transform: translateY(-15px) rotate(var(--tw-rotate)); }
                    100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
                }
            `}</style>
        </div>
    );
};

export default Home;