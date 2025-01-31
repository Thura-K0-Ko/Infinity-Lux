import React from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiEllipsisHorizontal,
} from "react-icons/hi2";

const Pagination = () => {
  return (
    <div className=" w-full flex justify-between items-center mt-10 md:mt-20 font-heading  md:w-[600px] xl:w-[700px] md:mx-auto">
      <button className="flex items-center gap-2 text-gray-500 text-base font-light">
        <HiChevronDoubleLeft size={14} />
        <span className="text-gray-500 text-base font-light hidden md:block">
          {" "}
          Previous
        </span>
      </button>
      <div className=" flex items-center gap-5">
        <p className="text-white text-base font-light bg-customPurple-500 px-4 py-2 rounded-lg">
          1
        </p>
        <p className="text-gray-500 text-base font-light">2</p>
        <p className="text-gray-500 text-base font-light">3</p>
        <p className="text-gray-500 text-base font-light">
          <HiEllipsisHorizontal size={20} />
        </p>

        <p className="text-gray-500 text-base font-light">10</p>
      </div>
      <button className="flex items-center gap-2 text-gray-500 text-base font-light">
        <span className="text-gray-500 text-base font-light hidden md:block">
          {" "}
          Next
        </span>

        <HiChevronDoubleRight size={14} />
      </button>
    </div>
  );
};

export default Pagination;
