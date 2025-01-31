import HeroSection from "../components/HeroSection";
import EventCard from "../components/EventCard";

const EventPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={"/assets/Infinity Lux image Assets/6. Events Page ( Infinity Lux )/Events_Hero_image.png"}
        // titles={["Events"]}
      />

      <EventCard />
    </section>
  );
};

export default EventPage;
