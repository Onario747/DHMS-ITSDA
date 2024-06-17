import { IoArrowForwardCircle } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="max-container padding-x pt-[5rem] flex items-center justify-center flex-col">
      <h1 className="font-poppins tracking-wide text-[3.8rem] max-md:text-[2rem] max-sm:text-[1.8rem] font-bold text-center text-[#007BFF]">
        <span className="font-bold text-[#007BFF]">Revolutionize</span> Your{" "}
        <span className="font-bold text-[#0056b3]">Device Management</span>{" "}
        Experience.
      </h1>
      <p className="text-center py-2 font-montserrat font-medium max-md:text-[0.9rem] max-sm:text-[0.7rem]">
        Seamlessly Track, Optimize, and Protect All Your Devices <br /> with
        Cutting-Edge Technology.
      </p>
      <button className="primary-blue-button primary-blue-hover font-poppins font-medium flex items-center gap-2 max-sm:text-[0.8rem]">
        Discover More
        <IoArrowForwardCircle className="text-[1.4rem]" />
      </button>
    </section>
  );
};

export default Hero;
