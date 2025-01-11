import HeroSection from "../components/HeroSection";
import Breadcrumb from "../../../components/Breadcrumb";
import AboutInfinityLux from "../../about-us/aboutInfinityLux";
import LeadersOfHotel from "../../about-us/LeadersOfHotel";
import OurServices from "../../about-us/OurServices";
import CustomerReviews from "../../about-us/CustomerReviews";

const AboutUsPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={"/src/assets/Hotel Profile website/image.svg"}
        titles={["About Us"]}
      />

      <Breadcrumb currentPageTitle="About Us" />

      <AboutInfinityLux />
      <LeadersOfHotel/>
      <OurServices/>
      <CustomerReviews/>
    </section>
  );
};

export default AboutUsPage;
