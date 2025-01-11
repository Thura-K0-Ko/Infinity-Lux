import React from "react";

const BillingForm = () => {
  return (
    <div className="col-span-2">
      <h3 className="text-title font-heading text-[40px] font-normal mb-9">
        Billing Details
      </h3>
      <form className="grid grid-cols-2 gap-x-5 gap-y-8 mb-[60px]">
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="fname"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            First Name *
          </label>
          <input
            type="text"
            id="fname"
            placeholder="First name ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="lname"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lname"
            placeholder="Last name ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="country"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Country *
          </label>
          <input
            type="text"
            id="country"
            placeholder="Country ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="city"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Town/City *
          </label>
          <input
            type="text"
            id="city"
            placeholder="Town/City ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="email"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Email *
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="flex flex-col gap-[9px]">
          <label
            htmlFor="phone"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Phone *
          </label>
          <input
            type="number"
            id="phone"
            placeholder="Phone ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-[9px]">
          <label
            htmlFor="address"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Address *
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address ..."
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded"
          />
        </div>
        <div className="col-span-2 flex flex-col gap-[9px]">
          <label
            htmlFor="request"
            className="text-customBlue-950 font-heading text-2xl font-normal tracking-[0.12px]"
          >
            Requests (Optional) *
          </label>
          <textarea
            type="text"
            id="request"
            placeholder="Please enter your requests here. (Optional)"
            className="placeholder:text-gray-500 text-base font-normal tracking-[0.08px] px-4 py-[14px] rounded h-44"
          />
        </div>
      </form>
      <h3 className="font-heading text-[40px] font-normal tracking-[0.2px] mb-9">
        Select Payment Methods
      </h3>
      <div className="flex flex-col gap-8 mb-[60px]">
        <label
          htmlFor="arrival"
          className="flex items-center gap-3 border border-customWhite-500 rounded px-5 py-[10px]"
        >
          <input type="radio" id="arrival" name="payment" />
          <img
            className="h-[72px]"
            src="/assets/Hotel Profile website/ic-payments-payment_on_delivery-xs 1.png"
            alt="payment on delivery"
          />
          <span className="text-xl font-medium tracking-[0.1px]">
            Payment On Arrival
          </span>
        </label>
        <label
          htmlFor="paypal"
          className="flex items-center gap-3 border border-customWhite-500 rounded px-5 py-[10px]"
        >
          <input type="radio" id="paypal" name="payment" />
          <img
            className="h-[72px]"
            src="/assets/Hotel Profile website/paypal-light-mode 1.png"
            alt="payment on delivery"
          />
          <span className="text-xl font-medium tracking-[0.1px]">
            Pay With PayPal
          </span>
        </label>
        <label
          htmlFor="credit"
          className="flex items-center gap-3 border border-customWhite-500 rounded px-5 py-[10px]"
        >
          <input type="radio" id="credit" name="payment" />
          <img
            className="h-[72px]"
            src="/assets/Hotel Profile website/mastercard 1.png"
            alt="payment on delivery"
          />
          <span className="text-xl font-medium tracking-[0.1px]">
            Credit Or Debit Card
          </span>
        </label>
      </div>
      <div>
        <button className="bg-customPurple text-white text-2xl font-semibold w-1/2 px-10 py-5">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default BillingForm;
