import React from "react";

import HeroSection from "../components/HeroSection";
import Container from "../../../components/Container";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RoomsPage = () => {
   const styles = {
      offer1: {
         backgroundImage: "url('/src/assets/Hotel Profile website/Frame 1000006322.png')"
      },
      offer2: {
         backgroundImage: "url('/src/assets/Hotel Profile website/Frame 1000006323.png')"
      },
      offer3: {
         backgroundImage: "url('/src/assets/Hotel Profile website/Frame 1000006324.png')"
      },
      contactBg: '/src/assets/Hotel Profile website/image-9.png',
   }
   const rooms = [
      {
         id: 1,
         img: "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3 (1).png",
         price: "85$/Night",
         category: "Deluxe Room",
         description: "Spacious, bright guestrooms with tasteful furnishing, wooden floor and panoramic windows from the ceiling to the floor.",
         services: {
            people: "1-2 People",
            bed: "Twin Bed",
            food: "Breakfast",
            wifi: "Free Wifi",
            swimming: "Swimming Pool",
            area: "398 Sqft"
         }
      },
      {
         id: 2,
         img: "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_3.png",
         price: "95$/Night",
         category: "Premier Room",
         description: "Pamper yourself in a luxurious Comfy room, with stylish interiors and a panoramic view of Yangon’s treasured ...",
         services: {
            people: "1-2 People",
            bed: "King Size Bed",
            food: "Breakfast",
            wifi: "Free Wifi",
            swimming: "Swimming Pool",
            area: "452 Sqft"
         }
      },
      {
         id: 3,
         img: "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2.png",
         price: "110$/Night",
         category: "Executive Room",
         description: "Leading on comfort and refined style, our Club rooms give you special access to Club Signature: our executive room ...",
         services: {
            people: "1-2 People",
            bed: "King Size Bed",
            food: "Breakfast",
            wifi: "Free Wifi",
            swimming: "Swimming Pool",
            area: "484 Sqft"
         }
      },
      {
         id: 4,
         img: "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_0.png",
         price: "120$/Night",
         category: "Executive Suite",
         description: "Elegant and spacious, our Executive Suite features separate living area and panoramic views of Bangkok.",
         services: {
            people: "1-2 People",
            bed: "King Size Bed",
            food: "Breakfast",
            wifi: "Free Wifi",
            swimming: "Swimming Pool",
            area: "535 Sqft"
         }
      },
      {
         id: 5,
         img: "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_1.png",
         price: "150$/Night",
         category: "family Suite",
         description: "Our Family Suites speak to luxury in design and freedom in space in an open, wraparound room design.",
         services: {
            people: "1-2 People",
            bed: "King Size Bed",
            food: "Breakfast",
            wifi: "Free Wifi",
            swimming: "Swimming Pool",
            area: "904 Sqft"
         }
      },
      {
         id: 6,
         img: "/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (1).png",
         price: "165$/Night",
         category: "Penthouse Suite",
         description: "Explore the magic of our very best-in-class accommodation, the Penthouse Suite.",
         services: {
            people: "1-2 People",
            bed: "King Size Bed",
            food: "Breakfast",
            wifi: "Free Wifi",
            swimming: "Swimming Pool",
            area: "753 Sqft"
         }
      },
   ]
   return (
      <section className="bg-roomBG">
         <HeroSection
            heroImg={"/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_0 (1).png"}
            titles={[""]}
         />
         <Container>
            <div className="py-40 flex flex-col gap-40">
               {rooms.map((room) => (
                  <div key={room.id} className="relative h-[530px]">
                     <div className={`${room.id%2 === 0 ? "absolute right-0" : "relative"}`}>
                        <img className="h-[530px] w-auto" src={room.img} alt={room.category} />
                     </div>
                     <div className={`absolute top-9 ${room.id%2 !== 0 && "right-0"} w-[630px] text-gray-500 bg-white p-8`}>
                        <p className="text-2xl/6 mb-6">{room.price}</p>
                        <h3 className="font-heading text-5xl/none text-black mb-9">{room.category}</h3>
                        <p className="text-xl/5 mb-9">{room.description}</p>
                        <div className="grid grid-cols-3 mb-9">
                           <div className="flex gap-1"><img className="size-6" src="/src/assets/Hotel Profile website/users-2.svg" alt="users-2" /> <span className="text-xl/5">{room.services.people}</span></div>
                           <div className="flex gap-1"><img className="size-6" src="/src/assets/Hotel Profile website/bed-double.svg" alt="bed-double" /> <span className="text-xl/5">{room.services.bed}</span></div>
                           <div className="flex gap-1 ps-6"><img className="size-6" src="/src/assets/Hotel Profile website/utensils.svg" alt="utensils" /> <span className="text-xl/5">{room.services.food}</span></div>
                           <div className="flex gap-1"><img className="size-6" src="/src/assets/Hotel Profile website/wifi.svg" alt="wifi" /> <span className="text-xl/5">{room.services.wifi}</span></div>
                           <div className="flex gap-1"><img className="size-6" src="/src/assets/Hotel Profile website/waves.svg" alt="waves" /> <span className="text-xl/5">{room.services.swimming}</span></div>
                           <div className="flex gap-1 ps-6"><img className="size-6" src="/src/assets/Hotel Profile website/axis-3d.svg" alt="axis-3d" /> <span className="text-xl/5">{room.services.area}</span></div>
                        </div>
                        <div className="flex justify-between items-center">
                           <Link to={`/rooms/room-details/${room.id}`} className="text-2xl/6 font-bold">Room Details <HiArrowRight className="inline" /></Link>
                           <Link to={"/booking"} className="bg-customPurple text-2xl/6 text-white px-10 py-5">Book Now</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
         <div className="bg-white py-[61px]">
            <Container>
               <h5 className="text-center text-2xl/6 mb-6">Comfort & Relax</h5>
               <h3 className="text-center text-5xl/none font-heading mb-[60px]">Exclusive Offers</h3>
               <div className="grid grid-cols-3 gap-5">
                  <div style={styles.offer1} className="col-span-1 w-[413px] h-[512px] bg-contain bg-no-repeat p-8 flex flex-col">
                     <div className="w-[150px] bg-white text-2xl/6 text-gray-500 px-7 py-5">30% Off</div>
                     <div className="mt-auto font-heading text-white text-4xl/9">New Year</div>
                  </div>
                  <div style={styles.offer2} className="col-span-1 w-[413px] h-[512px] bg-contain bg-no-repeat"></div>
                  <div style={styles.offer3} className="col-span-1 w-[413px] h-[512px] bg-contain bg-no-repeat"></div>
               </div>
            </Container>
         </div>
         <div className="bg-white py-40">
         <div className="relative">
            <img src={styles.contactBg} className="w-[1579px] h-[534px]" />
            <div className="absolute top-0 right-0 flex flex-col justify-center w-[1579px] h-[534px]">
               <h2 className="font-heading text-center text-white text-[64px] mb-[128px]">Can’t Find What Are You looking For?</h2>
               <div className="flex justify-center">
                  <Link to={"/contact-us"} className="px-10 py-5 text-white text-2xl/6 bg-customPurple">Contact Us</Link>
               </div>
            </div>
         </div>
         </div>
      </section>
   );
};

export default RoomsPage;
