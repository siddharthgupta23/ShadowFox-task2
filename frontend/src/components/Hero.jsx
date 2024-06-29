import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaStarOfDavid } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../input.css";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full bg-gray-700 pb-12">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
        <p className="text-blue-500 regular-16 mt-6 max-w-[33rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
        <div className="flexStart !items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-3">
          <FaStarOfDavid/>
          <FaStarOfDavid/>
          <FaStarOfDavid/>
            
          </div>
          <div className="bold-16 sm:bold-20">
            176k
            <span className="regular-16 sm:regular-20">Excellent Reviews</span>
          </div>
        </div>
        <div className="max-xs:flex col flex gap-2">
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Shop NOW
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}>
            <MdOutlineLocalOffer className="text-2xl" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
