import React, { useRef } from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const LeadersOfHotel = () => {
  const leaders = [
    {
      id: 1,
      name: "Milly Alcock",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image1.png",
      position: "Chief Executive Officer",
    },
    {
      id: 2,
      name: "Frank Grillo",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image2.png",

      position: "CEO, Co Founder",
    },
    {
      id: 3,
      name: "Sara Sampaio",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image3.png",
      position: "Chief Operating Officer",
    },
    {
      id: 4,
      name: "Milly Alcock",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image1.png",
      position: "Chief Executive Officer",
    },
    {
      id: 5,
      name: "Frank Grillo",
      image:
        "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/Leader_Image2.png",
      position: "CEO, Co Founder",
    },
  ];

  const carouselRef = useRef();
  const nextSlide = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth + 16; // Includes gap between slides
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      // console.log(carouselRef.current);
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
    <section>
      <div className="bg-[#F2F0ED]">
        <Container>
          <div className=" md:placeholder-cyan-900 py-[50px] md:py-[90px] xl:py-40 overflow-hidden">
            <div className=" flex flex-col gap-[40px] xl:gap-[60px]">
              <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
                <p className=" text-customPurple-500 text-base xl:text-2xl">
                  Meet The Team
                </p>
                <p className="font-heading text-customGray-500 text-[32px] md:text-[40px] xl:text-5xl">
                  Our Leaders
                </p>
              </div>
              <div
                ref={carouselRef}
                className="flex items-center gap-5 w-full hsb overflow-x-scroll"
              >
                {leaders.map(({ id, name, image, position }) => (
                  <div key={id} className="flex flex-col bg-white">
                    {/* ----------for xl screen------------ */}
                    <img
                      src={image}
                      alt=""
                      className="min-w-[342px] md:min-w-[374px] xl:min-w-[413px] "
                    />
                    <div className="flex flex-col items-center gap-2.5 md:gap-3 py-6 md:py-8">
                      <h3 className="text-customGray-500 text-center font-heading text-[26px] md:text-[32px]">
                        {name}
                      </h3>
                      <p className="text-gray-500 text-xl md:text-2xl  text-center">
                        {position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* -----carousel button--------- */}
            <div className=" flex xl:hidden items-center justify-center gap-2 md:gap-3 mt-5 md:mt-12  ">
              <button
                onClick={prevSlide}
                className=" cursor-pointer bg-gray-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
              ></button>
              <button className=" bg-gray-500   p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
              <button
                onClick={nextSlide}
                className=" cursor-pointer bg-gray-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
              ></button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default LeadersOfHotel;
