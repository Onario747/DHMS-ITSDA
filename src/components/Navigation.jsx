import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import itsaLogo from "../assets/images/itsalogo.png";
import { useSpring, animated } from "react-spring";

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Resources", href: "/resources" },
];

const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const menuAnimation = useSpring({
    height: isMobileNavOpen ? "auto" : 0,
    opacity: isMobileNavOpen ? 1 : 0,
    transform: isMobileNavOpen ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 300, friction: 50 },
  });

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
          <p className="text-[0.9rem] cursor-pointer primary-blue-button primary-blue-hover">
            Sign-up
          </p>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <p className="text-[0.9rem] cursor-pointer font-montserrat primary-blue-button primary-blue-hover">
            Sign-up
          </p>
          <IoMdMenu onClick={toggleMenu} className="text-[1.7rem]" />
        </div>
      </nav>

      {/* Animated mobile navigation */}
      <animated.div className="md:hidden mt-4 overflow-hidden rounded-md border shadow-md" style={menuAnimation}>
        <div className="p-4 rounded-b-md shadow-xl">
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
          </div>
        </div>
      </animated.div>
    </header>
  );
};

export default Navigation;
