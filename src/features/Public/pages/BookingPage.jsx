import React from "react";
import Container from "../../../components/Container";
import HeroSection from "../components/HeroSection";
import BillingForm from "../components/BillingForm";
import ReservationCard from "../components/ReservationCard";
import VoucherCard from "../components/VoucherCard";

const Booking = () => {
  const styles = {
    deluxeRoomBg: {
      backgroundImage:
        "url('/public/assets/Hotel Profile website/image-6.png')",
    },
    boxShadow: {
      boxShadow: "0 2px 1px 2px #888",
    },
  };
  return (
    <>
      <HeroSection
        heroImg={
          "/public/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (3).png"
        }
        titles={["Booking"]}
      />
      {/* <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/public/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (3).png"
            alt="Luxury hotel room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <Header />
      </div> */}
      <Container>
        <div className="grid grid-cols-3 gap-5 my-20">
          <div className="col-span-2">
            <h3 className="font-heading text-[40px] mb-9">Billing Details</h3>
            <form className="grid grid-cols-2 gap-8 mb-[60px]">
              <div className="col-span-1 flex flex-col">
                <label htmlFor="fname" className="font-heading text-2xl">
                  First Name *
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First name ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label htmlFor="lname" className="font-heading text-2xl">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last name ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label htmlFor="country" className="font-heading text-2xl">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label htmlFor="city" className="font-heading text-2xl">
                  Town/City *
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Town/City ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label htmlFor="email" className="font-heading text-2xl">
                  Email *
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-1 flex flex-col">
                <label htmlFor="phone" className="font-heading text-2xl">
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label htmlFor="address" className="font-heading text-2xl">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address ..."
                  className="p-2 rounded"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                <label htmlFor="request" className="font-heading text-2xl">
                  Requests (Optional) *
                </label>
                <textarea
                  type="text"
                  id="request"
                  placeholder="Please enter your requests here. (Optional)"
                  className="p-2 rounded h-44"
                />
              </div>
            </form>
            <h3 className="font-heading text-[40px] mb-5">
              Select Payment Methods
            </h3>
            <div className="flex flex-col gap-3 mb-14">
              <label
                htmlFor="arrival"
                className="flex items-center gap-2 border border-gray-500 rounded p-2"
              >
                <input type="radio" id="arrival" name="payment" />
                <img
                  className="h-[72px]"
                  src="/public/assets/Hotel Profile website/ic-payments-payment_on_delivery-xs 1.png"
                  alt="payment on delivery"
                />
                <span className="text-xl">Payment On Arrival</span>
              </label>
              <label
                htmlFor="paypal"
                className="flex items-center gap-2 border border-gray-500 rounded p-2"
              >
                <input type="radio" id="paypal" name="payment" />
                <img
                  className="h-[72px]"
                  src="/public/assets/Hotel Profile website/paypal-light-mode 1.png"
                  alt="payment on delivery"
                />
                <span className="text-xl">Pay With PayPal</span>
              </label>
              <label
                htmlFor="credit"
                className="flex items-center gap-2 border border-gray-500 rounded p-2"
              >
                <input type="radio" id="credit" name="payment" />
                <img
                  className="h-[72px]"
                  src="/public/assets/Hotel Profile website/mastercard 1.png"
                  alt="payment on delivery"
                />
                <span className="text-xl">Credit Or Debit Card</span>
              </label>
            </div>
            <div>
              <button className="bg-customPurple-500 text-2xl/6 w-1/2 px-10 py-5">
                Check Out
              </button>
            </div>
          </div>

          <div className="col-span-1">
            <div className="" style={styles.boxShadow}>
              <h3 className="font-heading text-[32px] text-white bg-customPurple-500 p-5">
                Your Reservation
              </h3>
              <div
                className="text-white font-heading text-xl h-[230px] bg-cover p-5"
                style={styles.deluxeRoomBg}
              >
                <p>Deluxe Room</p>
              </div>
              <div className="flex flex-col gap-4 p-7 mb-20">
                <p className="flex items-center gap-1">
                  <img
                    src="/public/assets/Hotel Profile website/calendar-days.svg"
                    alt="calendar"
                  />{" "}
                  <span className="">Check-in : 28 Dec 2024, Saturday</span>
                </p>
                <p className="flex items-center gap-1">
                  <img
                    src="/public/assets/Hotel Profile website/calendar-days.svg"
                    alt="calendar"
                  />{" "}
                  <span className="">Check-out : 30 Dec 2024, Monday</span>
                </p>
                <p className="flex items-center gap-1">
                  <img
                    src="/public/assets/Hotel Profile website/bed-double.svg"
                    alt="bed-double"
                  />{" "}
                  <span className="">Room : 1 x Deluxe Room</span>
                </p>
                <p className="flex items-center gap-1">
                  <img
                    src="/public/assets/Hotel Profile website/users.svg"
                    alt="bed-double"
                  />{" "}
                  <span className="">Guests : 2 People</span>
                </p>
                <p className="flex items-center gap-1">
                  <img
                    src="/public/assets/Hotel Profile website/calendar-check.svg"
                    alt="bed-double"
                  />{" "}
                  <span className="">Nights : 2 Nights</span>
                </p>
              </div>
            </div>
            <div className="" style={styles.boxShadow}>
              <h3 className="font-heading text-3xl/8 text-white bg-customPurple-500 p-5">
                Total
              </h3>
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
  return (
    <>
      <HeroSection
        heroImg={
          "/public/assets/Hotel Profile website/Leonardo_Kino_XL_light_purple_hotel_room_2 (3).png"
        }
        titles={[""]}
      />
      <Container>
        <div className="grid grid-cols-3 gap-5 my-[174px]">
          <BillingForm />
          <div className="">
            <ReservationCard />
            <VoucherCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Booking;
