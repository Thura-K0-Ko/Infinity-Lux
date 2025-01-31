import React, { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import useRoomStore from "../stores/useRoomStore";

const SimilarRoomCard = () => {
  const { rooms } = useRoomStore();
  const params = useParams();
  const similarRoom = rooms.filter((room) => room.id != params.id).slice(0, 3);
     const carouselRef = useRef();
     const nextSlide = () => {
        if (carouselRef.current) {
           const container = carouselRef.current;
           const scrollAmount = container.clientWidth + 16; // Includes gap between slides
           container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
     };
     const prevSlide = () => {
        if (carouselRef.current) {
           const container = carouselRef.current;
           const scrollAmount = container.clientWidth + 16; // Includes gap between slides
           container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
     };

  return (
    <div className="my-[60px]">
      <h6 className="text-customPurple-500 text-center text-base md:text-2xl font-medium mb-4 md:mb-6">
        Comfort & Relax
      </h6>
      <h3 className="text-customGray-500 text-center text-[32px] md:text-5xl font-normal font-heading mb-[40px] md:mb-[60px]">
        Similar Rooms
      </h3>
      <div ref={carouselRef} className="overflow-x-scroll hsb whitespace-nowrap">
      <div className="">
        {similarRoom.map((room, index) => (
          <div key={index} className="inline-block w-full md:w-1/2 xl:w-1/3 h-[512px] p-5">
          <div
            style={{ backgroundImage: `url('${room.img}')` }}
            className="h-full bg-center bg-no-repeat"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-end">
                <Link
                  to={`/booking/${room.id}`}
                  className="origin-[109px_37px] -rotate-90 text-white text-2xl font-semibold border border-white px-10 py-5 m-5 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-0.5"
                >
                  BOOK
                </Link>
              </div>
              <div className="flex flex-col gap-3 text-white font-normal p-8">
                <h5 className="text-2xl">{room.price}</h5>
                <h4 className="text-4xl font-heading">{room.category}</h4>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>
      <div className=" flex xl:hidden items-center justify-center gap-2 md:gap-3 mt-4 md:mt-12  ">
        <button onClick={prevSlide} className=" cursor-pointer bg-customPurple-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
        <button className="bg-white p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
        <button onClick={nextSlide} className=" cursor-pointer bg-customPurple-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
      </div>
    </div>
  );
};

export default SimilarRoomCard;
