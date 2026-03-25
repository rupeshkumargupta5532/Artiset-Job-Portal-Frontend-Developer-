import { useState } from "react";
import jobsData from "../data/jobs";
import JobCard from "../components/JobCard";

const Jobs = () => {
    const [search, setSearch] = useState("");

    const filteredJobs = jobsData.filter(
        (job) =>
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Job Listings</h1>

            {/* Search */}
            <input
                type="text"
                placeholder="Search jobs..."
                className="w-full p-3 border rounded-lg mb-6"
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Job Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Jobs;