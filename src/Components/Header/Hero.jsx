import React from "react";
import PlayStore from "../../assets/PlayStore.png";
import AppStore from "../../assets/AppStore.png";
import banner from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col justify-items-center items-center text-center pt-5 space-y-3 lg:space-y-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        We Build <br />
        <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="md:text-lg lg:text-xl md:w-[70%] mx-5 text-[#627382] ">
        At AppHub , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-5 font-semibold">
        <button className="btn">
          <img className="w-5 h-5" src={PlayStore} alt="" />
          <p>Play Store</p>
        </button>
        <button className="btn">
          <img className="w-5 h-5" src={AppStore} alt="" /> <p>App Store</p>
        </button>
      </div>
      </div>

      {/* Banner */}
      <div className="md:w-3xl w-86 mx-auto md:mt-20 mt-10">
        <img className="" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
