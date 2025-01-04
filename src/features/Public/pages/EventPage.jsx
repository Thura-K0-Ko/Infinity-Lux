import React from "react";

import HeroSection from "../components/HeroSection";
import EventCart from "../components/EventCart";
import Container from "../../../components/Container";

const EventPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_0 (2).png"
        }
        titles={["Events"]}
      />
      <Container>
        <EventCart />
      </Container>
    </section>
  );
};

export default EventPage;
