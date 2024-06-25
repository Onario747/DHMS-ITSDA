import { useState } from "react";
import { Toaster, toast } from "sonner";

import { CgSpinner } from "react-icons/cg";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn";
import loginApiClient from "../../axios/axiosLogin";
import signUpImg from "../assets/icons/signup.svg";
import itsaLogo from "../assets/images/itsalogo.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [score, setScore] = useState(0);
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const result = zxcvbn(newPassword);
    setScore(result.score);
  };

  const getStrengthLabel = (score) => {
    switch (score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email: email,
      password: password,
      name: companyName,
      phone: contactNumber,
    };
    try {
      const response = await loginApiClient.post("/signup", formData);
      navigate("/organization/dashboard");
      toast(
        <div className="text-green-600 px-2 py-3 font-poppins font-medium text-[1.1rem] flex items-center gap-2 justify-center">
          <FaCheckCircle />
          <span>Sign-up successful</span>
        </div>
      );
      console.log("success", response.data);
    } catch (error) {
      toast(
        <div className="text-red-600 px-2 py-3 font-poppins font-medium text-[1.1rem] flex items-center gap-2 justify-center">
          <FaCheckCircle />
          <span>Login un-successful</span>
        </div>
      );
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Desktop View */}
      <section className="max-container flexCenter gap-2 max-md:hidden">
        <Toaster position="top-center" />
        <div className="relative flex flex-col items-center w-[70%] pt-[6rem] px-[3rem] bg-[#e8f1f7] rounded-r-3xl h-svh">
          <Link
            to="/"
            className="absolute left-[2rem] top-[3rem] flex items-center gap-2 text-blue-70"
          >
            <span className="font-poppins text-[0.9rem]">Back Home</span>
            <IoIosArrowRoundForward />
          </Link>
          <img src={itsaLogo} className="" alt="Logo Image" />
          <h1 className="font-poppins font-medium text-[2rem] py-4 text-blue-70">
            Create an Account
          </h1>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium font-poppins text-blue-70">
                Company Name
              </label>
              <input
                type="text"
                className="h-[35px] rounded-md outline-none pl-3"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium font-poppins text-blue-70">
                Email Address
              </label>
              <input
                type="email"
                className="h-[35px] rounded-md font-montserrat outline-none pl-3"
                placeholder="Enter Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium font-poppins text-blue-70">
                Contact Number
              </label>
              <input
                type="tel"
                className="h-[35px] rounded-md font-montserrat outline-none pl-3"
                placeholder="Enter Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium font-poppins text-blue-70">
                Password
              </label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-[25rem] h-[35px] rounded-md font-montserrat outline-none pl-3"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Enter a secure password"
                />
                {password && (
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                )}
              </div>
            </div>
            {password && <p>Password Strength: {getStrengthLabel(score)}</p>}
            <button
              className="flex items-center justify-center gap-2 rounded-md w-full py-2 mt-2 bg-blue-70 text-white disabled:bg-slate-400 disabled:cursor-not-allowed transition-all"
              disabled={isLoading}
            >
              {isLoading && (
                <CgSpinner className="animate-spin text-[1.37rem]" />
              )}
              <span className={`font-poppins `}>Create Account</span>
            </button>
          </form>
          <span className="pt-4 font-montserrat text-[0.9rem]">
            Have an account already?{" "}
            <Link to="/login" className="text-blue-70">
              Sign in
            </Link>
          </span>
        </div>
        <div className="px-[4rem] flex items-center justify-center">
          <img src={signUpImg} width="100%" alt="sign up svg" />
        </div>
      </section>

      {/* Mobile View */}
      <div className="max-container padding-x pt-6 md:hidden">
        <Link to="/" className="flex items-center gap-2 text-blue-70 pb-2">
          <span className="font-poppins text-[0.9rem]">Back Home</span>
          <IoIosArrowRoundForward />
        </Link>
        <section className="md:hidden max-container padding-x flex items-center flex-col pt-[1rem]">
          <img src={itsaLogo} className="" alt="Logo Image" />
          <div className="pt-[2rem] flex items-center flex-col">
            <img src={signUpImg} width="50%" alt="sign up svg" />
            <h1 className="font-poppins font-medium text-[1.7rem] py-4 text-blue-70">
              Create an Account
            </h1>
            <form
              onSubmit={handleSignUp}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex flex-col gap-2 w-full">
                <label className="font-medium font-poppins text-blue-70">
                  Company Name
                </label>
                <input
                  type="text"
                  className="h-[35px] rounded-md outline-none pl-3 border border-gray-500"
                  placeholder="Enter Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-medium font-poppins text-blue-70">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-[35px] rounded-md font-montserrat outline-none pl-3 border border-gray-500"
                  placeholder="Enter Company Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="font-medium font-poppins text-blue-70">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="h-[35px] rounded-md font-montserrat outline-none pl-3 border border-gray-500"
                  placeholder="Enter Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium font-poppins text-blue-70">
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="h-[35px] rounded-md font-montserrat outline-none pl-3 pr-10 border border-gray-500"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    placeholder="Enter a secure password"
                  />
                  {password && (
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  )}
                </div>
              </div>
              {password && <p>Password Strength: {getStrengthLabel(score)}</p>}
              <button className="bg-blue-70 text-white font-poppins rounded-md w-full py-2 mt-2">
                Create Account
              </button>
            </form>
            <span className="pt-4 font-montserrat text-[0.9rem]">
              Have an account already?{" "}
              <Link to="/login" className="text-blue-70">
                Sign in
              </Link>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUp;
