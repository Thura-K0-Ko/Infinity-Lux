import React from "react";
import HeroSection from "../components/HeroSection";
import WeddingCard from "../components/WeddingCard";

const WeddingPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Hero_Image.png"
        }
        titles={["Weddings"]}
        breadcrumbs={[
          {
            currentPageTitle: "Weddings",
            path: "/events",
            name: "Events",
          },
        ]}
      />
      <WeddingCard />
    </section>
  );
};

export default WeddingPage;
