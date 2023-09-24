import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localStorage";
import Job from "../FeaturedJobs/Job/Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedjobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [jobsApplied, setJobsApplied] = useState(false);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedjobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedjobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onSiteJobs = appliedjobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (storedJobIds.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
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
        <div>
          <div className="flex justify-center">
            <div className="dropdown t">
              <label tabIndex="0" className="btn m-1">
                Filter
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li onClick={() => handleJobsFilter("all")}>
                  <a>All</a>
                </li>
                <li onClick={() => handleJobsFilter("Remote")}>
                  <a>Remote</a>
                </li>
                <li onClick={() => handleJobsFilter("Onsite")}>
                  <a>Onsite</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-52">
            {displayJobs.map((job) => (
              <Job key={job.id} job={job}></Job>
            ))}
          </div>
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
