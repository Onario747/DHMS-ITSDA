import login from "../assets/icons/login.svg";
import itsaLogo from "../assets/images/itsalogo.png";

const Login = () => {
  return (
    <section className="max-container flexCenter gap-2">
      <div className="flex flex-col items-center w-[60%] py-[6rem] bg-[#e8f1f7] h-svh">
        <img src={itsaLogo} className="" alt="Logo Image" />
        <h1 className="font-poppins font-medium text-[2rem] py-4 text-blue-70">
          Login into your Account
        </h1>
        <form className="flex flex-col items-center gap-4">
          <div className="flex flex-col w-full gap-3">
            <label className="font-medium font-poppins text-blue-70">
              Email Address
            </label>
            <input
              type="text"
              className="h-[30px] w-[25rem] rounded-md outline-none pl-3"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-medium font-poppins text-blue-70">
              Password
            </label>
            <input
              type="text"
              className="h-[30px] w-[25rem] rounded-md outline-none pl-3"
              placeholder="******"
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
          <button className="bg-blue-70 text-white font-poppins rounded-md w-full py-2 mt-2">
            Login
          </button>
        </form>
        <span className="pt-4 font-montserrat text-[0.9rem]">
          Dont&apos;t have an account?{" "}
          <a href="/" className="text-blue-70">
            Create New
          </a>
        </span>
      </div>
      <div className="px-[4rem] flex items-center justify-center">
        <img src={login} width="100%" alt="sign up svg" />
      </div>
    </section>
  );
};

export default Login;
