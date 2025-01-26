import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";

const EventCard = () => {
  return (
    <div className=" bg-customSlate-500 mb-[90px] xl:mb-40">
      <Container>
        {/* --------------Meeting Event------------ */}
        <div className="py-[50px] md:py-[90px] xl:py-40">
          <div className="  flex flex-col-reverse xl:gap-10  xl:relative">
            <div className="bg-customSlate-500 md:bg-white pt-6  md:p-8 xl:absolute xl:right-0 xl:top-10 xl:w-[630px]">
              <div className=" flex flex-col gap-4 xl:gap-5">
                <p className="text-customPurple-500 text-base xl:text-2xl font-medium ">
                  Let’s Meet
                </p>
                <div className=" flex flex-col gap-6 md:gap-8 xl:gap-9 items-start">
                  <h1 className="font-heading text-customGray-500 text-[32px] md:text-[40px] xl:text-5xl font-normal dark:text-neutral-900 ">
                    Meeting Event
                  </h1>
                  <p className="text-base xl:text-xl text-gray-500 font-light dark:text-gray-500 leading-relaxed xl:w-[542px] tracking-tight">
                    Host your events in residential-style venues with daylight
                    filled spaces, access to a show kitchen, Garden Terrace and
                    a ballroom. Enjoy personalized culinary menus, prime
                    location, and cutting-edge technology perfect for board
                    meetings, dinners and conferences.
                  </p>
                  <Link
                    to={`/events/meeting`}
                    className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white px-5 py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <img
                src="/assets/Infinity Lux image Assets/6. Events Page ( Infinity Lux )/Meeting_event.png"
                className="h-[214px] md:h-[480px] xl:h-[530px]"
                alt={"Meeting Event"}
              />
            </div>
          </div>
        </div>
        {/* -------------Weeding Event------------ */}
        <div className="pb-[50px] md:pb-[90px] xl:py-40 ">
          <div className="flex flex-col-reverse xl:gap-10 xl:relative">
            <div
              className={`xl:absolute z-10 top-14  left-0
             xl:w-[630px] bg-customSlate-500 md:bg-white  pt-6 md:p-8 `}
            >
              <div className="flex flex-col gap-6 ">
                <p className="text-customPurple-500 text-base xl:text-2xl font-medium">
                  Where Your Marriage Journey Begins
                </p>
                <div className="flex flex-col gap-6 md:gap-8 xl:gap-9 items-start">
                  <h2 className="text-customGray-500 font-heading text-[32px] md:text-[40px] xl:text-5xl font-normal">
                    Wedding Event
                  </h2>
                  <p className="text-gray-500 text-base xl:text-xl font-light tracking-tight">
                    Whether an intimate dinner or a spectacular standing
                    cocktail reception for up to 700
                    people, this residential-style venue is ideal for all types
                    of weddings. Our dedicated team of wedding planners will
                    assist you  in planning every detail of your big day ....
                  </p>
                  <Link
                    to={`/events/wedding`}
                    className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white px-5 py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className={` flex justify-end`}>
              <img
                className="h-[214px]  md:h-[480px] xl:h-[530px]"
                src="/assets/Infinity Lux image Assets/6. Events Page ( Infinity Lux )/Wedding_event_image.png"
                alt={"Wedding Event"}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EventCard;

{
  /* <div className=" flex flex-col xl:relative">
<div
  className={`${id % 2 === 0 ? "xl:absolute right-0" : "relative"}`}
>
  <img className="h-[480px] xl:h-[530px] w-auto" src={img} alt={title} />
</div>

<div
  className={`xl:absolute top-14 ${
    id % 2 !== 0 && "right-0"
  } w-[630px] bg-white p-8`}
>
  <div className="flex flex-col gap-6 ">
    <h3 className="text-customPurple-500 text-2xl font-medium">
      {display}
    </h3>
    <div className="flex flex-col gap-9 items-start">
      <h2 className="text-customGray-500 font-heading text-5xl font-normal">
        {title}
      </h2>
      <p className="text-gray-500 text-xl font-light tracking-tight">
        {description}
      </p>
      <Link
        to={path}
        className="bg-customPurple-500 md:text-base xl:text-2xl font-semibold text-white md:px-5 md:py-2.5 xl:px-10 xl:py-5 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-customPurple-800 focus:ring-4 focus:ring-customPurple-300 dark:bg-customPurple-600 dark:hover:bg-customPurple-700 focus:outline-none dark:focus:ring-customPurple-800"
      >
        View Details
      </Link>
    </div>
  </div>
</div>
</div> */
}
