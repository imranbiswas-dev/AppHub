import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AppCard from "../../Pages/Apps/AppCard";

const SearchResult = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        if (query) {
          const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()),
          );
          setItems(filtered);
        } else {
          setItems([]);
        }
      });
  }, [query]);
  return (
    <div className="max-w-7xl lg:mx-auto mx-5 pt-5 ">
      <h2 className="text-lg md:text-xl lg:text-2xl">Search result for <span className="font-semibold">"{query}"</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-3 justify-self-center mt-3 md:mt-5">
        {items.length > 0
          ? items.map((app) => <AppCard key={app.id} app={app} />)
          : "App not found"}
      </div>
    </div>
  );
};

export default SearchResult;
