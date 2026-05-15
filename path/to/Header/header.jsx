import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "./logo";
import Links from "./links";
import useScroll from "../../hooks/useScroll";

export default function Header({ isDarkMode, onToggleDarkMode }) {
  const [isDown, setIsDown] = useState(false);
  const isVisible = useScroll(isDown);

  return (
    <header
      className={` ${isVisible ? "-translate-x-1/2 translate-y-0 " : "-translate-x-1/2 -translate-y-full opacity-0 "}
                  fixed top-0 left-1/2 w-full max-w-screen-xl flex items-center justify-between
                  text-nowrap bg-white px-6 py-5 z-50
                  md:py-8
                  transition ease-out duration-400`}
    >
      <Logo />
      {/*======nav======*/}
      <nav className="group flex items-center">
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsDown(!isDown)}
        >
          {isDown ? (
            <FaXmark className="w-7 h-7" />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </div>
        {/*======links======*/}
        <ul
          className={`
          absolute top-full left-0 z-[5] w-full
          bg-white overflow-hidden flex flex-col items-center px-6
          divide-y divide-stone-300
          md:flex-row md:static md:divide-none gap-10
          transition-all duration-300 ease-in-out 
          ${
            isDown
              ? "py-6 h-screen"
              : "pointer-events-none md:pointer-events-auto max-md:h-0 max-md:py-0"
          }`}
        >
          <Links status={() => setIsDown(!isDown)} />
        </ul>
        {/*======links======*/}
      </nav>
      {/*======nav======*/}

      {/* Dark Mode Toggle */}
      <button
        className={`fixed top-4 right-4 z-50 p-2 rounded-full bg-stone-900 text-white hover:bg-black transition-all duration-300 ${isDarkMode ? "bg-black" : ""}`}
        onClick={onToggleDarkMode}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M19.78 16.22a1 1 0 0 1 0 1.41l-3.5 3.5a1 1 0 0 1-1.41-1.41L16 18.59l-3.5-3.5a1 1 0 0 1-1.41 1.41z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M19.78 16.22a1 1 0 0 1 0 1.41l-3.5 3.5a1 1 0 0 1-1.41-1.41L16 18.59l-3.5-3.5a1 1 0 0 1-1.41 1.41z" />
          </svg>
        )}
      </button>
    </header>
  );
}
