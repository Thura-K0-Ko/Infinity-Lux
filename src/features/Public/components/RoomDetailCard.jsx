import React from "react";
import useRoomStore from "../stores/useRoomStore";
import { Link, useParams } from "react-router-dom";
import useRoomFeatureStore from "../stores/useRoomFeatureStore";

const RoomDetailCard = () => {
  const { rooms } = useRoomStore();
  const params = useParams();
  const { features } = useRoomFeatureStore();

  const roomDetail = rooms.filter((room) => room.id == params.id)[0];

  return (
    <div className="col-span-2 flex flex-col gap-10 md:gap-[60px] my-[90px]">
      <div className="grid md:grid-cols-2 gap-3">
        <div className="row-span-2">
          <img
            src={roomDetail.detailImgs[0]}
            alt="room photo 1"
            className="w-full"
          />
        </div>
        <div className="row-span-1">
          <img
            src={roomDetail.detailImgs[1]}
            alt="room photo 2"
            className="w-full"
          />
        </div>
        <div className="row-span-1 flex">
          <img
            src={roomDetail.detailImgs[2]}
            alt="room photo 3"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4">
          <h2 className="text-customGray-500 font-heading text-[32px] md:text-[40px] font-normal">{roomDetail.category}</h2>
          <h3 className="text-customPurple-500 md:font-heading md:text-customGray-500 text-xl md:text-[32px] font-medium md:font-normal">{roomDetail.price}</h3>
        </div>
        {roomDetail.detailContents.map((content, index) => (
          <p
            key={index}
            className="text-gray-500 text-base/[22px] md:text-xl/8 font-medium tracking-[0.1px]"
          >
            {content}
          </p>
        ))}
      </div>
      <div>
        <h2 className="text-customGray-500 font-heading text-[32px] md:text-[40px] font-normal mb-6 md:mb-8">
          Room Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-6">
          {features.map((ele, index) => (
            <div key={index} className="flex items-center gap-x-3 gap-y-6 border p-4 md:p-5">
              <img src={ele.svg} className="size-[26px] md:size-8" />
              <span className="text-customGray-500 text-center text-base md:text-xl font-light tracking-[0.08px] md:tracking-[0.1px]">
                {ele.content}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-x-3 gap-y-6 border p-4 md:p-5">
            <img src="/assets/Hotel Profile website/axis-3d-detail.svg" className="size-[26px] md:size-8" />
            <span className="text-customGray-500 text-center text-base md:text-xl font-light tracking-[0.08px] md:tracking-[0.1px]">
              {roomDetail.services.area}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-customGray-500 font-heading text-[32px] md:text-[40px] font-normal mb-6 md:mb-8">
          Children
        </h2>
        <p className="text-gray-500 text-base/[22px] md:text-xl/8 font-medium">
          Children of all ages are welcome at our hotel. Complimentary stays are
          available for children 0-5 years using existing bedding. For added
          comfort, extra beds or cribs can be provided upon request, subject to
          availability and additional charges. Please inform us in advance to
          ensure the perfect setup for your family.
        </p>
      </div>
      <div>
        <Link
          to={`/booking/${roomDetail.id}`}
          className=" bg-customPurple-500 text-white text-center font-semibold text-base xl:text-2xl px-5 py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
        >
          Book This Room
        </Link>
      </div>
    </div>
  );
};

export default RoomDetailCard;
