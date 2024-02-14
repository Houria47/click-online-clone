import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";

import LanguageButton from "@/components/LanguageButton";

import logo from "@/assets/logo.png";
import NavLinks from "./NavLinks";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header
      className={`z-50 min-h-[var(--nav-h)] py-4 w-full flex items-center  backdrop-blur-md rounded-br-3xl rounded-bl-3xl fixed top-0 duration-300 shadow-lg ${
        scrolled ? "bg-foreground bg-opacity-80" : "bg-white bg-opacity-30"
      }`}
    >
      <nav className="container flex justify-between">
        <Link to="/" className="h-14 w-h-14 block">
          <img
            className="w-full h-full object-cover"
            alt="click online logo"
            src={logo}
          />
        </Link>
        <NavLinks show={showLinks} />
        <div className="flex items-center gap-4 text-white text-xl">
          <LanguageButton />
          <IoIosSearch />
          <button
            className="md:hidden"
            onClick={() => setShowLinks((prev) => !prev)}
            onBlur={() => setTimeout(() => setShowLinks(false), 300)}
          >
            {!showLinks && <TiThMenuOutline />}
            {showLinks && <TiThMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
