import React from "react";
import HeroSection from "../components/HeroSection";
import Container from "../../../components/Container";
import RoomDetailCard from "../components/RoomDetailCard";
import BookingForm from "../components/BookingForm";
import SimilarRoomCard from "../components/SimilarRoomCard";

const RoomDetailPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/public/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (1).png"
        }
        titles={[""]}
      />
      <Container>
        <div className="grid grid-cols-3 gap-[21px] mt-[239px] mb-[180px]">
          <RoomDetailCard />
          <div className="col-span-1">
            <div className="shadow-lg">
              <h3 className="bg-customPurple-500 text-white font-heading text-[32px] font-normal p-5">
                Book Your Room
              </h3>
              <BookingForm />
            </div>
          </div>
        </div>

        <SimilarRoomCard />
      </Container>
    </section>
  );
};

export default RoomDetailPage;
