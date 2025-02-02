import HeroSection from "../components/HeroSection";
import AboutInfinityLuxAndReservation from "../components/AboutInfinityLuxAndReservation";
import LeadersOfHotel from "../components/LeadersOfHotel";
import OurServices from "../components/OurServices";
import CustomerReview from "../components/CustomerReview";

const AboutUsPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Infinity Lux image Assets/8. About Us ( Infinity Lux )/About_Us_Hero_Image.png"
        }
        // titles={["About Us"]}
      />
      <AboutInfinityLuxAndReservation/>
      <LeadersOfHotel/>
      <OurServices/>
      <CustomerReview/>
    </section>
  );
};

export default AboutUsPage;
