import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <div className="relative h-[530px]">
      <div className={`${room.id % 2 === 0 ? "absolute right-0" : "relative"}`}>
        <img className="h-[530px] w-auto" src={room.img} alt={room.category} />
      </div>
      <div
        className={`absolute top-9 ${
          room.id % 2 !== 0 && "right-0"
        } flex flex-col gap-6 w-[650px] text-gray-500 bg-white p-8`}
      >
        <p className="text-customPurple text-2xl font-medium">{room.price}</p>
        <h3 className="text-title font-heading text-5xl font-normal">
          {room.category}
        </h3>
        <p className="text-xl font-medium">{room.description}</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex gap-5">
            <img
              className="size-6"
              src="/public/assets/Hotel Profile website/users-2.svg"
              alt="users-2"
            />{" "}
            <span className="text-xl font-light tracking-[0.1px]">
              {room.services.people}
            </span>
          </div>
          <div className="flex gap-5">
            <img
              className="size-6"
              src="/public/assets/Hotel Profile website/bed-double.svg"
              alt="bed-double"
            />{" "}
            <span className="text-xl font-light tracking-[0.1px]">
              {room.services.bed}
            </span>
          </div>
          <div className="flex gap-5">
            <img
              className="size-6"
              src="/public/assets/Hotel Profile website/utensils.svg"
              alt="utensils"
            />{" "}
            <span className="text-xl font-light tracking-[0.1px]">
              {room.services.food}
            </span>
          </div>
          <div className="flex gap-5">
            <img
              className="size-6"
              src="/public/assets/Hotel Profile website/wifi.svg"
              alt="wifi"
            />{" "}
            <span className="text-xl font-light tracking-[0.1px]">
              {room.services.wifi}
            </span>
          </div>
          <div className="flex gap-5">
            <img
              className="size-6"
              src="/public/assets/Hotel Profile website/waves.svg"
              alt="waves"
            />{" "}
            <span className="text-xl font-light tracking-[0.1px]">
              {room.services.swimming}
            </span>
          </div>
          <div className="flex gap-5">
            <img
              className="size-6"
              src="/public/assets/Hotel Profile website/axis-3d.svg"
              alt="axis-3d"
            />{" "}
            <span className="text-xl font-light tracking-[0.1px]">
              {room.services.area}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/rooms/room-detail/${room.id}`}
            className="text-2xl font-semibold flex gap-3"
          >
            Room Details <HiArrowRight className="size-8" />
          </Link>
          <Link
            to={"/booking"}
            className="bg-customPurple-500 text-2xl font-semibold text-white px-10 py-5"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
