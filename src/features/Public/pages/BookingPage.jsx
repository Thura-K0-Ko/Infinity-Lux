import React from "react";
import Container from "../../../components/Container";
import HeroSection from "../components/HeroSection";
import BillingForm from "../components/BillingForm";
import ReservationCard from "../components/ReservationCard";
import VoucherCard from "../components/VoucherCard";

const Booking = () => {
   return (
      <>
         <HeroSection
            heroImg={"/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (3).png"}
            titles={[""]}
         />
         <Container>
            <div className="grid grid-cols-3 gap-5 my-[174px]">
               <BillingForm />
               <div className="">
                  <ReservationCard />
                  <VoucherCard />
               </div>
            </div>
         </Container>
      </>
   );
};

export default Booking;
