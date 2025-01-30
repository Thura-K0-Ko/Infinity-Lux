import React from "react";

const VoucherCard = () => {
   return (
      <div className="shadow-xl">
         <h3 className="font-heading text-2xl md:text-[32px] font-normal text-white bg-customPurple-500 p-5">Total</h3>
         <div className="p-8">
            <div className="flex flex-col gap-7">
               <div className="flex justify-between items-center text-customGray-500 text-xl font-medium">
                  <div className="font-medium">Room Subtotal :</div>
                  <div className="font-normal">170$</div>
               </div>
               <div className="flex justify-between items-center text-customGray-500 text-xl font-medium">
                  <div className="font-medium">Tax Amount :</div>
                  <div className="font-normal">15$</div>
               </div>
               <div className="flex justify-between items-center text-customGray-500 text-xl font-medium">
                  <div className="font-medium">Service Fee :</div>
                  <div className="font-normal">15$</div>
               </div>
               <div className="flex justify-between items-center text-customGray-500 text-xl font-medium">
                  <div className="font-medium">Discount :</div>
                  <div className="font-normal">0$</div>
               </div>
               <div className="bg-gray-500 h-[1px]" />
               <div className="flex justify-between items-center text-customGray-500 text-xl font-medium">
                  <div className="font-medium">Total :</div>
                  <div className="font-normal">200$</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default VoucherCard;
