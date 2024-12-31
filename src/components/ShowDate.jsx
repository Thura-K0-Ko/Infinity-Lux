import React from "react";

const ShowDate = ({ timeStamp }) => {
  const date = new Date(timeStamp);
  const currentDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <>
      <p className=" text-xs">{currentDate}</p>
      <p className=" text-xs">{currentTime}</p>
    </>
  );
};

export default ShowDate;
