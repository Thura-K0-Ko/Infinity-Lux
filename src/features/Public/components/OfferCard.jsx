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
            <div className="w-full overflow-x-scroll hsb whitespace-nowrap">
               {offers.map((offer) => (
                  <div key={offer.id} className="inline-block w-1/2 xl:w-1/3 h-[512px] p-8">
                  <div style={offer.background} className="flex flex-col justify-between h-full bg-cover bg-no-repeat p-8">
                     <div className={`${offer.discount && 'w-max bg-white text-customPurple-500 text-2xl font-semibold p-5'}`}>{offer.discount}</div>
                     <div className={`${offer.event && 'font-heading text-white text-4xl font-normal'}`}>{offer.event}</div>
                  </div>
                  </div>
               ))}
            </div>
         </Container>
      </div>
   );
};

export default OfferCard;
