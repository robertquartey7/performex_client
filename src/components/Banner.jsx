import React from "react";

function Banner({ icon, message, button }) {
  return (
    <div className={`w-full p-2 bg-yellow-600 flex justify-between items-center gap-5`}>
      <div className="flex  items-center flex-grow gap-5">
        <span>{icon}</span>
        <span className="">{message}</span>
      </div>
      <div>{button}</div>
    </div>
  );
}

export default Banner;
