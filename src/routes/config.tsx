import type { Route } from "./types";
import { Navigate } from "react-router-dom";

import Content from "~/pages/content/App";
import RedirectPage from "~/pages/redirect-page";

export const appRouter: Route[] = [
  {
    path: "/",
    element: <Navigate to="/content" />,
  },
  {
    path: "/content",
    element: <Content />,
  },
  {
    path: "/page/redirect",
    element: <RedirectPage />
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
];
