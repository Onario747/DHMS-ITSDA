import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import itsaLogo from "../assets/images/itsalogo.png";

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
];

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };
  return (
    <header className="max-container w-full padding-x pt-4">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={itsaLogo} className="w-[9rem]" alt="logo" />
        </a>
        <div className={`flex gap-8 max-md:hidden`}>
          {navLinks.map((item, index) => (
            <a
              href={item.href}
              key={index}
              className="font-montserrat text-[0.9rem] hover:text-blue-70 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-8 font-montserrat max-md:hidden">
          <p className="text-[0.9rem] cursor-pointer hover:text-blue-70">
            Login
          </p>
          <p className="text-[0.9rem] cursor-pointer bg-blue-70 border border-blue-70 text-white p-2 rounded-md primary-blue-hover">
            Sign-up
          </p>
        </div>
        <IoMdMenu onClick={toggleMenu} className="md:hidden text-[1.7rem]" />
      </nav>
      {isMobileNavOpen && (
        <div className="pt-2">
          <div className="flex gap-1 flex-col">
            {navLinks.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="font-montserrat text-[0.9rem] flex hover:text-blue-70 transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex gap-2 pt-2 font-montserrat">
            <p className="text-[0.9rem] cursor-pointer hover:text-blue-70 border w-fit border-blue-70 p-2 rounded-md">
              Login
            </p>
            <p className="text-[0.9rem] cursor-pointer w-fit bg-blue-70 border border-blue-70 text-white p-2 rounded-md primary-blue-hover">
              Sign-up
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
