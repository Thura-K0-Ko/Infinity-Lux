import React from "react";
import { HiChevronRight, HiMiniHome } from "react-icons/hi2";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoForward = () => {
    navigate(1);
  };

  return (
    <div className=" my-5 flex items-center gap-10 py-3 bg-customPurple-500 px-5 rounded-lg">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center gap-">
            <Link
              to={"/"}
              className="inline-flex items-center gap-2 text-xl font-medium text-customPurple-50 hover:text-blue-600 dark:text-customPurple-400 dark:hover:text-white"
            >
              <HiMiniHome />
              Home
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center gap-">
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 text-xl font-medium text-customPurple-50 hover:text-blue-600 dark:text-customPurple-400 dark:hover:text-white"
                >
                  <HiChevronRight className=" text-stone-600" />

                  {link.name}
                </Link>
              </li>
            ))}

          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight className=" text-stone-600" />
              <span className="ms-1 text-xl font-medium text-customPurple-200 md:ms-2 dark:text-customPurple-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="flex  items-center">
        <button
          onClick={handleGoBack}
          type="button"
          className=" size-6 flex items-center justify-center text-xl font-medium text-customPurple-200 bg-transparent border border-gray-400 rounded-s-lg hover:scale-105 hover:text-blue-700 focus:z-10 focus:ring-2  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <LuChevronLeft />
        </button>
        <button
          onClick={handleGoForward}
          type="button"
          className=" size-6 flex items-center justify-center text-xl font-medium text-customPurple-200 bg-transparent border border-gray-400 rounded-e-lg hover:scale-105 hover:text-blue-700 focus:z-10 focus:ring-2  dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          <LuChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
