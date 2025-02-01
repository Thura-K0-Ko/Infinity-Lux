import React, { useRef } from "react";
import Container from "../../../components/Container";
import useOfferStore from "../stores/useOfferStore";

const OfferCard = () => {
   const {offers} = useOfferStore();
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
      <div className="bg-white py-[60px]">
         <Container>
            <h5 className="text-center text-customPurple-500 text-base md:text-2xl font-medium mb-4 md:mb-6">Comfort & Relax</h5>
            <h3 className="text-center text-customGray-500 font-heading text-[32px] md:text-5xl font-normal mb-[40px] md:mb-[60px]">Exclusive Offers</h3>
            <div ref={carouselRef} className="w-full overflow-x-scroll hsb whitespace-nowrap">
               {offers.map((offer) => (
                  <div key={offer.id} className="inline-block w-full md:w-1/2 xl:w-1/3 h-[512px] p-8">
                  <div style={offer.background} className="flex flex-col justify-between h-full bg-cover bg-no-repeat p-8">
                     <div className={`${offer.discount && 'w-max bg-white text-customPurple-500 text-[14px] md:text-2xl font-semibold py-[10px] px-[18px] md:px-5 md:py-5'}`}>{offer.discount}</div>
                     <div className={`${offer.event && 'font-heading text-white text-4xl font-normal'}`}>{offer.event}</div>
                  </div>
                  </div>
               ))}
            </div>
            <div className=" flex xl:hidden items-center justify-center gap-2 md:gap-3 mt-4 md:mt-12  ">
               <button onClick={prevSlide} className=" cursor-pointer bg-customPurple-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
               <button className="bg-white p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
               <button onClick={nextSlide} className=" cursor-pointer bg-customPurple-500 p-1 md:p-1.5 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 "></button>
            </div>
         </Container>
      </div>
   );
};

export default OfferCard;
