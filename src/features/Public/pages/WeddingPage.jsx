import React from "react";
import HeroSection from "../components/HeroSection";
import WeddingCard from "../components/WeddingCard";

const WeddingPage = () => {
   return (
      <section>
         <HeroSection
            heroImg={
               "/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Hero_Image.png"
            }
            titles={[""]}
         />
         <WeddingCard />
      </section>
   );
};

export default WeddingPage;
