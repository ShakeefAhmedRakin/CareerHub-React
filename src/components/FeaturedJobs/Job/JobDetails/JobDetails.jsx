import { useLoaderData, useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { MdAttachMoney, MdOutlineSubtitles } from "react-icons/md";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  return (
    <>
      <h1 className="text-center font-main font-extrabold text-5xl mt-12 mb-4">
        Job Details
      </h1>
      <h1 className="text-center font-main font-semibold text-3xl mb-12">
        {job.company_name}
      </h1>
      <div className="font-main flex gap-4 mb-32">
        <div className="flex-1 space-y-6">
          <p className="text-[#757575] font-semibold">
            <span className="text-black font-extrabold">Description: </span>
            {job.job_description}
          </p>
          <p className="text-[#757575] font-semibold">
            <span className="text-black font-extrabold">
              Responsibilities:{" "}
            </span>
            {job.job_responsibility}
          </p>
          <p className="text-black font-extrabold">Educational Requirements:</p>
          <p className="text-[#757575] font-semibold">
            {job.educational_requirements}
          </p>
          <p className="text-black font-extrabold">Experience Requirements:</p>
          <p className="text-[#757575] font-semibold">{job.experiences}</p>
        </div>

        <div className="">
          <div className="bg-secondaryOne p-7 space-y-3 rounded-lg">
            <h4 className="text-lg font-bold">Job Details</h4>
            <hr />
            <div className="flex gap-4 items-center">
              <MdAttachMoney className="text-xl"></MdAttachMoney>
              <p className="text-[#757575] text-lg font-medium">{job.salary}</p>
            </div>
            <div className="flex gap-4 items-center">
              <MdOutlineSubtitles className="text-xl"></MdOutlineSubtitles>
              <p className="text-[#757575] text-lg font-medium">
                {job.job_title}
              </p>
            </div>
            <h4 className="text-lg font-bold">Contact Information</h4>
            <hr />
            <div className="flex gap-4 items-center">
              <AiFillPhone className="text-xl"></AiFillPhone>
              <p className="text-[#757575] text-lg font-medium">
                {job.contact_information.phone}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <AiOutlineMail className="text-xl"></AiOutlineMail>
              <p className="text-[#757575] text-lg font-medium">
                {job.contact_information.email}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <GoLocation className="text-xl"></GoLocation>
              <p className="text-[#757575] text-lg font-medium">
                {job.contact_information.address}
              </p>
            </div>
          </div>
          <button className="btn w-full bg-gradient-to-r from-primaryOne to-primaryTwo text-white font-bold normal-case mt-2">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
