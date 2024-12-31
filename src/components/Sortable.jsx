import React from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const Sortable = ({ children, handleSort, sort_by, align }) => {
  return (
    <div
      className={`flex items-center gap-1 ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <span className={`flex flex-col items-center`}>
        <button
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "asc",
          })}
          className="  hover:bg-blue-400"
        >
          <LuChevronUp />
        </button>
        <button
          onClick={handleSort.bind(null, {
            sort_by: sort_by,
            sort_direction: "desc",
          })}
          className=" border-none hover:bg-blue-400"
        >
          <LuChevronDown />
        </button>
      </span>
      <span>{children}</span>
    </div>
  );
};

export default Sortable;
