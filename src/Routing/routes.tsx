import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

import { UserDetailsPage } from "./userDetailsPage";
import { Layout } from "./Layout";
import { UserPage } from "./userPage";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "user",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetailsPage /> }],
      },
    ],
  },
]);

export default rout;
