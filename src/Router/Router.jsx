import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/Apps/Apps";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/Apps/AppDetails";
import SearchResult from "../Components/SearchFeature/SearchResult";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/apps.json").then(res => res.json()),
        Component: AppDetails,
        
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/search",
        Component: SearchResult,
      },
    ],
  },
]);
