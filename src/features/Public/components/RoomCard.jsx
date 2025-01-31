import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="relative md:h-[530px]">
      <div className={`${room.id % 2 === 0 ? "xl:absolute xl:right-0" : "xl:relative"}`}>
        <img className="md:h-[530px] w-auto" src={room.img} alt={room.category} />
      </div>
      <div
        className={`xl:absolute xl:top-[43px] ${
          room.id % 2 !== 0 && "xl:right-0"
        } flex flex-col gap-6 w-full xl:w-[650px] text-gray-500 bg-white md:p-8`}
      >
        <p className="text-customPurple-500 text-xl md:text-2xl font-medium mt-6">
          {room.price}
        </p>
        <h3 className="text-customGray-500 font-heading text-[32px] md:text-5xl font-normal">
          {room.category}
        </h3>
        <p className="text-base md:text-xl/[22px] font-medium">{room.description}</p>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          <div className="flex gap-3 md:gap-5">
            <img
              className="size-3 md:size-6"
              src="/assets/Hotel Profile website/users-2.svg"
              alt="users-2"
            />{" "}
            <span className="text-xs md:text-xl font-light tracking-[0.06px] md:tracking-[0.1px]">
              {room.services.people}
            </span>
          </div>
          <div className="flex gap-3 md:gap-5">
            <img
              className="size-3 md:size-6"
              src="/assets/Hotel Profile website/bed-double.svg"
              alt="bed-double"
            />{" "}
            <span className="text-xs md:text-xl font-light tracking-[0.06px] md:tracking-[0.1px]">
              {room.services.bed}
            </span>
          </div>
          <div className="flex gap-3 md:gap-5">
            <img
              className="size-3 md:size-6"
              src="/assets/Hotel Profile website/utensils.svg"
              alt="utensils"
            />{" "}
            <span className="text-xs md:text-xl font-light tracking-[0.06px] md:tracking-[0.1px]">
              {room.services.food}
            </span>
          </div>
          <div className="flex gap-3 md:gap-5">
            <img
              className="size-3 md:size-6"
              src="/assets/Hotel Profile website/wifi.svg"
              alt="wifi"
            />{" "}
            <span className="text-xs md:text-xl font-light tracking-[0.06px] md:tracking-[0.1px]">
              {room.services.wifi}
            </span>
          </div>
          <div className="flex gap-3 md:gap-5">
            <img
              className="size-3 md:size-6"
              src="/assets/Hotel Profile website/waves.svg"
              alt="waves"
            />{" "}
            <span className="text-xs md:text-xl font-light tracking-[0.06px] md:tracking-[0.1px]">
              {room.services.swimming}
            </span>
          </div>
          <div className="flex gap-3 md:gap-5">
            <img
              className="size-3 md:size-6"
              src="/assets/Hotel Profile website/axis-3d.svg"
              alt="axis-3d"
            />{" "}
            <span className="text-xs md:text-xl font-light tracking-[0.06px] md:tracking-[0.1px]">
              {room.services.area}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/rooms/room-detail/${room.id}`}
            className="text-base md:text-2xl font-semibold  to-gray-500 flex items-center gap-3 transition-all duration-300 hover:shadow-sm transform hover:-translate-y-0.5"
          >
            Room Details <HiArrowRight className="size-4 md:size-8" />
          </Link>
          <Link
            to={`/booking/${room.id}`}
            className="bg-customPurple-500 text-base xl:text-2xl font-semibold text-white px-5 py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
