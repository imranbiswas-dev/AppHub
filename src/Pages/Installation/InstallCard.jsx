import React, { useContext } from "react";
import { FaDownload } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { AppContext } from "../../Context/AppContext";

const InstallCard = ({ app }) => {
  const { id, title, image, size, ratingAvg, downloads } = app;
  const { onUninstall } = useContext(AppContext);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between bg-white p-3 pt-8 shadow-md">
      <div className="flex w-full space-x-2 sm:space-x-4 items-center ">
        <img
          className="shrink-0 object-cover w-10 h-10 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={image}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-3">
              <h3 className="text-md font-bold leading-snug sm:pr-8 ">
                {title}
              </h3>
              <div className="flex gap-5">
                <div className="flex justify-between gap-5">
                  <p className="flex items-center gap-2 text-[#00D390]">
                    <FaDownload /> {downloads}
                  </p>
                  <p className="flex items-center gap-2 text-[#FF8811]">
                    <FcRating /> {ratingAvg}
                  </p>
                  <p className="flex items-center gap-2 ">{size} MB</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <button
                onClick={() => onUninstall(id)}
                className="btn btn-success btn-sm md:btn-md text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallCard;
