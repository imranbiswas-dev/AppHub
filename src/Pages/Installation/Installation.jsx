import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import InstallCard from "./InstallCard";

const Installation = () => {
  const { install } = useContext(AppContext);
  return (
    <div className="max-w-7xl lg:mx-auto mx-5 min-h-screen">
      <header className="text-center pt-5 md:pt-10 space-y-2">
        <h2 className="text-xl font-semibold">Your Installed Apps</h2>
        <p className="text-gray-500 mx-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </header>

      <main>
        <div className="flex justify-between">
          <div>{install.length} Apps Found</div>
          <p>Sort By Size</p>
        </div>

        {install.length > 0 ? (
          <div className="flex flex-col gap-5 mt-5 ">
            {install.map((app) => (
              <InstallCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <p className="text-center text-2xl">No app Installed</p>
        )}
      </main>
      <h2></h2>
    </div>
  );
};

export default Installation;
