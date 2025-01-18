import React from "react";
import { Link } from "react-router-dom";
import AboutInfinityLux from "./AboutInfinityLux";
import Container from "../../../components/Container";

const AboutInfinityLuxAndReservation = () => {
  return (
    <>
      <AboutInfinityLux
        title1={"Experience The Ultimate"}
        title2={"Luxurious Getaway"}
        content={
          "Standing in the heart of the city, Infinity Lux invites locals and travelers alike to enjoy style and design in a soulful setting. Take a moment for yourself with stunning city skyline views, or soak up the social buzz of the city in one of our atmospheric bars."
        }
        firstImg={"/assets/Hotel Profile website/image-31.png"}
        secondImg={"/assets/Hotel Profile website/image-30.png"}
        reservationText={"Reservation"}
        className={"py-3"}
      />

      <Container>
        <div className=" inline-flex  gap-[108px] py-[141px]">
          <div className="w-[630px] py-7">
            <div className=" flex gap-6 h-full">
              <div className="mt-auto">
                <img
                  src="/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Story_image.png"
                  alt=""
                  className="w-[305px] items-end"
                />
              </div>
              <div>
                <img
                  src="/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Story_image1.png"
                  alt=""
                  className="w-[305px]"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col w-[542px] items-start gap-8">
            <h1 className=" text-2xl text-customPurple-500">
              About Infinity Lux
            </h1>
            <div className="flex flex-col gap-11">
              <p className="text-[#141414] font-heading text-5xl"> Our Story</p>
              <p className="text-[#6B7280] text-xl font-[300]">
                The Infinity Lux, a beacon of luxury and refinement, stands as a
                testament to timeless opulence and modern innovation.
                Established in 2013, this landmark property was envisioned by
                renowned architect Michael Hall, whose goal was to create a
                sanctuary that combined classical beauty with contemporary
                comfort.
              </p>
              <p className="text-[#6B7280] text-xl font-[300]">
                Over the decades, The Infinity Lux expanded its offerings,
                incorporating state-of-the-art amenities while preserving its
                heritage charm. Its signature grand ballroom became a favored
                destination for elite events and grand celebrations. The hotel
                has hosted dignitaries, celebrities, and world leaders, becoming
                synonymous with excellence and exclusivity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutInfinityLuxAndReservation;
