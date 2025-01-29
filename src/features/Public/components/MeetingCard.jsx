import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import EventParagraph from "./EventParagraph";

const MeetingCard = () => {
  return (
    <>
      <Container>
        <div className=" pt-24 xl:pt-40 xl:pb-20">
          <EventParagraph
            subTitle={"Prestige Corporate Roundtable"}
            title={"Meeting Event"}
            para1={
              " Host your events in residential-style venues with daylight filled spaces, access to a show kitchen, Garden Terrace and a ballroom. Enjoy personalized culinary menus, prime location, and cutting-edge technology perfect for board meetings, dinners and conferences."
            }
            para2={
              " A touch of The Elysian Grand is all you need to ensure your next event is outstanding. With an expert team whose knowledge, professionalism and attention to detail are second to none, whichever of our unique and stylish venue option you choose, we make sure it’s unforgettable "
            }
          />

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-[90px] xl:gap-5 xl:mt-10 py-[90px] xl:py-0">
            <div className="md:p-8 md:border md:border-blue-200 rounded">
              <img
                className=" h-[164px] md:h-[335px] w-full object-cover mb-5"
                src="/assets/Infinity Lux image Assets/Meeting Event/Ballroom.png"
                alt=""
              />
              <h3 className="text-customGray-500 font-heading text-2xl md:text-[40px] xl:text-4xl font-normal tracking-[0.1px] mb-6">
                Ballroom
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Location : Ground Floor
                </p>
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Size : 392 sqm
                </p>
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Occupancy : 200-300{" "}
                </p>
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Water : 400{" "}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-customGray-500 text-xl md:text-2xl xl:text-[32px] font-normal tracking-[0.16px]">
                  $435/Meeting
                </h3>
                <Link className="bg-customPurple-500 text-base xl:text-2xl font-semibold text-white px-5 py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800">
                  RESERVATION
                </Link>
              </div>
            </div>
            <div className="md:p-8 md:border md:border-blue-200 rounded">
              <img
                className=" h-[164px] md:h-[335px] w-full object-cover mb-5"
                src="/assets/Infinity Lux image Assets/Meeting Event/Crystal_Ballroom.png"
                alt=""
              />
              <h3 className="text-customGray-500 font-heading text-2xl md:text-[40px] xl:text-4xl font-normal tracking-[0.1px] mb-6">
                Crystal Ballroom
              </h3>
              <div className="flex flex-col gap-3 mb-6">
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Location : Second Floor
                </p>
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Size : 456 sqm
                </p>
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Occupancy : 350-420{" "}
                </p>
                <p className="text-gray-500 text-xl font-light tracking-[0.1px]">
                  Water : 480{" "}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-customGray-500 text-xl md:text-2xl xl:text-[32px] font-normal tracking-[0.16px]">
                  $550/Meeting
                </h3>
                <Link className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white px-5 py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800">
                  RESERVATION
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-0 md:pt-[90px] pb-[90px] xl:py-40">
          <h4 className="text-center text-customPurple-500 text-base md:text-2xl font-medium mb-4 md:mb-6">
            Refined Learning in Style
          </h4>
          <h2 className="text-center text-customGray-500 font-heading text-[32px] md:text-5xl font-normal mb-10 xl:mb-[60px]">
            Meeting Event
          </h2>
          <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <div>
              <img
                className="h-[408px] md:h-[446.45px] xl:h-[493px] object-cover"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-1.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[408px] md:h-[446.45px] xl:h-[493px] object-cover"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-2.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[408px] md:h-[446.45px] xl:h-[493px] object-cover"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-3.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[408px] md:h-[446.45px] xl:h-[493px] object-cover"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-4.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[408px] md:h-[446.45px] xl:h-[493px] object-cover"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-5.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[408px] md:h-[446.45px] xl:h-[493px] object-cover"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-customPurple-500 py-[20px] md:py-[30px] xl:py-[75px] mb-[100px] xl:mb-[200px]">
        <Container>
          <h3 className="text-gray-50 font-heading text-2xl xl:text-[32px] xl:text-4xl font-normal tracking-[0.18px] mb-6">
            Contact Us
          </h3>
          <p className="text-gray-300 text-base xl:text-xl font-normal tracking-[0.1px]">
            For inquiries and bookings, please reach out to us at +959756895143
            or eventteam3421@gmail.com. Together, we’ll craft the wedding of
            your dreams!
          </p>
        </Container>
      </div>
    </>
  );
};

export default MeetingCard;
