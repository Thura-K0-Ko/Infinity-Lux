import HeroSection from "../components/HeroSection";
import Breadcrumb from "../../../components/Breadcrumb";
import AboutInfinityLuxAndReservation from "../components/AboutInfinityLuxAndReservation";
import LeadersOfHotel from "../components/LeadersOfHotel";
import OurServices from "../components/OurServices";
import CustomerReview from "../components/CustomerReview";

const AboutUsPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (2).png"
        }
        titles={[""]}
      />
      <Breadcrumb currentPageTitle="About Us" />
      <AboutInfinityLuxAndReservation/>
      <LeadersOfHotel/>
      <OurServices/>
      <CustomerReview/>
    </section>
  );
};

export default AboutUsPage;
