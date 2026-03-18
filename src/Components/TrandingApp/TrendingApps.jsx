import React, { useEffect, useState } from "react";
import AppCard from "../../Pages/Apps/AppCard";
import { Link } from "react-router";

const TrendingApps = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("/TrendingApps.json")
      .then((res) => res.json())
      .then((data) => {
        setTrending(data);
      });
  }, []);
  return (
    <div className=" flex flex-col  items-center  mt-10">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">Trending Apps</h2>
        <p className="w-2/3 mx-auto mt-2 text-gray-500">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-10 justify-self-center mt-3 md:mt-5">
        {trending.map((app) => (
          <AppCard app={app} />
        ))}
      </div>
      <Link to="/apps">
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5 md:mt-8 w-full md:w-36 lg:w-46">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
