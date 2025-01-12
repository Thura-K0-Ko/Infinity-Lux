import React from "react";

const ReservationCard = () => {
  return (
    <div className="shadow-xl mb-[60px]">
      <h3 className="font-heading text-[32px] font-normal text-white bg-customPurple-500 p-5">
        Your Reservation
      </h3>
      <div className="relative w-full">
        <img
          src="/assets/Hotel Profile website/image-6.png"
          alt="Deluxe Room"
        />
        <p className="absolute top-0 text-white font-heading text-xl font-normal p-5">
          Deluxe Room
        </p>
      </div>
      <div className="flex flex-col gap-8 p-8">
        <p className="flex items-center gap-2">
          <img
            className="size-6"
            src="/assets/Hotel Profile website/calendar-days.svg"
            alt="calendar"
          />{" "}
          <span className="text-customGray-500 text-xl font-normal">
            Check-in : 28 Dec 2024, Saturday
          </span>
        </p>
        <p className="flex items-center gap-2">
          <img
            className="size-6"
            src="/assets/Hotel Profile website/calendar-days.svg"
            alt="calendar"
          />{" "}
          <span className="text-customGray-500 text-xl font-normal">
            Check-out : 30 Dec 2024, Monday
          </span>
        </p>
        <p className="flex items-center gap-2">
          <img
            className="size-6"
            src="/assets/Hotel Profile website/bed-double.svg"
            alt="bed-double"
          />{" "}
          <span className="text-customGray-500 text-xl font-normal">
            Room : 1 x Deluxe Room
          </span>
        </p>
        <p className="flex items-center gap-2">
          <img
            className="size-6"
            src="/assets/Hotel Profile website/users.svg"
            alt="bed-double"
          />{" "}
          <span className="text-customGray-500 text-xl font-normal">
            Guests : 2 People
          </span>
        </p>
        <p className="flex items-center gap-2">
          <img
            className="size-6"
            src="/assets/Hotel Profile website/calendar-check.svg"
            alt="bed-double"
          />{" "}
          <span className="text-customGray-500 text-xl font-normal">
            Nights : 2 Nights
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReservationCard;
