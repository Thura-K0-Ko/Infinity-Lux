import React from "react";
import useCustomerReviewStore from "../../../stores/useCustomerReviewStore";
import Container from "../../../components/Container";
import Rating from "../../../components/Rating";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const CustomerReview = () => {
  const { customerReview } = useCustomerReviewStore();
  return (
    <Container>
      <div className=" bg-white grid grid-cols-3 items-center justify-center py-40">
        <div className=" col-span-1">
          <div className=" flex flex-col gap-12">
            <h1 className="text-[#010101] text-6xl font-normal  font-heading">
              Our customers Think We’re <br />
              The Best
            </h1>
            <div className=" flex items-center justify-start gap-3">
              <Link
                className="bg-[#ada1d6]  text-white p-2 rounded-full  hover:bg-[#4A4164] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
              >
                <HiArrowSmallLeft className=" size-7" />
              </Link>

              <Link
                className="bg-[#655B87]  text-white p-2 rounded-full  hover:bg-[#4A4164] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
              >
                <HiArrowSmallRight className=" size-7" />
              </Link>
            </div>
          </div>
        </div>

        <div className=" col-span-2 relative">
          <div className="flex items-center gap-5 justify-between absolute top-1/2 translate-x-10 -translate-y-1/2 ">
            {customerReview.map((review) => (
              <div
                key={review.id}
                className=" flex flex-col p-10 w-[392px] h-[410px] "
              >
                <div className="flex items-center justify-between">
                  <img
                    src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Black.png"
                    className=" w-10"
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
    </Container>
  );
};

export default CustomerReview;
