import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localStorage";
import Job from "../FeaturedJobs/Job/Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedjobs, setAppliedJobs] = useState([]);

  const [jobsApplied, setJobsApplied] = useState(false);

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (storedJobIds.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setJobsApplied(true);
    } else {
      setJobsApplied(false);
    }
  }, []);

  return (
    <>
      <h1 className="text-center font-main font-extrabold text-5xl mt-12 mb-12">
        Applied Jobs
      </h1>

      {jobsApplied && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-52">
          {appliedjobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      )}

      {jobsApplied || (
        <div className="text-center w-96 mx-auto text-2xl font-bold p-12 rounded-lg h-[550px]">
          Apply to jobs to see them here
        </div>
      )}
    </>
  );
};

export default AppliedJobs;
