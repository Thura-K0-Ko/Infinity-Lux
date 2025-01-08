import React from "react";
import { Link, useParams } from "react-router-dom";
import useRoomStore from "../../stores/useRoomStore";

const SimilarRoomCard = () => {
   const { rooms } = useRoomStore();
   const params = useParams();

   const similarRoom = rooms.filter((room) => room.id != params.id).slice(0,3);

   return (
      <div>
         <h6 className="text-display text-center text-2xl font-medium mb-6">
            Comfort & Relax
         </h6>
         <h3 className="text-title text-center text-5xl font-normal font-heading mb-[60px]">
            Similar Rooms
         </h3>
         <div className="grid grid-cols-3 gap-5 mb-[200px]">
            {similarRoom.map((room, index) => (
               <div
                  key={index}
                  style={{ backgroundImage: `url('${room.img}')` }}
                  className="col-span-1 h-[512px] bg-center bg-no-repeat"
               >
                  <div className="flex flex-col justify-between h-full">
                     <div className="flex justify-end">
                        <Link
                           to={"/booking"}
                           className="origin-[109px_37px] -rotate-90 text-white text-2xl font-semibold border border-white px-10 py-5 m-5"
                        >
                           BOOK
                        </Link>
                     </div>
                     <div className="flex flex-col gap-3 text-white font-normal p-8">
                        <h5 className="text-2xl">{room.price}</h5>
                        <h4 className="text-4xl font-heading">
                           {room.category}
                        </h4>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default SimilarRoomCard;
