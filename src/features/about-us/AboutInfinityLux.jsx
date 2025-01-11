import React from "react";

const AboutInfinityLux = () => {
  return (
    <>
      <div className=" inline-flex  gap-[108px] py-[160px] px-[116px]">
        <div className=" flex flex-col w-[542px] items-start gap-11">
          <h1 className=" font-sans text-2xl text-customPurple font-[500]">
            About Infinity Lux
          </h1>
          <p className="text-[#141414] font-serif text-5xl">
            {" "}
            Experiece The Ultimate Luxurious Getaway
          </p>
          <p className="text-[#6B7280] text-xl font-sans font-[500]">
            Standing in the heart of the city, Hotel Name invites locals and
            travellers alike to enjoy style and design in a soulful setting.
            Take a moment for yourself with stunning city skyline views, or soak
            up the social buzz of the city in one of our atmospheric bars.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="/src/assets/Hotel Profile website/phone-call.svg"
              alt=""
              className="w-[56px] h-[56px]"
            />
            <p className="flex flex-col">
              <span className="font-serif text-2xl font-[400]">
                Reservation
              </span>
              <span className="  text-customPurple text-2xl font-[400]">
                +959756895143{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="w-[630px]">
          <div className=" flex gap-6 h-full">
            <div className="mt-auto">
              <img
                src="/src/assets/Hotel Profile website/image-8.png"
                alt=""
                className="w-[305px] items-end"
              />
            </div>
            <div>
              <img
                src="/src/assets/Hotel Profile website/image-7.png"
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
                src="/src/assets/Hotel Profile website/image-29.png"
                alt=""
                className="w-[305px] items-end"
              />
            </div>
            <div>
              <img
                src="/src/assets/Hotel Profile website/image-28.png"
                alt=""
                className="w-[305px]"
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-[542px] items-start gap-11">
          <h1 className=" font-sans text-2xl text-customPurple font-[500]">
            About Infinity Lux
          </h1>
          <p className="text-[#141414] font-serif text-5xl"> Our Story</p>
          <p className="text-[#6B7280] text-xl font-sans font-[300]">
            The Infinity Lux, a beacon of luxury and refinement, stands as a
            testament to timeless opulence and modern innovation. Established in
            2013, this landmark property was envisioned by renowned architect
            Michael Hall, whose goal was to create a sanctuary that combined
            classical beauty with contemporary comfort.
          </p>
          <p className="text-[#6B7280] text-xl font-sans font-[300]">
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

export default AboutInfinityLux;
