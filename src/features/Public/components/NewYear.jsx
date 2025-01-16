import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const NewYear = () => {
  return (
    <div className="md:py-[90px] xl:py-40">
      <div className="relative md:h-[423.62px] xl:h-[768px] w-full overflow-hidden ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage:
              "url('/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/New_Year_bg_image.png')",
          }}
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative h-full bg-black/30 flex flex-col items-center justify-center  ">
          <Container>
            <div className=" grid grid-cols-2 md:gap-20 xl:gap-40 items-center">
              <div className=" col-span-1">
                <div className=" flex flex-col md:gap-[13.24px] xl:gap-6 items-start justify-center">
                  {/* Special Offer Tag */}
                  <p className=" text-customPurple-500 md:text-base xl:text-2xl font-medium">
                    Special Offer
                  </p>

                  {/* Title */}
                  <div className=" flex flex-col md:gap-[19.86px] xl:gap-9 items-start">
                    <h2 className="text-white md:text-2xl xl:text-5xl font-heading font-normal">
                      New Year Stay
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-base xl:text-xl font-medium">
                      Celebrate the New Year in Style! Enjoy exclusive New Year
                      discounts at Infinity Lux. Book your stay before 31 Dec
                      2024 and receive up to 35% off on luxurious
                      accommodations, plus complimentary perks like breakfast,
                      late check-out, and festive surprises. Start the year with
                      comfort and savings!
                    </p>

                    {/* CTA Button */}
                    <Link
                      to={"rooms"}
                      className=" bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                    >
                      View Rooms
                    </Link>
                  </div>
                </div>

                {/* Discount Badge */}
              </div>
              <div className="col-span-1">
                <div className=" bg-customPurple-500 rounded-full md:size-[192px] xl:size-[340px] flex flex-col items-center justify-center md:gap-[11.3px] xl:gap-5">
                  <span className="text-white md:text-[11.03px] xl:text-xl font-medium">
                    Up To
                  </span>
                  <span className="text-white md:text-[52.95px] xl:text-8xl font-medium">
                    35%
                  </span>
                  <span className="text-white md:text-[11.03px] xl:text-xl font-medium">
                    On Selected Rooms
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NewYear;
