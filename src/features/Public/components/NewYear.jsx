import React from "react";
import Container from "../../../components/Container";

const NewYear = () => {
  return (
    <div className="relative h-[768px] w-full overflow-hidden my-40">
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
          <div className=" grid grid-cols-2 gap-40 items-center">
            <div className=" col-span-1">
              <div className=" flex flex-col gap-6 items-start justify-center">
                {/* Special Offer Tag */}
                <p className=" text-customPurple-500 text-2xl font-medium">
                  Special Offer
                </p>

                {/* Title */}
                <div className=" flex flex-col gap-9 items-start">
                  <h2 className="text-white text-5xl font-heading font-normal">
                    New Year Stay
                  </h2>

                  {/* Description */}
                  <p className="text-gray-300 text-xl font-medium">
                    Celebrate the New Year in Style! Enjoy exclusive New Year
                    discounts at Infinity Lux. Book your stay before 31 Dec 2024
                    and receive up to 35% off on luxurious accommodations, plus
                    complimentary perks like breakfast, late check-out, and
                    festive surprises. Start the year with comfort and savings!
                  </p>

                  {/* CTA Button */}
                  <button
                    to={"about-us"}
                    className="bg-customPurple-500 text-2xl font-semibold text-white px-10 py-5   hover:bg-[#4A4164] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "
                  >
                    View Rooms
                  </button>
                </div>
              </div>

              {/* Discount Badge */}
            </div>
            <div className="col-span-1">
              <div className=" bg-customPurple-500 rounded-full size-[340px] flex flex-col items-center justify-center gap-5">
                <span className="text-white text-xl font-medium">Up To</span>
                <span className="text-white text-8xl font-medium">35%</span>
                <span className="text-white text-xl font-medium">
                  On Selected Rooms
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
    //     <section>
    //   <div className="my-40">
    //     <div
    //       className="relative min-h-[768px] flex flex-col items-center justify-center bg-black"
    //       style={{
    //         backgroundImage: "url('/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/New_Year_bg_image.png')",
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //       }}
    //     >
    //       {/* Dark Overlay */}
    //       <div className="absolute inset-0 bg-black/30" />

    //       <Container>
    //         <h1 className="text-white text-5xl font-heading font-normal z-10">
    //           header
    //         </h1>
    //         <div className="grid grid-cols-2 z-10">
    //           <div className="col-span-1">
    //             <div className="text-customPurple-500 text-2xl font-medium">Special Offer</div>
    //             <div className="text-white text-5xl font-normal">New Year Stay</div>
    //             <div className="text-gray-300 text-xl font-medium">
    //               Celebrate the New Year in Style! Enjoy exclusive New Year discounts at Infinity Lux.
    //               Book your stay before 31 Dec 2024 and receive up to 35% off on luxurious accommodations,
    //               plus complimentary perks like breakfast, late check-out, and festive surprises.
    //               Start the year with comfort and savings!
    //             </div>
    //           </div>
    //           <div className="px-10 py-5 bg-customPurple-500">
    //             <div className="text-white text-2xl font-semibold">View Rooms</div>
    //           </div>
    //           <div className="col-span-1"></div>
    //         </div>
    //       </Container>
    //     </div>
    //   </div>
    // </section>

    // <section>
    //   <div className=" my-40">
    //     <div className="  relative min-h-[768px] flex flex-col items-center justify-center">
    //       {/* Background Image */}
    //       <div className="absolute inset-0 z-0">
    //         <img
    //           src="/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/New_Year_bg_image.png"
    //           alt="Luxury hotel room"
    //           className="w-full h-full object-cover"
    //         />
    //         <div className="absolute inset-0 bg-black/30" />
    //       </div>
    //       <>
    //         <Container>
    //           <h1 className=" text-white text-5xl font-heading font-normal">
    //             header
    //           </h1>
    //           <div className=" grid grid-cols-2 ">
    //             <div className=" col-span-1">
    //               <div className=" text-customPurple-500 text-2xl font-medium ">
    //                 Special Offer
    //               </div>
    //               <div className=" text-white text-5xl font-normal ">
    //                 New Year Stay
    //               </div>

    //               <div className=" text-gray-300 text-xl font-medium ">
    //                 Celebrate the New Year in Style! Enjoy exclusive New Year
    //                 discounts at Infinity Lux. Book your stay before 31 Dec 2024
    //                 and receive up to 35% off on luxurious accommodations, plus
    //                 complimentary perks like breakfast, late check-out, and
    //                 festive surprises. Start the year with comfort and savings!
    //               </div>
    //             </div>
    //             <div className="px-10 py-5 bg-customPurple-500 ">
    //               <div className="text-white text-2xl font-semibold ">
    //                 View Rooms
    //               </div>
    //             </div>

    //             <div className="colspan-1"></div>
    //           </div>
    //         </Container>
    //       </>
    //     </div>
    //   </div>

    // </section>
  );
};

export default NewYear;
