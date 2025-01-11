
import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({event}) => {
   return (
      <div key={event.id} className="relative h-[530px]">
         <div className={`${event.id%2 === 0 ? "absolute right-0" : "relative"}`}>
            <img className="h-[530px] w-auto" src={event.img} alt={event.title} />
         </div>
         <div className={`absolute top-10 ${event.id%2 !== 0 && "right-0"} w-[630px] bg-white p-8`}>
            <h3 className="text-eventDisplay text-2xl font-medium mb-6">{event.display}</h3>
            <h2 className="text-eventTitle font-heading text-5xl font-normal mb-9">{event.title}</h2>
            <p className="text-gray-500 text-xl font-light tracking-[0.1px] mb-9">{event.description}</p>
            <Link to={event.path} className="bg-customPurple text-white text-2xl font-semibold px-10 py-5">View Details</Link>
         </div>
      </div>
      <div
        className={`absolute top-10 ${
          event.id % 2 !== 0 && "right-0"
        } w-[630px] bg-white p-8`}
      >
        <h3 className="text-eventDisplay text-2xl font-medium mb-6">
          {event.display}
        </h3>
        <h2 className="text-eventTitle font-heading text-5xl font-normal mb-9">
          {event.title}
        </h2>
        <p className="text-gray-500 text-xl font-light tracking-[0.1px] mb-9">
          {event.description}
        </p>
        <button className="bg-customPurple-500 text-white text-2xl font-semibold px-10 py-5">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
