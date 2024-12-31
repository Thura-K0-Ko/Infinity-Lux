import HeroSection from "../components/HeroSection";
import Breadcrumb from "../../../components/Breadcrumb";

const AboutUsPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (2).png"
        }
        titles={["About Us"]}
      />

      <Breadcrumb />
    </section>
  );
};

export default AboutUsPage;
