import React from "react";
import Container from "../../../components/Container";

const WeddingCard = () => {
   return (
      <>
         <div className="py-40">
            <Container>
               <h4 className="text-center text-customPurple text-2xl font-medium mb-6">Add A New Dimension To Your Events</h4>
               <h2 className="text-center text-title font-heading text-5xl font-normal mb-[60px]">Wedding Event</h2>
               <p className="text-gray-500 text-xl font-light tracking-[0.1px] mb-[60px]">Host your events in residential-style venues with daylight filled spaces, access to a show kitchen, Garden Terrace and a ballroom. Enjoy personalized culinary menus, prime location, and cutting-edge technology perfect for board meetings, dinners and conferences.</p>
               <p className="text-gray-500 text-xl font-light tracking-[0.1px]">A touch of The Elysian Grand is all you need to ensure your next event is outstanding. With an expert team whose knowledge, professionalism and attention to detail are second to none, whichever of our unique and stylish venue option you choose, we make sure it’s unforgettable. </p>
            </Container>
         </div>
         <div className="bg-roomBG py-40">
            <Container>
               <div className="flex justify-between gap-32">
                  <ul className="flex flex-col gap-8">
                     <h3 className="text-title font-heading text-[40px] font-normal mb-9">Package Include</h3>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Decoration</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Passport</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Cake</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Ceremony</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Food</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Photography</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Ceremony</span></li>
                     <li className="flex items-center gap-5"><img className="size-8" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/badge-check.svg" alt="" /><span className="text-black text-2xl/8 font-medium">Wedding Accomodation</span></li>
                  </ul>
                  <div className="relative w-[737px] h-[616px]">
                     <img className="absolute top-0 right-0 w-[629px] h-[563px]" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Package_Image_1.png" alt="" />
                     <img className="absolute bottom-0 left-0 w-[433px] h-[298px]" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Package_Image.png" alt="" />
                  </div>
               </div>
            </Container>
         </div>
         <div className="py-40">
            <Container>
               <h4 className="text-center text-customPurple text-2xl font-medium mb-6">Add A New Dimension To Your Events</h4>
               <h2 className="text-center text-title font-heading text-5xl font-normal mb-[60px]">Wedding Event</h2>
               <div className="grid grid-cols-3 gap-x-5 gap-y-[26px]">
                  <div className="w-[413px] h-[493px]">
                     <img className="w-full h-full" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Event_Package_Image_1.png" alt="" />
                  </div>
                  <div className="w-[413px] h-[493px]">
                     <img className="w-full h-full" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_2.png" alt="" />
                  </div>
                  <div className="w-[413px] h-[493px]">
                     <img className="w-full h-full" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_3.png" alt="" />
                  </div>
                  <div className="w-[413px] h-[493px]">
                     <img className="w-full h-full" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_4.png" alt="" />
                  </div>
                  <div className="w-[413px] h-[493px]">
                     <img className="w-full h-full" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_5.png" alt="" />
                  </div>
                  <div className="w-[413px] h-[493px]">
                     <img className="w-full h-full" src="/src/assets/Infinity Lux image Assets/7. Wedding Event ( Infinity Lux )/Wedding_Gallery_6.png" alt="" />
                  </div>
               </div>
            </Container>
         </div>
         <div className="bg-customPurple py-[75px] mb-[200px]">
            <Container>
               <h3 className="text-gray-50 font-heading text-4xl font-normal tracking-[0.18px] mb-6">Contact Us</h3>
               <p className="text-gray-300 text-xl font-normal tracking-[0.1px]">For inquiries and bookings, please reach out to us at +959756895143 or eventteam3421@gmail.com. Together, we’ll craft the wedding of your dreams!</p>
            </Container>
         </div>
      </>
   );
};

export default WeddingCard;
