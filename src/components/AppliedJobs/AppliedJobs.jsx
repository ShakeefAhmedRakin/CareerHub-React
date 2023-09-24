import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (storedJobIds.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobsApplied);
    } else {
      console.log("NONE");
    }
  }, []);

  return <div>hshaha</div>;
};

export default AppliedJobs;
