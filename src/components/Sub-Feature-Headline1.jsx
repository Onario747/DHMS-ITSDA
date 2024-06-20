import { FaCheckCircle } from "react-icons/fa";

const SubFeatureHeadline1 = () => {
  return (
    <section className="max-container padding-x py-[3rem] flexCenter flex-col">
      <span className="font-poppins border flexCenter gap-2 text-blue-70 border-blue-70 py-2 px-3 text-[0.9rem] rounded-full">
        <FaCheckCircle />
        Why Choose ITSA&apos;s DHMS?
      </span>
      <div className="pt-[2rem] text-center flex flex-col gap-2">
        <h1 className="text-[2rem] max-sm:text-[1.8rem] font-poppins font-medium">
          Optimize, Secure, and Monitor.
        </h1>
        <p className="font-montserrat text-[0.9rem] max-sm:text-[0.87rem]">
          Maximize Device Performance, Ensure Robust Security, <br className="max-md:hidden" /> and Maintain
          Continuous Oversight
        </p>
      </div>
    </section>
  );
};

export default SubFeatureHeadline1;
