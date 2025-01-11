import React from "react";
import HeroSection from "../components/HeroSection";
import Container from "../../../components/Container";
import EventCard from "../components/EventCard";
import useEventStore from "../stores/useEventStore";

const EventPage = () => {
  const { events } = useEventStore();
  return (
    <section>
      <HeroSection
        heroImg={"/src/assets/Hotel Profile website/event-hero.png"}
        titles={[""]}
      />
      <div className="bg-customSlate-500">
        <Container>
          <div className="py-40 flex flex-col gap-40">
            {events.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default EventPage;
