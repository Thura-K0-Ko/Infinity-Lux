import React from "react";
import Container from "../../../components/Container";
import EventParagraph from "./EventParagraph";

const WeddingCard = () => {
  return (
    <>
      <div className="py-[80px] md:py-[90px] xl:py-40">
        <Container>
          <EventParagraph
            subTitle={"Add A New Dimension To Your Events"}
            title={"Wedding Event"}
            para1={
              "Host your events in residential-style venues with daylight filled spaces, access to a show kitchen, Garden Terrace and a ballroom. Enjoy personalized culinary menus, prime location, and cutting-edge technology perfect for board meetings, dinners and conferences."
            }
            para2={
              "A touch of The Elysian Grand is all you need to ensure your next event is outstanding. With an expert team whose knowledge, professionalism and attention to detail are second to none, whichever of our unique and stylish venue option you choose, we make sure it’s unforgettable.  "
            }
          />
       
        </Container>
      </div>
      <div className="bg-customSlate-500 pt-[50px] pb-[90px] md:py-[90px] xl:py-40 ">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-0">
            <div className=" col-span-1 xl:pl-20">
              <h3 className="text-customGray-500 font-heading text-2xl md:text-[32px] xl:text-[40px] font-normal mb-6 md:mb-9">
                Package Include
              </h3>
              <ul className="flex flex-col gap-4 md:gap-6 xl:gap-8">
                <li className="flex items-center gap-4 xl:gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Decoration
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Passport
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Cake
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Ceremony
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Food
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Photography
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Ceremony
                  </span>
                </li>
                <li className="flex items-center gap-5">
                  <img
                    className="size-8"
                    src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg"
                    alt=""
                  />
                  <span className="text-black text-base/8 xl:text-2xl font-medium">
                    Wedding Accomodation
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 flex justify-end ">
              <div className="relative">
                <img
                  className=" h-[261px] md:h-[376px] xl:h-[563px]"
                  src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Package_Image_1.png"
                  alt=""
                />
                <img
                  className=" absolute transform translate-y-[-80%] translate-x-[-20%] h-[138px] md:h-[199px] xl:h-[298px]"
                  src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Package_Image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className=" pt-[50px] pb-[100px] md:py-[90px] xl:py-40">
        <Container>
          <h4 className="text-center text-customPurple-500 text-base xl:text-2xl font-medium mb-4 md:mb-6">
            Make Your Unforgettable Memories
          </h4>
          <h2 className="text-center text-customGray-500 font-heading text-[32px] md:text-[40px] xl:text-5xl font-normal mb-10 xl:mb-[60px]">
            Wedding Gallery
          </h2>
          <div className="w-full overflow-x-scroll hsb whitespace-nowrap md:grid grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="inline-block w-full h[408px] md:h-[446.45px] xl:h-[493px]">
              <img
                className=" object-cover"
                src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_1.png"
                alt=""
              />
            </div>
            <div className="inline-block w-full h[408px] md:h-[446.45px] xl:h-[493px] mx-3">
              <img
                className=" object-cover"
                src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_2.png"
                alt=""
              />
            </div>
            <div className="inline-block w-full h[408px] md:h-[446.45px] xl:h-[493px] mx-3">
              <img
                className=" object-cover"
                src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_3.png"
                alt=""
              />
            </div>
            <div className="inline-block w-full h[408px] md:h-[446.45px] xl:h-[493px] mx-3">
              <img
                className=" object-cover"
                src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_4.png"
                alt=""
              />
            </div>
            <div className="inline-block w-full h[408px] md:h-[446.45px] xl:h-[493px] mx-3">
              <img
                className=" object-cover"
                src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_5.png"
                alt=""
              />
            </div>
            <div className="inline-block w-full h[408px] md:h-[446.45px] xl:h-[493px] mx-3">
              <img
                className=" object-cover"
                src="/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_6.png"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-customPurple-500 py-[20px] md:py-[30px] xl:py-[75px] mb-[100px] xl:mb-[200px]">
        <Container>
          <h3 className="text-gray-50 font-heading text-base/[22px] md:text-2xl xl:text-[32px] xl:text-4xl font-normal tracking-[0.12px] md:tracking-[0.18px] mb-6">
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

export default WeddingCard;
