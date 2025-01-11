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
                to={"about-us"}
                className="bg-[#ada1d6]  text-white p-2 rounded-full  hover:bg-[#4A4164] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
              >
                <HiArrowSmallLeft className=" size-7" />
              </Link>

              <Link
                to={"about-us"}
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
                    src="/public/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Black.png"
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
                        "/public/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Black.svg"
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
    // <div className=" pl-[116px] py-[175px] bg-white">
    //   <div className=" justify-start items-center gap-12 inline-flex">
    //     <div className="  gap-12 ">
    //       <div className=" h-[223px]">
    //         <span className="text-[#010101] text-[69.42px] font-normal ">
    //           Our customers
    //           <br />
    //           think we’re <br />
    //           the best
    //         </span>
    //       </div>
    //       <div className="  relative">
    //         <div className=" left-[67.66px] top-0 absolute">
    //           <div className="w-[52.34px] h-[52.34px] left-0 top-0 absolute bg-customPurple-500 rounded-full" />
    //           <div className="w-[14.44px] h-[14.44px] left-[15.34px] top-[26.45px] absolute origin-top-left -rotate-45 bg-customPurple-500 overflow-hidden">
    //             <div className="opacity-90 w-[9.55px] h-[9.55px] left-[3.10px] top-[3.10px] absolute"></div>
    //           </div>
    //         </div>
    //         <div className="origin-top-left rotate-180 w-[52.34px] h-[52.34px] left-[52.34px] top-0 absolute">
    //           <div className="w-[52.34px] h-[52.34px] left-0 top-0 absolute origin-top-left rotate-180 bg-[#eeeef4] rounded-full" />
    //           <div className="w-[14.44px] h-[14.44px] left-[-15.34px] top-[26.45px] absolute origin-top-left rotate-[-135deg] bg-[#eeeef4] overflow-hidden">
    //             <div className="opacity-90 w-[9.55px] h-[9.55px] left-[3.10px] top-[3.10px] absolute"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="justify-start items-center gap-[15px] flex">
    //       <div className="w-[392px] h-[410px] relative">
    //         <div className="w-[392px] h-[410px] left-0 top-0 absolute">
    //           <div className="w-[392px] h-[410px] left-0 top-0 absolute bg-white rounded-[10px]" />
    //           <div className="w-[325px] h-[173px] left-[40px] top-[88px] absolute text-gray-500 text-lg font-normal font-['Urbanist'] leading-relaxed">
    //             I had the pleasure of working with ABC Realty to find my dream
    //             home, and I couldn't be happier with the entire experience.{" "}
    //             <br />
    //             <br />
    //             From the moment I walked into their office, I felt welcomed and
    //             supported by their friendly team.
    //           </div>
    //           <div className="left-[108px] top-[350px] absolute text-gray-500 text-[15px] font-normal font-['Urbanist'] leading-snug">
    //             Property consultation
    //           </div>
    //           <div className="left-[108px] top-[322px] absolute text-[#010101] text-lg font-normal font-['Gilda Display'] leading-relaxed">
    //             Sarah M.
    //           </div>
    //           <div className="w-10 h-7 left-[40px] top-[69.02px] absolute"></div>
    //           <img
    //             className="w-[54px] h-[54px] left-[40px] top-[320px] absolute rounded-full"
    //             src="https://via.placeholder.com/54x54"
    //           />
    //         </div>
    //         <div className="w-[114px] h-[26px] left-[251px] top-[43px] absolute"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="w-[1512px] mx-auto px-16 py-12">
    //   <div className="flex gap-16">
    //     {/* Left side - Heading */}
    //     <div className="w-[400px] flex-shrink-0">
    //       <h2 className="text-[56px] font-serif leading-[1.1]">
    //         Our Customers
    //         <br />
    //         Think We're
    //         <br />
    //         The Best
    //       </h2>
    //       <div className="flex gap-2 mt-8">
    //         <button
    //           onClick={prevSlide}
    //           className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors"
    //           aria-label="Previous testimonial"
    //         >
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //           >
    //             <path d="M15 18l-6-6 6-6" />
    //           </svg>
    //         </button>
    //         <button
    //           onClick={nextSlide}
    //           className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors"
    //           aria-label="Next testimonial"
    //         >
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //           >
    //             <path d="M9 18l6-6-6-6" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     {/* Right side - Testimonials */}
    //     <div className="flex-1 overflow-hidden">
    //       <div
    //         className="flex transition-transform duration-500 ease-in-out"
    //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //       >
    //         {testimonials.map((testimonial) => (
    //           <div key={testimonial.id} className="min-w-full px-4">
    //             <div className="mb-6">
    //               {[...Array(5)].map((_, i) => (
    //                 <svg
    //                   key={i}
    //                   className="inline-block w-5 h-5 text-yellow-400 fill-current"
    //                   viewBox="0 0 24 24"
    //                 >
    //                   <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    //                 </svg>
    //               ))}
    //             </div>
    //             <p className="text-lg mb-4">{testimonial.mainContent}</p>
    //             <p className="text-lg text-gray-600 mb-8">
    //               {testimonial.subContent}
    //             </p>
    //             <div className="flex items-center gap-4">
    //               <Image
    //                 src={testimonial.avatar}
    //                 alt=""
    //                 width={40}
    //                 height={40}
    //                 className="rounded-full"
    //               />
    //               <div>
    //                 <div className="font-medium">{testimonial.name}</div>
    //                 <div className="text-sm text-gray-600">
    //                   {testimonial.role}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CustomerReview;
