import HeroSection from "../components/HeroSection";
import HomeCart from "../components/HomeCart";

const HomePage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/public/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (2).png"
        }
        subtitle={"Curated For You"}
        titles={["Enjoy The Best", "Movements Of Life"]}
        btnText={"Rooms & Suites"}
      />

      <HomeCart />
    </section>
  );
};

export default HomePage;
