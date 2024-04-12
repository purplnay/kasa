import { createBrowserRouter } from "react-router-dom";
import AccueilPage from "../pages/AccueilPage";
import FicheLogementPage from "../pages/FicheLogementPage";
import AProposPage from "../pages/AProposPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AccueilPage />,
      },
      {
        path: "/fiche-logement/:id",
        element: <FicheLogementPage />,
      },
      {
        path: "/a-propos",
        element: <AProposPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ]
  },
]);
