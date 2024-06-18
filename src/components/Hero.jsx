import { IoArrowForwardCircle } from "react-icons/io5";
import { animated, useSpring } from "react-spring";
import dhmsDashboard from "../assets/images/Dashboard-dhms-graphic.jpg";

const Hero = () => {
  // Animation for the headline
  const fadeInHeadline = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 200,
  });

  // Animation for the tagline
  const fadeInTagline = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 400,
  });

  // Animation for the button
  const fadeInButton = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
    delay: 600,
  });

  return (
    <section className="max-container relative padding-x pt-[4rem] max-md:pt-[4rem] flex items-center justify-center flex-col">
      <animated.h1
        style={fadeInHeadline}
        className="font-poppins tracking-wide max-md:tracking-normal text-[3.8rem] max-md:text-[2rem] max-sm:text-[1.5rem] font-bold text-center text-[#007BFF]"
      >
        <span className="font-bold text-[#007BFF]">Revolutionize</span> Your{" "}
        <span className="font-bold text-[#0056b3]">Device Management</span>{" "}
        Experience.
      </animated.h1>
      <animated.p
        style={fadeInTagline}
        className="text-center py-2 font-montserrat font-medium text-[0.9rem] max-sm:text-[0.7rem]"
      >
        Seamlessly Track, Optimize, and Protect All Your Devices{" "}
        <br className="max-sm:hidden" /> with Cutting-Edge Technology.
      </animated.p>
      <div className="flex items-center gap-3">
        <animated.button
          style={fadeInButton}
          className="primary-blue-button primary-blue-hover font-poppins font-medium flex items-center gap-2 max-sm:text-[0.8rem]"
        >
          Get Started
          <IoArrowForwardCircle className="text-[1.4rem]" />
        </animated.button>
        <animated.button
          style={fadeInButton}
          className="font-poppins font-medium border border-blue-70 text-blue-70 hover:bg-blue-70 hover:text-white transition-colors p-2 rounded-md flex items-center gap-2 max-sm:text-[0.8rem]"
        >
          Discover More
          <IoArrowForwardCircle className="text-[1.4rem]" />
        </animated.button>
      </div>
      <img
        src={dhmsDashboard}
        className="w-[56rem] -m-[3.9rem] max-md:m-0"
        alt="Dashboard Image"
      />
    </section>
  );
};

export default Hero;
