import React from "react";
import { FaDownload } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id,title, size, ratingAvg, image } = app;
  return (
    <Link to={`/details/${id}`} className="lg:w-[248px] lg:h-[335px] w-45 h-65 shadow-md p-3 border border-base-300 bg-base-100 rounded-xl">
      <div className="">
        <img className="h-[153px] w-[153px] lg:w-[200px] lg:h-[200px] mx-auto" src={image} alt="" />
      </div>
      <h3 className="mt-5 text-lg font-semibold mb-3">{title}</h3>
      <div className="flex justify-between ">
        <p className="flex items-center gap-2 text-[#00D390]">
          <FaDownload /> {size}MB
        </p>
        <p className="flex items-center gap-2 text-[#FF8811]">
          <FcRating /> {ratingAvg}
        </p>
      </div>
    </Link>
  );
};

export default AppCard;
