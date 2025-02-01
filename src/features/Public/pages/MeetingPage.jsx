import React from "react";
import HeroSection from "../components/HeroSection";
import MeetingCard from "../components/MeetingCard";

const MeetingPage = () => {
  return (
    <section>
      <HeroSection
        heroImg={
          "/assets/Infinity Lux image Assets/Meeting Event/Meeting_Event_Hero_Image.png"
        }
        // titles={["Meetings"]}
        // breadcrumbs={[
        //   {
        //     currentPageTitle: "Meetings",
        //     path: "/events",
        //     name: "Events",
        //   },
        // ]}
      />
      <MeetingCard />
    </section>
  );
};

export default MeetingPage;
