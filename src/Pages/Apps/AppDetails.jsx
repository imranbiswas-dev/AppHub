import React from "react";
import { useLoaderData, useParams } from "react-router";
import AppDetailsCard from "./AppDetailsCard";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const apps = data.filter((app) => app.id == id);

  return (
    <div>
      <div>
        {apps.map((app) => (
          <AppDetailsCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AppDetails;
