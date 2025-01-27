import React, { useRef } from "react";
import useCustomerReviewStore from "../../../stores/useCustomerReviewStore";
import Container from "../../../components/Container";
import Rating from "../../../components/Rating";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const CustomerReview = () => {
  const { customerReview } = useCustomerReviewStore();

  const carouselRef = useRef();
  const nextSlide = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.clientWidth + 16; // Includes gap between slides
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
      <Container>
        <div className=" pb-20 md:pb-32 xl:pb-56 pt-0 md:pt-10 relative">
          <div className=" bg-white  grid grid-cols-1 xl:grid-cols-3 items-center xl:items-start gap-10 md:gap-12 xl:gap-40">
            <div className="w-full md:w-[60%] md:mx-auto xl:min-w-[400px] xl:col-span-1 grow xl:pt-14">
              <h1 className="text-customGray-500 text-center xl:text-left text-[32px] md:text-[40px]  xl:text-6xl font-normal  font-heading">
                Our customers Think We’re 
                The Best
              </h1>
            </div>

            <div className=" xl:col-span-2 ">
              <div
                ref={carouselRef}
                className=" flex gap-4 h-[410px] xl:h-[450px]  overflow-x-scroll"
              >
                {customerReview.map((review) => (
                  <div
                    key={review.id}
                    id={review.id}
                    className=" flex flex-col p-8 xl:p-10 min-w-[342px] md:min-w-[376px] xl:min-w-[392px] bg-[#eeeef4] xl:bg-transparent rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <img
                        src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Black.png"
                        className=" w-7 xl:w-10"
                        alt=""
                      />
                      <div>
                        <Rating rate={review.rating} />
                      </div>
                    </div>
                    <div className=" flex flex-col gap-4 items-center mt-5">
                      <p className="   text-gray-500 text-lg font-normal ">
                        {" "}
                        {review.mainContent}
                      </p>
                      <p className="   text-gray-500 text-lg font-normal ">
                        {review.subContent}
                      </p>
                    </div>
                    <div className=" flex items-center justify-between mt-auto">
                      <div className=" flex items-center gap-5">
                        <div>
                          <img
                            src={review.img}
                            className=" size-13 object-cover object-center rounded-full"
                            alt=""
                          />
                        </div>
                        <div className="">
                          <p className="text-[#010101] text-lg font-normal font-heading">
                            {review.name}
                          </p>
                          <p className="text-gray-500 text-[15px] font-normal">
                            {review.title}
                          </p>
                        </div>
                      </div>
                      <div>
                        <img
                          src={
                            "/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Black.svg"
                          }
                          className=" size-6"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center xl:justify-start gap-3 xl:absolute xl:transform xl:-translate-y-40 mt-12 xl:mt-0 ">
            <Link
              onClick={prevSlide}
              className="bg-customPurple-500  text-white p-2 rounded-full  hover:bg-customPurple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            >
              <HiArrowSmallLeft className=" size-7" />
            </Link>

            <Link
              onClick={nextSlide}
              className="bg-customPurple-500 text-white p-2 rounded-full  hover:bg-customPurple-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
            >
              <HiArrowSmallRight className=" size-7" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
