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
        <div className=" pb-[90px] flex flex-col-reverse xl:grid xl:grid-cols-2 gap-10   xl:gap-5 xl:py-[141px]">
          {/* <div className=" col-span-1 py-7 flex xl:justify-end gap-5 md:h-[580px] xl:h-auto">
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
                className="w-[305px] mb-auto"
              />
            </div>
          </div> */}
          <div className=" col-span-1 xl:py-7 flex xl:justify-end gap-5 md:h-[580px] xl:h-auto">
            <div className="  mt-auto">
              <img
                // src={firstImg}
                src="/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Story_image.png"
                alt="Luxury hotel interior"
                className="md:h-[490.6px] xl:h-[402px]  object-cover shadow-lg"
              />
            </div>
            <div className="  mb-auto">
              <img
                // src={secondImg}
                src="/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Story_image1.png"
                alt="Rooftop terrace view"
                className="md:h-[490.6px] xl:h-[402px]  object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="col-span-1 xl:flex xl:justify-end">
            <div className=" flex flex-col xl:w-[542px] gap-8 ">
              <p className="text-customPurple-500 md:text-base xl:text-2xl font-medium ">
                About Infinity Lux
              </p>
              <div className="flex flex-col gap-11">
                <p className="font-heading text-customGray-500 md:text-[40px] xl:text-5xl font-normal dark:text-neutral-900 ">
                  {" "}
                  Our Story
                </p>
                <p className=" md:text-base xl:text-xl text-gray-500 font-medium dark:text-gray-500 leading-relaxed xl:w-[542px]">
                  The Infinity Lux, a beacon of luxury and refinement, stands as
                  a testament to timeless opulence and modern innovation.
                  Established in 2013, this landmark property was envisioned by
                  renowned architect Michael Hall, whose goal was to create a
                  sanctuary that combined classical beauty with contemporary
                  comfort.
                </p>
                <p className=" md:text-base xl:text-xl text-gray-500 font-medium dark:text-gray-500 leading-relaxed xl:w-[542px]">
                  Over the decades, The Infinity Lux expanded its offerings,
                  incorporating state-of-the-art amenities while preserving its
                  heritage charm. Its signature grand ballroom became a favored
                  destination for elite events and grand celebrations. The hotel
                  has hosted dignitaries, celebrities, and world leaders,
                  becoming synonymous with excellence and exclusivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutInfinityLuxAndReservation;
