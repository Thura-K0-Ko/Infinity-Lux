import React from "react";
import HeroSection from "../components/HeroSection";

import Container from "../../../components/Container";
import FaqCard from "../components/FaqCard";

const FaqPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/public/assets/Infinity Lux image Assets/2. Home Page ( Infinity Lux )/Home_Hero_image.png"
        }
        titles={["Faqs"]}
      />
      <Container>
        <div className="py-40">
          <FaqCard />
        </div>
      </Container>
    </section>
  );
};

export default FaqPage;
