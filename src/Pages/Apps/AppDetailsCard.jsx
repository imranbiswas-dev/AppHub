import React, { useContext } from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { AppContext } from "../../Context/AppContext";

const AppDetailsCard = ({ app }) => {
  const {
    title,
    image,
    companyName,
    size,
    ratingAvg,
    reviews,
    description,
    downloads,
  } = app;
  const { onInstall, install } = useContext(AppContext);

  const isInstall = install.some((item) => item.id === app.id);

  return (
    <div className="max-w-7xl lg:mx-auto mx-5 pt-10 min-h-screen">
      <div className="flex md:flex-col py-6 flex-row justify-between items-center ">
        <div className="flex  gap-5 w-full space-x-2 sm:space-x-4">
          <img
            className="shrink-0 object-cover  dark:border- rounded outline-none 
            lg:w-77.5 lg:h-77.5 w-35 h-35
                 dark:bg-gray-500 hidden md:block"
            src={image}
            alt="Polaroid camera"
          />

          <div className="flex flex-col justify-between w-full pb-4 ">
            <div className="flex gap-5 items-center w-full pb-2 space-x-2">
              <img
                className="shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-40 sm:h-40 lg:w-60 lg:h-60
                 dark:bg-gray-500 sm:hidden "
                src={image}
                alt="Polaroid camera"
              />
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug sm:pr-8">
                  {title}
                </h3>
                <p className="text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  {companyName}
                </p>
              </div>
            </div>
            <span className="my-5">
              <hr />
            </span>
            <div className="flex text-sm gap-5 md:gap-10">
              <div className="space-y-2">
                <p className="space-y-2 text-[#00D390]">
                  <FaDownload size={24} />
                </p>
                <h4 className="md:text-lg font-semibold">Downloads</h4>
                {downloads}
              </div>
              <div className="space-y-2">
                <p className="space-y-2 text-[#FF8811]">
                  <FaDownload size={24} />
                </p>
                <h4 className="md:text-lg font-semibold">Average Ratings</h4>
                {ratingAvg}
              </div>
              <div className="space-y-2">
                <p className="space-y-2 text-[#632EE3]">
                  <MdOutlineRateReview size={24} />
                </p>
                <h4 className="md:text-lg font-semibold">Total Reviews</h4>
                {reviews}
              </div>
            </div>

            <div>
              <button
                onClick={() => onInstall(app)}
                className={`btn mt-5 text-white ${isInstall ? "btn-disabled bg-gray-500" : "btn-success"}`}
                disabled={isInstall}
              >
                {isInstall ? "Installed" : `Install Now (${size}MB)`}
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="my-5">
        <hr />
      </span>

      <section>
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold my-5">
          Description
        </h3>
        {description}
      </section>
    </div>
  );
};

export default AppDetailsCard;
