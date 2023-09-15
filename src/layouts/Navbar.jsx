import { createElement, useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { content } from "../Content";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { nav } = content;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);

  const handleChangeTheme = () => {
    const newTheme = !isDarkTheme ? "dark" : "light";
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    isDarkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  return (
    <div className="w-full flex justify-center">
      <nav className="h-[60px] p-4 px-8 w-full bg-slate-100 dark:bg-slate-800 dark:text-white shadow-md flex justify-between items-center fixed z-[999] ">
        <button
          className="cursor-pointer  rounded-lg p-2 "
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={34} />
        </button>
        <button onClick={handleChangeTheme}>
          {isDarkTheme ? (
            <i className="bx bx-sun text-[35px] "></i>
          ) : (
            <i className="bx bx-moon text-[35px]  "></i>
          )}
        </button>
      </nav>

      <div
        className={`fixed  z-[999] flex items-center justify-center gap-3 sm:gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary dark:text-darkTheme duration-300  ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={item.link}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-[20px] sm:text-[30px] p-1  sm:p-2 rounded-full sm:cursor-pointer  
       ${i === active && "bg-dark_primary dark:bg-darkTheme text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
