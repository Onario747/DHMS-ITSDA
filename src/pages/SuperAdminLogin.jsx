import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import loginApiClient from "../../axios/axiosLogin";
import superAdmin from "../assets/icons/superadmin.svg";
import itsaLogo from "../assets/images/itsalogo.png";
import { useAdmin } from "../context/AdminContext"; // Import useAdmin

const SuperAdminLogin = () => {
  const navigate = useNavigate();
  const { fetchAdminProfile } = useAdmin(); // Destructure fetchAdminProfile
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email: email,
      password: password,
      role: "super-admin",
    };
    try {
      const response = await loginApiClient.post("/login", formData);
      await fetchAdminProfile();
      console.log(response.data); // Fetch and set the admin profile after login
      navigate("/super-admin/dashboard");
    } catch (error) {
      console.error("Error", error);
      setIsLoading(false);
    }
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
          <Link to="/">
            <img src={itsaLogo} className="" alt="Logo Image" />
          </Link>
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
            className="flex flex-col items-center gap-4"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col w-full gap-3">
              <label className="font-medium font-poppins text-blue-70">
                Email Address
              </label>
              <input
                type="email"
                className="h-[30px] w-[25rem] rounded-md outline-none pl-3"
                placeholder="john@mail.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label className="font-medium font-poppins text-blue-70">
                Password
              </label>
              <input
                type="password"
                className="h-[30px] w-[25rem] rounded-md outline-none pl-3"
                placeholder="******"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
              className="flex items-center justify-center gap-2 rounded-md w-full py-2 mt-2 bg-blue-70 text-white disabled:bg-slate-400 disabled:cursor-not-allowed transition-all"
              disabled={isLoading}
            >
              {isLoading && (
                <CgSpinner className="animate-spin text-[1.37rem]" />
              )}
              <span className={`font-poppins `}>Login</span>
            </button>
          </form>
        </div>
        <div className="px-[4rem] flex items-center justify-center">
          <img src={superAdmin} width="100%" alt="sign up svg" />
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
            <img src={superAdmin} width="50%" alt="sign up svg" />
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
              onSubmit={handleLogin}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex flex-col w-full gap-3">
                <label className="font-medium font-poppins text-blue-70">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-[30px] rounded-md outline-none pl-3 border border-gray-500"
                  placeholder="john@mail.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="font-medium font-poppins text-blue-70">
                  Password
                </label>
                <input
                  type="password"
                  className="h-[30px] rounded-md outline-none pl-3 border border-gray-500"
                  placeholder="******"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
          </div>
        </section>
      </div>
    </>
  );
};

export default SuperAdminLogin;
