import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="relative">
      <div className="relative h-[530px]">
        <div
          className={`${event.id % 2 === 0 ? "absolute right-0" : "relative"}`}
        >
          <img className="h-[530px] w-auto" src={event.img} alt={event.title} />
        </div>

        <div
          className={`absolute top-14 ${
            event.id % 2 !== 0 && "right-0"
          } w-[630px] bg-white p-8`}
        >
          <div className="flex flex-col gap-6 ">
            <h3 className="text-customPurple-500 text-2xl font-medium">
              {event.display}
            </h3>
            <div className="flex flex-col gap-9 items-start">
              <h2 className="text-customGray-500 font-heading text-5xl font-normal">
                {event.title}
              </h2>
              <p className="text-gray-500 text-xl font-light tracking-tight">
                {event.description}
              </p>
              <Link
                to={event.path}
                className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
