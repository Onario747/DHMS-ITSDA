import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import pageError from "../assets/icons/404.svg";
import Navigation from "../components/Navigation";

const NoPage = () => {
  return (
    <>
      <Navigation />
      <section className="max-container padding-x flexCenter gap-[2rem] flex-col pt-[4rem]">
        <img src={pageError} width="30%" alt="404 error" />
        <div className="flexCenter flex-col gap-2">
          <h1 className="font-poppins text-[3rem] font-bold max-md:text-[2rem] max-sm:text-[1.5rem]">
            404: Not Found
          </h1>
          <p className="font-montserrat font-medium text-[1.2rem] max-md:text-[1rem]">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 text-white bg-blue-70 rounded-full px-4 py-2"
          >
            <span className="font-poppins text-[0.9rem]">
              Back to the homepage
            </span>
            <IoIosArrowRoundForward />
          </Link>
        </div>
      </section>
    </>
  );
};

export default NoPage;
