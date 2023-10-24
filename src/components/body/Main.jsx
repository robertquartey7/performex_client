import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import homeimg from "../../../public/img/homeimg.jpg";
import place from "../../../public/img/place.png";
import Image from "next/image";
import "swiper/css/pagination";

const Main = () => {
  return (
    <>
      <div className=" w-scrren  pt-2 bg-neutral">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full   mb-10 "
        >
          <SwiperSlide>
            <Image
              src={homeimg}
              className="w-screen"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div className="w-screen flex flex-col justify-center">
        <section className="flex  m-auto md:w-2/3   ">
          <div className=" flex w-96 h-72 mr-10 items-center  bg-gry p-50">
            <p className=" w-48 font-bold text-lg text-center m-auto">
              {" "}
              COULD WE HAVE A USER UTILIZING THE PLATFORM HERE{" "}
            </p>
          </div>
          <div className=" w-4/5">
            <h3 className="font-bold mb-4 text-2xl">
              A <span className="text-Cta">SOCIAL PLATFORM</span> FOR ATHLETES
              AND RECRUITES.{" "}
            </h3>
            <p className="mb-3">
              We streamline the recruitment process, ensuring that the right
              talent meets the right opportunity.
            </p>
            <p className="mb-3">
              <span className=" text-webgreen  font-bold">ATHLETES</span>{" "}
              creates profiles, detailing skills achievements, and potential.
            </p>
            <p className="mb-3">
              <span className="text-webgreen font-bold">RECRUITERS </span>use
              the advanced search algorithm to find the perfect recruit for the
              team.
            </p>
          </div>
        </section>
        <div className="bg-neutral flex flex-col justify-center w-screen">
          <section className="border-4 md:w-2/3 flex flex-col m-auto  ">
            <h3 className="mt-5  font-bold text-2xl w-80">
              COMMUNICATE HOW WE ALREADY KNOW{" "}
            </h3>
            <p className=" text-color-neutral w-96">
              This platform is a social network for findidng recuriter or
              athletes you need to talk with{" "}
            </p>
            <div className="flex text-white    mt-5">
              <div className="relative ml-8">
                <Image className=""src={place} alt="Picture of the author" />
                <div className="h-20 flex   items-center absolute bottom-0 w-full left-0 rounded-b-2xl  bg-Cta">
                  <span className=" ml-3 ">

                  <h6 className="text-xs">MADE FOR...</h6>
                  <p className="text-2xl">HIGH SCHOOL ATHLETES </p>
                  </span>
                </div>
              </div>
              <div className="relative  ml-8">
                <Image src={place} alt="Picture of the author" />
                <div className="h-20 flex   items-center absolute bottom-0 w-full left-0 rounded-b-2xl  bg-Cta">
                  <span className=" ml-3 ">

                  <h6 className="text-xs">MADE FOR...</h6>
                  <p className="text-2xl">HIGH SCHOOL ATHLETES </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-green-600 rounded-xl text-white  mt-7 p-4">
              <h5 className="text-center  ">HOW TO GET STARTED </h5>
              <div className="flex justify-center mt-4 ">

              <div className="mr-4  text-center w-56">
                <p className="">Create a Profile for Others to View</p>
                <div className="flex  justify-center ">

                <svg xmlns="http://www.w3.org/2000/svg" height="5em" fill="white" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                </div>
              </div>
              <div  className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="3em" fill="#B4965E" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></div>
              <div className="ml-4 text-center mr-4 w-56">
                <p className=" ">Use the Search to Find Athletes (or You!)</p>
                <div className="flex  justify-center ">

                <svg xmlns="http://www.w3.org/2000/svg" height="5em"  fill="white" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                </div>
              </div>
              <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="3em" fill="#B4965E" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></div>
              <div className="ml-4 w-56 text-center">
                <p>Commuincate with Potential Player</p>
                <div className="flex  justify-center ">

                <svg xmlns="http://www.w3.org/2000/svg" height="5em"  fill="white" viewBox="0 0 576 512"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                </div>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
