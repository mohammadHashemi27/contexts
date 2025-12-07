import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

import ProductDetails from "./productionDetails";
import { GridProd } from "./gridProd";

const productRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <GridProd /> },
      { path: "productionDetails/:id", element: <ProductDetails /> },
    ],
  },
]);

export default productRouter;
