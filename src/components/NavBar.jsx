import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

import { Link } from "react-router";

// Navbar of the project.
export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className=" h-2/12 flex justify-between px-[5%] py-8  z-10 shadow-md  dark:bg-primary-black-navigation bg-primary-white-smoke text-white">
      <Link to="/">
        <h1 className="dark:text-white text-black font-semibold text-lg md:text-2xl ">
          Flashcard App, maybe
        </h1>
      </Link>
      <button
        className="dark:text-white text-black font-semibold cursor-pointer flex items-center gap-2"
        onClick={() => setDarkMode(!darkMode)}
      >
        {!darkMode ? (
          <div className="flex items-center gap-2">
            <IoMoonOutline />
            Dark Mode
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MdOutlineLightMode /> Light Mode
          </div>
        )}
      </button>
    </nav>
  );
}
