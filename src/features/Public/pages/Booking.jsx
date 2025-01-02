import React from "react";
import Header from "../components/Header";
import Container from "../../../components/Container";

const Booking = () => {
   const styles = {
      deluxeRoomBg: {
         backgroundImage: "url('/src/assets/Hotel Profile website/image-6.png')"
      },
      boxShadow: {
         boxShadow: "1px 2px 2px 1px #888"
      }
   }
   return (
      <>
         <div className="relative min-h-screen flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
               <img
                  src="/src/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (3).png"
                  alt="Luxury hotel room"
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/30" />
            </div>
            <Header />
         </div>
         <Container>
         <div className="grid grid-cols-3 gap-5 my-20">
            <div className="col-span-2">
               <form className="grid grid-cols-2 gap-5">
                  <h3 className="col-span-2 font-serif text-3xl">Billing Details</h3>
                  <div className="col-span-1 flex flex-col">
                     <label htmlFor="fname" className="font-serif text-2xl">First Name *</label>
                     <input type="text" id="fname" placeholder="First name ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                     <label htmlFor="lname" className="font-serif text-2xl">Last Name *</label>
                     <input type="text" id="lname" placeholder="Last name ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                     <label htmlFor="country" className="font-serif text-2xl">Country *</label>
                     <input type="text" id="country" placeholder="Country ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                     <label htmlFor="city" className="font-serif text-2xl">Town/City *</label>
                     <input type="text" id="city" placeholder="Town/City ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                     <label htmlFor="email" className="font-serif text-2xl">Email *</label>
                     <input type="text" id="email" placeholder="Email ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                     <label htmlFor="phone" className="font-serif text-2xl">Phone *</label>
                     <input type="text" id="phone" placeholder="Phone ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-2 flex flex-col">
                     <label htmlFor="address" className="font-serif text-2xl">Address *</label>
                     <input type="text" id="address" placeholder="Address ..." className="p-2 rounded" />
                  </div>
                  <div className="col-span-2 flex flex-col">
                     <label htmlFor="request" className="font-serif text-2xl">Requests (Optional) *</label>
                     <textarea type="text" id="request" placeholder="Please enter your requests here. (Optional)" className="p-2 rounded h-44" />
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                     <label className="font-serif text-3xl col-span-2">Select Payment Methods</label>
                     <label htmlFor="arrival" className="flex items-center gap-2 border rounded p-2">
                        <input type="radio" id="arrival" name="payment" />
                        <img className="h-[64px]" src="/src/assets/Hotel Profile website/ic-payments-payment_on_delivery-xs 1.png" alt="payment on delivery" />
                        Payment On Arrival
                     </label>
                     <label htmlFor="paypal" className="flex items-center gap-2 border rounded p-2">
                        <input type="radio" id="paypal" name="payment" />
                        <img className="h-[64px]" src="/src/assets/Hotel Profile website/paypal-light-mode 1.png" alt="payment on delivery" />
                        Pay With PayPal
                     </label>
                     <label htmlFor="credit" className="flex items-center gap-2 border rounded p-2">
                        <input type="radio" id="credit" name="payment" />
                        <img className="h-[64px]" src="/src/assets/Hotel Profile website/mastercard 1.png" alt="payment on delivery" />
                        Credit Or Debit Card
                     </label>
                  </div>
                  <div>
                     <button className="bg-customPurple w-full py-3">Check Out</button>
                  </div>
               </form>
            </div>

            <div className="col-span-1">
               <div className="" style={styles.boxShadow}>
                  <h3 className="font-serif text-2xl text-white bg-customPurple px-5 py-3">Your Reservation</h3>
                  <div className="text-white font-serif text-xl h-[230px] bg-cover p-5" style={styles.deluxeRoomBg}>
                     <p>Deluxe Room</p>
                  </div>
                  <div className="flex flex-col gap-4 p-8 mb-5">
                     <p><img className="inline" src="/src/assets/Hotel Profile website/calendar-days.svg" alt="calendar" /> Check-in : 28 Dec 2024, Saturday</p>
                     <p><img className="inline" src="/src/assets/Hotel Profile website/calendar-days.svg" alt="calendar" /> Check-out : 30 Dec 2024, Monday</p>
                     <p><img className="inline" src="/src/assets/Hotel Profile website/bed-double.svg" alt="bed-double" /> Room : 1 x Deluxe Room</p>
                     <p><img className="inline" src="/src/assets/Hotel Profile website/users.svg" alt="bed-double" /> Guests : 2 People</p>
                     <p><img className="inline" src="/src/assets/Hotel Profile website/calendar-check.svg" alt="bed-double" /> Nights : 2 Nights</p>
                  </div>
               </div>
               <div className="" style={styles.boxShadow}>
                  <h3 className="font-serif text-2xl text-white bg-customPurple px-5 py-3">Total</h3>
                  <div className="p-4">
                     <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                           <div>Room Subtotal :</div>
                           <div>170$</div>
                        </div>
                        <div className="flex justify-between items-center">
                           <div>Tax Amount :</div>
                           <div>15$</div>
                        </div>
                        <div className="flex justify-between items-center">
                           <div>Service Fee :</div>
                           <div>15$</div>
                        </div>
                        <div className="flex justify-between items-center border-b-2 border-gray-500 pb-3">
                           <div>Discount :</div>
                           <div>0$</div>
                        </div>
                        <div className="flex justify-between items-center">
                           <div>Total :</div>
                           <div>200$</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </Container>
      </>
   );
};

export default Booking;
