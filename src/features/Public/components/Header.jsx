import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import useNavBarStore from "../../../stores/useNavBarStore";
import { useState } from "react";

const Header = ({ className }) => {
  const { navBars, setActive } = useNavBarStore();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header
      className={`${className} absolute py-3 xl:py-5 top-0 left-0 w-full  z-50`}
    >
      <Container>
        <nav className="">
          <div className="flex flex-wrap justify-between items-center max-w-screen">
            <Link to="/" className=" hover:opacity-80 xl:px-[54px]">
              <img
                src="/assets/Hotel Profile website/Lux 2.svg"
                className=" h-6 md:h-8 xl:h-[69px] "
                alt="Lux 2 logo"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <>
                <Link
                  to={"/login"}
                  className=" hidden lg:inline-block  text-sm lg:text-lg  xl:text-2xl text-white dark:text-white hover:bg-customPurple-500 focus:ring-4 focus:ring-gray-300 font-medium  px-4 lg:px-6 xl:px-10 py-2 lg:py-3 xl:py-5  bg-customPurple-500 dark:hover:bg-customPurple-500 focus:outline-none dark:focus:ring-gray-800"
                >
                  RESERVATION
                </Link>
              </>

              <button
                onClick={handleOpen}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-600 rounded-lg lg:hidden hover:text-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6 md:w-8 md:h-8  text-customGray-100 hover:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6 md:w-8 md:h-8 text-customGray-200 hover:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                open ? " flex w-full" : "hidden"
              } justify-end items-center   xl:flex xl:w-auto xl:order-1`}
              id="mobile-menu-2"
            >
              <div
                className={` bg-customPurple-600 lg:bg-transparent w-28 md:w-40 text-center lg:w-auto rounded-t-lg lg:rounded-none  flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0`}
              >
                {navBars.map(({ id, name }) => (
                  <Link
                    key={id}
                    to={`${
                      name === "Home"
                        ? "/"
                        : `/${name.toLowerCase().replace(" ", "-")}`
                    }`}
                    className={` text-xs lg:text-lg xl:text-2xl block py-1 md:py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:text-white hover:underline hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-gray-400  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </Container>
    
    
    </header>
  );
};

export default Header;
