import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error404 from "../Pages/Error404";
import Home from "../Pages/Home/Home";
import ExploreArtworks from "../Pages/ExploreArtworks";
import AddArtwork from "../Pages/AddArtwork";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/explore-artwork",
        element: <ExploreArtworks />,
      },
      {
        path: "/add-artwork",
        element: <AddArtwork />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
