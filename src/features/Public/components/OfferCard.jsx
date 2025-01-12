import React from "react";
import Container from "../../../components/Container";
import useOfferStore from "../stores/useOfferStore";

const OfferCard = () => {
   const {offers} = useOfferStore();
   return (
      <div className="bg-white py-[60px]">
         <Container>
            <h5 className="text-center text-customPurple-500 text-2xl font-medium mb-6">Comfort & Relax</h5>
            <h3 className="text-center text-customGray-500 font-heading text-5xl font-normal mb-[60px]">Exclusive Offers</h3>
            <div className="grid grid-cols-3 gap-5">
               {offers.map((offer) => (
                  <div key={offer.id} style={offer.background} className="w-[413px] h-[512px] bg-contain bg-no-repeat p-8 flex flex-col">
                     {offer.discount && (<div className="w-max bg-white text-customPurple-500 text-2xl font-semibold p-5">{offer.discount}</div>)}
                     {offer.event && (<div className="mt-auto font-heading text-white text-4xl font-normal">{offer.event}</div>)}
                  </div>
               ))}
            </div>
         </Container>
      </div>
   );
};

export default OfferCard;
