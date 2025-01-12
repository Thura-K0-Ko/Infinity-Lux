import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";

const MeetingCard = () => {
  return (
    <>
      <Container>
        <div className="py-40">
          <h4 className="text-center text-customPurple-500 text-2xl font-medium mb-6">
            Prestige Corporate Roundtable
          </h4>
          <h2 className="text-center text-customGray-500 font-heading text-5xl font-normal mb-[60px]">
            Meeting Event
          </h2>
          <p className="text-gray-500 text-xl font-light tracking-[0.1px] mb-[60px]">
            Host your events in residential-style venues with daylight filled
            spaces, access to a show kitchen, Garden Terrace and a ballroom.
            Enjoy personalized culinary menus, prime location, and cutting-edge
            technology perfect for board meetings, dinners and conferences.
          </p>
          <p className="text-gray-500 text-xl font-light tracking-[0.1px] mb-[60px]">
            A touch of The Elysian Grand is all you need to ensure your next
            event is outstanding. With an expert team whose knowledge,
            professionalism and attention to detail are second to none,
            whichever of our unique and stylish venue option you choose, we make
            sure it’s unforgettable. 
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="p-8">
              <img
                className="w-full mb-5"
                src="/assets/Infinity Lux image Assets/Meeting Event/Ballroom.png"
                alt=""
              />
              <h3 className="text-customGray-500 font-heading text-4xl font-normal tracking-[0.1px] mb-6">
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
                <h3 className="text-customGray-500 text-[32px] font-normal tracking-[0.16px]">
                  $435/Meeting
                </h3>
                <Link className="bg-customPurple-500 text-white text-2xl font-semibold px-10 py-5">
                  RESERVATION
                </Link>
              </div>
            </div>
            <div className="p-8">
              <img
                className="w-full mb-5"
                src="/assets/Infinity Lux image Assets/Meeting Event/Crystal_Ballroom.png"
                alt=""
              />
              <h3 className="text-customGray-500 font-heading text-4xl font-normal tracking-[0.1px] mb-6">
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
                <h3 className="text-customGray-500 text-[32px] font-normal tracking-[0.16px]">
                  $550/Meeting
                </h3>
                <Link className="bg-customPurple-500 text-white text-2xl font-semibold px-10 py-5">
                  RESERVATION
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-40">
          <h4 className="text-center text-customPurple-500 text-2xl font-medium mb-6">
            Refined Learning in Style
          </h4>
          <h2 className="text-center text-customGray-500 font-heading text-5xl font-normal mb-[60px]">
            Meeting Event
          </h2>
          <div className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
            <div className="w-[413px] h-[493px]">
              <img
                className="w-full"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-1.png"
                alt=""
              />
            </div>
            <div className="w-[413px] h-[493px]">
              <img
                className="w-full"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-2.png"
                alt=""
              />
            </div>
            <div className="w-[413px] h-[493px]">
              <img
                className="w-full"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-3.png"
                alt=""
              />
            </div>
            <div className="w-[413px] h-[493px]">
              <img
                className="w-full"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-4.png"
                alt=""
              />
            </div>
            <div className="w-[413px] h-[493px]">
              <img
                className="w-full"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-5.png"
                alt=""
              />
            </div>
            <div className="w-[413px] h-[493px]">
              <img
                className="w-full"
                src="/assets/Infinity Lux image Assets/Meeting Event/gallery-6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-customPurple-500 py-[76px] mb-[194px]">
        <Container>
          <h3 className="text-gray-50 font-heading text-4xl font-normal tracking-[0.18px] mb-6">
            Contact Us
          </h3>
          <p className="text-gray-300 text-xl font-normal tracking-[0.1px]">
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
