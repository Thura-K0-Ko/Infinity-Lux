import React from "react";
import HeroSection from "../components/HeroSection";
import MeetingCard from "../components/MeetingCard";

const MeetingPage = () => {
   return (
      <section>
         <HeroSection
            heroImg={"/src/assets/Infinity Lux image Assets/Meeting Event/Meeting_Event_Hero_Image.png"}
            titles={[""]}
         />
         <MeetingCard />
      </section>
   );
};

export default MeetingPage;
