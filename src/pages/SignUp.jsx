import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import zxcvbn from "zxcvbn";
import signUpImg from "../assets/icons/signup.svg";
import itsaLogo from "../assets/images/itsalogo.png";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <section className="max-container flexCenter gap-2">
      <div className="flex flex-col items-center w-[70%] py-[6rem] bg-[#e8f1f7] h-svh">
        <img src={itsaLogo} className="" alt="Logo Image" />
        <h1 className="font-poppins font-medium text-[2rem] py-4 text-blue-70">
          Create an Account
        </h1>
        <form action="" className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="font-medium font-poppins text-blue-70">
              Company Name
            </label>
            <input
              type="text"
              className="h-[35px] w-[25rem] rounded-md outline-none pl-3"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-medium font-poppins text-blue-70">
              Email Address
            </label>
            <input
              type="text"
              className="w-[25rem] h-[35px] rounded-md font-montserrat outline-none pl-3"
              placeholder="Enter Company Email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium font-poppins text-blue-70">
              Contact Number
            </label>
            <input
              type="text"
              className="w-[25rem] h-[35px] rounded-md font-montserrat outline-none pl-3"
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium font-poppins text-blue-70">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-[25rem] h-[35px] rounded-md font-montserrat outline-none pl-3 pr-10"
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
          <a href="/" className="text-blue-70">
            Sign in
          </a>
        </span>
      </div>
      <div className="px-[4rem] flex items-center justify-center">
        <img src={signUpImg} width="100%" alt="sign up svg" />
      </div>
    </section>
  );
};

export default SignUp;
