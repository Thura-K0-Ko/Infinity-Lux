import React from "react";
import HeroSection from "../components/HeroSection";

import Container from "../../../components/Container";
import FaqCard from "../components/FaqCard";
import ContactCard from "../components/ContactCard";

const FaqPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Infinity Lux image Assets/hero_home_faq.jpg"
        }
        titles={["Faqs"]}
      />
      <Container>
        <div className="py-[50px] md:py-[90px] xl:py-40">
          <FaqCard />
        </div>
      </Container>
      <ContactCard />
    </section>
  );
};

export default FaqPage;
