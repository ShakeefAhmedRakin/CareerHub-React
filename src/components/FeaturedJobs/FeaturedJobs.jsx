import { useEffect, useState } from "react";
import Job from "./Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl font-bold mb-4">Featured Jobs</h2>
      <p className="text-center font-medium text-[#757575]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={`flex justify-center mb-[120px] ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => {
            setDataLength(jobs.length);
          }}
          className="btn btn-lg bg-gradient-to-r from-primaryOne to-primaryTwo text-lg font-bold text-white normal-case hover:scale-[1.02]"
        >
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default FeaturedJobs;
