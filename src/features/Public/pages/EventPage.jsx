import React from "react";

import HeroSection from "../components/HeroSection";

import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

const EventPage = () => {
   const events = [
      {
         id: 1,
         img: "/src/assets/Hotel Profile website/image-14.png",
         display: "Let’s Meet",
         title: "Meeting Event",
         description: "Host your events in residential-style venues with daylight filled spaces, access to a show kitchen, Garden Terrace and a ballroom. Enjoy personalized culinary menus, prime location, and cutting-edge technology perfect for board meetings, dinners and conferences.",
      },
      {
         id: 2,
         img: "/src/assets/Hotel Profile website/image-13.png",
         display: "Where Your Marriage Journey Begins",
         title: "Wedding Event",
         description: "Whether an intimate dinner or a spectacular standing cocktail reception for up to 700 people, this residential-style venue is ideal for all types of weddings. Our dedicated team of wedding planners will assist you  in planning every detail of your big day ....",
      },
   ]
   return (
      <section>
         <HeroSection
            heroImg={"/src/assets/Hotel Profile website/event-hero.png"}
            titles={[""]}
         />
         <div className="bg-eventBg">
            <Container>
            <div className="py-40 flex flex-col gap-40">
               {events.map((event) => (
                  <div key={event.id} className="relative h-[530px]">
                     <div className={`${event.id%2 === 0 ? "absolute right-0" : "relative"}`}>
                        <img className="h-[530px] w-auto" src={event.img} alt={event.title} />
                     </div>
                     <div className={`absolute top-16 ${event.id%2 !== 0 && "right-0"} w-[630px] bg-white p-8`}>
                        <h3 className="text-display text-2xl/6 mb-6">{event.display}</h3>
                        <h2 className="text-title font-heading text-5xl mb-9">{event.title}</h2>
                        <p className="text-gray-500 text-xl/5 mb-9">{event.description}</p>
                        <button className="bg-customPurple text-white px-10 py-5">View Details</button>
                     </div>
                  </div>
               ))}
            </div>
            </Container>
         </div>
      </section>
   );

};

export default EventPage;
