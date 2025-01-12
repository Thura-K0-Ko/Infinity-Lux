import React from "react";
import { Link } from "react-router-dom";

const AboutInfinityLuxAndReservation = () => {
  return (
    <>
      <div className=" inline-flex  gap-[108px] py-[160px] px-[116px]">
        <div className=" flex flex-col w-[542px] items-start gap-11">
          <h1 className=" font-body text-2xl text-customPurple-500 font-[500]">
            About Infinity Lux
          </h1>
          <p className="text-[#141414] font-heading text-5xl">
            {" "}
            Experiece The Ultimate Luxurious Getaway
          </p>
          <p className="text-[#6B7280] text-xl font-body font-[500]">
            Standing in the heart of the city, Hotel Name invites locals and
            travellers alike to enjoy style and design in a soulful setting.
            Take a moment for yourself with stunning city skyline views, or soak
            up the social buzz of the city in one of our atmospheric bars.
          </p>
          <Link to={"reservation"} className="flex items-center gap-6">
            <img
              src="/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/phone-call.svg"
              alt=""
              className="w-[56px] h-[56px]"
            />
            <p className="flex flex-col">
              <span className="font-heading text-2xl font-[400]">
                Reservation
              </span>
              <span className=" text-customPurple-500 text-2xl font-[400]">
                +959756895143{" "}
              </span>
            </p>
          </Link>
        </div>
        <div className="w-[630px]">
          <div className=" flex gap-6 h-full">
            <div className="mt-auto">
              <img
                src="/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About us_1.png"
                alt=""
                className="w-[305px] items-end"
              />
            </div>
            <div>
              <img
                src="/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About us_2.png"
                alt=""
                className="w-[305px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" inline-flex  gap-[108px] py-[141px] px-[116px]">
        <div className="w-[630px]">
          <div className=" flex gap-6 h-full">
            <div className="mt-auto">
              <img
                src="/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Story_image.png"
                alt=""
                className="w-[305px] items-end"
              />
            </div>
            <div>
              <img
                src="/public/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Story_image1.png"
                alt=""
                className="w-[305px]"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-[542px] items-start gap-11">
          <h1 className=" font-body text-2xl text-customPurple-500 font-[500]">
            About Infinity Lux
          </h1>
          <p className="text-[#141414] font-heading text-5xl"> Our Story</p>
          <p className="text-[#6B7280] text-xl font-body font-[300]">
            The Infinity Lux, a beacon of luxury and refinement, stands as a
            testament to timeless opulence and modern innovation. Established in
            2013, this landmark property was envisioned by renowned architect
            Michael Hall, whose goal was to create a sanctuary that combined
            classical beauty with contemporary comfort.
          </p>
          <p className="text-[#6B7280] text-xl font-body font-[300]">
            Over the decades, The Infinity Lux expanded its offerings,
            incorporating state-of-the-art amenities while preserving its
            heritage charm. Its signature grand ballroom became a favored
            destination for elite events and grand celebrations. The hotel has
            hosted dignitaries, celebrities, and world leaders, becoming
            synonymous with excellence and exclusivity.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutInfinityLuxAndReservation;
