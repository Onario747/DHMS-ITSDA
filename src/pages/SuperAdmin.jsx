import { useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import superAdmin from "../assets/icons/superadmin.svg";
import itsaLogo from "../assets/images/itsalogo.png";

const SuperAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(data);
  };
  return (
    <>
      <section className="max-container flexCenter gap-2 max-md:hidden">
        <Link
          to="/"
          className="absolute left-[2rem] top-[3rem] flex items-center gap-2 text-blue-70"
        >
          <span className="font-poppins text-[0.9rem]">Back Home</span>
          <IoIosArrowRoundForward />
        </Link>
        <div className="flex flex-col items-center w-[60%] py-[6rem] bg-[#e8f1f7] rounded-r-3xl h-screen padding-x">
          <div className="flex items-center">
            <Link to="/">
              <img src={itsaLogo} className="" alt="Logo Image" />
            </Link>
          </div>
          <div className="py-4 text-center">
            <h1 className="font-poppins font-medium text-[2rem] text-blue-70">
              Welcome to the Super Admin Sign-in Portal
            </h1>
            <p className="font-montserrat text-[0.9rem]">
              Enter your registered email and Staff ID to access your account.
              If you need help with your login details, contact your
              company&apos;s IT administrator for assistance.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col w-full gap-3">
              <label className="font-medium font-poppins text-blue-70">
                Email Address
              </label>
              <input
                {...register("email")}
                type="text"
                className="h-[35px] w-[25rem] rounded-md outline-none pl-3"
                placeholder="john@mail.com"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-medium font-poppins text-blue-70">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="h-[35px] w-[25rem] rounded-md outline-none pl-3"
                placeholder="******"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-70 text-white font-poppins rounded-md w-full py-2 mt-2"
            >
              Login
            </button>
          </form>
        </div>
        <div className="px-[4rem] flex items-center justify-center">
          <img src={superAdmin} width="100%" alt="sign up svg" />
        </div>
      </section>

      {/* Mobile View */}
      <div className="max-container padding-x pt-6 md:hidden">
        <Link to="/" className="flex items-center gap-2 text-blue-70 pb-3">
          <span className="font-poppins text-[0.9rem]">Back Home</span>
          <IoIosArrowRoundForward />
        </Link>
        <section className="max-container padding-x flex items-center flex-col pt-[1rem">
          <div className="flex items-center">
            <Link to="/">
              <img src={itsaLogo} className="" alt="Logo Image" />
            </Link>
          </div>
          <div className="pt-[2rem] flex items-center flex-col">
            <img src={superAdmin} width="50%" alt="" />
            <h1 className="font-poppins font-medium text-[1.7rem] text-center py-4 text-blue-70">
              Welcome to the Super Admin Sign-in Portal
            </h1>
            <p className="font-montserrat text-[0.8rem]">
              Enter your registered email and Staff ID to access your account.
              If you need help with your login details, contact your
              company&apos;s IT administrator for assistance.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-4 w-full"
          >
            <div className="flex flex-col w-full gap-3">
              <label className="font-medium font-poppins text-blue-70">
                Email Address
              </label>
              <input
                {...register("email")}
                type="text"
                className="h-[35px] w-full rounded-md outline-none pl-3 border border-gray-500"
                placeholder="john@mail.com"
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-medium font-poppins text-blue-70">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                className="h-[35px] w-full rounded-md outline-none pl-3 border border-gray-500"
                placeholder="******"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-70 text-white font-poppins rounded-md w-full py-2 mt-2"
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default SuperAdmin;
