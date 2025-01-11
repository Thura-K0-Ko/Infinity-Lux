import React from "react";
import HeroSection from "../components/HeroSection";
import Container from "../../../components/Container";
import useRoomStore from "../stores/useRoomStore";
import RoomCard from "../components/RoomCard";
import OfferCard from "../components/OfferCard";
import ContactCard from "../components/ContactCard";

const RoomsPage = () => {
  const { rooms } = useRoomStore();
  return (
    <section className="bg-roomBG">
      <HeroSection
        heroImg={
          "/public/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_0 (1).png"
        }
        titles={["Rooms & Suites"]}
      />
      <Container>
        <div className="py-40 flex flex-col gap-40">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Container>
      <OfferCard />
      <ContactCard />
    </section>
  );
};

export default RoomsPage;
