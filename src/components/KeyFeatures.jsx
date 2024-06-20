// import { FaCheckCircle } from "react-icons/fa";

const KeyFeatures = () => {
  return (
    <section className="max-container padding-x py-[4rem] flexCenter flex-col">
      {/* <span className="font-poppins border flexCenter gap-2 text-blue-70 border-blue-70 py-2 px-3 text-[0.9rem] rounded-full">
        <FaCheckCircle />
        Key Features of ITSA&apos;s DHMS?
      </span> */}
      <h1 className="text-[2.5rem] text-center font-medium font-poppins">
        Optimize <span className="text-blue-70">device health</span> with
        advanced monitoring and management features.
      </h1>
      <div className="flex items-center flex-col">
        <div>
          <img src="https://img.icons8.com/3d-fluency/94/laptop.png" alt="laptop image" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default KeyFeatures;
