import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="bg-Cta h-20 flex items-center ">
        <div className="w-2/4 justify-center m-auto flex" >
        <Image
          src="/img/logo.jpg"
          width={30}
          height={100}
          alt="Picture of the author"
        />
          <span className="ml-10">

          <div></div>
          <div></div>
          <h2>contact@performexoffcial.com</h2>
          <p className="text-center">PeformEx 2023</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
