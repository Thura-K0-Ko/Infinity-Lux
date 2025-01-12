import React from "react";
import { Link, useParams } from "react-router-dom";
import useRoomStore from "../stores/useRoomStore";

const BookingForm = () => {
  const { rooms } = useRoomStore();
  const params = useParams();

  const roomDetail = rooms.filter((room) => room.id == params.id)[0];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkIn = tomorrow.toISOString().split("T")[0];

  const afterTomorrow = new Date();
  afterTomorrow.setDate(afterTomorrow.getDate() + 2);
  const checkOut = afterTomorrow.toISOString().split("T")[0];

  return (
    <form className="flex flex-col gap-8 p-5">
      <div className="flex flex-col gap-3">
        <label
          htmlFor="checkIn"
          className="text-customGray-500 font-heading text-2xl font-normal"
        >
          Check In Date *
        </label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          className="text-customGray-500 text-xl font-normal border border-customPurple-500 p-4"
          defaultValue={checkIn}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="checkOut"
          className="text-customGray-500 font-heading text-2xl font-normal"
        >
          Check Out Date *
        </label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          className="text-customGray-500 text-xl font-normal border border-customPurple-500 p-4"
          defaultValue={checkOut}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="room"
          className="text-customGray-500 font-heading text-2xl font-normal"
        >
          Room *
        </label>
        <input
          type="number"
          id="room"
          name="room"
          className="text-customGray-500 text-xl font-normal border border-customPurple-500 p-4"
          defaultValue="1"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="guest"
          className="text-customGray-500 font-heading text-2xl font-normal"
        >
          Guests *
        </label>
        <input
          type="number"
          id="guest"
          name="guest"
          className="text-customGray-500 text-xl font-normal border border-customPurple-500 p-4"
          defaultValue="1"
        />
      </div>
      <Link
        to={`/booking/${roomDetail.id}`}
        className="w-full bg-customPurple-500 text-white text-center text-2xl font-semibold px-10 py-5"
      >
        Book This Room
      </Link>
    </form>
  );
};

export default BookingForm;
