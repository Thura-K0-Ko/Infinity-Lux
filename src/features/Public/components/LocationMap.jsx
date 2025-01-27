import React from "react";

const LocationMap = () => {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30573.06908554243!2d98.47663856774314!3d16.695206937767086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30dd9e49df92d2a7%3A0xbebc63f056382797!2sCrocodile%20Monastery!5e0!3m2!1sen!2smm!4v1737531032350!5m2!1sen!2smm"
        className=" w-full h-[416px] xl:h-[750px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default LocationMap;
