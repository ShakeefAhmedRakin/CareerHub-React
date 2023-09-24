import { GoLocation } from "react-icons/go";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  return (
    <>
      <div className="font-main p-7 border-[1px] rounded-lg space-y-4">
        <img src={job.logo} className="h-[40px]" />
        <div>
          <h4 className="text-lg md:text-xl font-extrabold text-[#474747]">
            {job.job_title}
          </h4>
          <p className="text-base md:text-lg font-semibold text-[#757575]">
            {job.company_name}
          </p>
        </div>
        <div className="flex gap-2">
          <div className="border-[1px] px-[19px] py-[4px] font-extrabold border-primaryTwo text-primaryTwo rounded-sm">
            {job.remote_or_onsite}
          </div>
          <div className="border-[1px] px-[19px] py-[4px] font-extrabold border-primaryTwo text-primaryTwo rounded-sm">
            {job.job_type}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <GoLocation className="text-lg"></GoLocation>
            <p className="text-[#757575] text-sm md:text-lg font-semibold">
              {job.location}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <MdAttachMoney className="text-xl"></MdAttachMoney>
            <p className="text-[#757575] text-sm  md:text-lg font-semibold">
              {job.salary}
            </p>
          </div>
        </div>
        <div>
          <Link to={`/job/${job.id}`}>
            <button className="btn bg-gradient-to-r from-primaryOne to-primaryTwo text-lg font-bold text-white normal-case hover:scale-[1.02]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
