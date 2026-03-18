import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";

const Apps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
      });
  }, []);
  return (
    <div className="bg-base-200 pt-5">
      <div className="max-w-7xl lg:mx-auto mx-5">
        <header className="text-center space-y-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">Our All Applications</h2>
          <p className="mx-2 text-gray-600">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </header>
        <main>
          <div className="flex justify-between mt-5 md:mt-10">
            <h3 className="font-semibold text-lg md:text-xl">({apps.length}) Apps Found</h3>
            <label className="input w-44 md:w-96">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>
          </div>
          {/* Card */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-3 justify-self-center mt-3 md:mt-5">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Apps;
