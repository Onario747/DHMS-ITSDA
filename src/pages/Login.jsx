import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import login from "../assets/icons/login.svg";
import itsaLogo from "../assets/images/itsalogo.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(data);
  };
  const [accountType, setAccountType] = useState("");

  const handleSelectChange = (event) => {
    setAccountType(event.target.value);
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
        <div className="flex flex-col items-center w-[60%] py-[6rem] bg-[#e8f1f7] rounded-r-3xl h-screen">
          <Link to="/">
            <img src={itsaLogo} className="" alt="Logo Image" />
          </Link>
          <h1 className="font-poppins font-medium text-[2rem] py-4 text-blue-70">
            Login into your Account
          </h1>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full gap-3">
              <label className="font-medium font-poppins text-blue-70">
                Email Address
              </label>
              <input
                {...register("email")}
                type="text"
                className="h-[30px] w-[25rem] rounded-md outline-none pl-3"
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
                className="h-[30px] w-[25rem] rounded-md outline-none pl-3"
                placeholder="******"
              />
            </div>
            <div className="w-full">
              <select
                name="accountType"
                id="accountType"
                className="w-full font-poppins py-[5px] px-[12px] rounded-md border-2 border-blue-70"
                value={accountType}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  Account type
                </option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 font-poppins text-[0.8rem]">
                <input type="checkbox" name="" id="" />
                Remember Me
              </div>
              <a href="/" className="text-blue-70 font-poppins text-[0.8rem]">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-70 text-white font-poppins rounded-md w-full py-2 mt-2"
            >
              Login
            </button>
          </form>
          <span className="pt-4 font-montserrat text-[0.9rem]">
            Dont&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-70">
              Create New
            </Link>
          </span>
        </div>
        <div className="px-[4rem] flex items-center justify-center">
          <img src={login} width="100%" alt="sign up svg" />
        </div>
      </section>

      {/* Mobile view */}
      <div className="max-container padding-x pt-6 md:hidden">
        <Link to="/" className="flex items-center gap-2 text-blue-70 pb-3">
          <span className="font-poppins text-[0.9rem]">Back Home</span>
          <IoIosArrowRoundForward />
        </Link>
        <section className="max-container padding-x flex items-center flex-col pt-[1rem]">
          <div className="flex items-center">
            <Link to="/">
              <img src={itsaLogo} className="" alt="Logo Image" />
            </Link>
          </div>
          <div className="pt-[2rem] flex items-center flex-col">
            <img src={login} width="50%" alt="sign up svg" />
            <h1 className="font-poppins font-medium text-[1.7rem] text-center py-4 text-blue-70">
              Login into your Account
            </h1>
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
                  className="h-[30px] rounded-md outline-none pl-3 border border-gray-500"
                  placeholder="john@mail.com"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="font-medium font-poppins text-blue-70">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="text"
                  className="h-[30px] rounded-md outline-none pl-3 border border-gray-500"
                  placeholder="******"
                />
              </div>
              <div className="w-full">
                <select
                  name="accountType"
                  id="accountType"
                  className="w-full font-poppins py-[5px] px-[12px] rounded-md border border-blue-70"
                  value={accountType}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>
                    Account type
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
              <div className="flex gap-2 justify-between w-full">
                <div className="flex gap-2 font-poppins text-[0.8rem]">
                  <input type="checkbox" name="" id="" />
                  Remember Me
                </div>
                <a href="/" className="text-blue-70 font-poppins text-[0.8rem]">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-blue-70 text-white font-poppins rounded-md w-full py-2 mt-2"
              >
                Login
              </button>
            </form>
            <span className="pt-4 font-montserrat text-[0.9rem]">
              Dont&apos;t have an account?{" "}
              <Link to="/signup" className="text-blue-70">
                Create New
              </Link>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
