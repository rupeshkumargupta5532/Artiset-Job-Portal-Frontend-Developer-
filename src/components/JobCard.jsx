const BuildingIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const PinIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const JobCard = ({ job }) => {
    const handleApply = () => {
        alert("Applied Successfully!");
    };

    return (
        <div className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
            <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-inner ${job.color || 'bg-purple-500'}`}>
                    {job.shortName}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#6b4cff] transition-colors">{job.title}</h2>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                        <BuildingIcon />
                        <span>{job.company}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5 text-sm text-gray-500 mb-8 mt-2">
                <div className="flex items-center gap-1.5">
                    <PinIcon />
                    <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="font-medium text-gray-400">$</span>
                    <span>{job.salary}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex flex-wrap gap-2">
                    {job.tags && job.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-50 text-gray-600 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>
                <button
                    onClick={handleApply}
                    className="bg-[#6b4cff] hover:bg-[#5a40de] text-white px-7 py-2.5 rounded-2xl font-semibold transition-all shadow-lg shadow-purple-500/25 shrink-0"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default JobCard;